import React, { Component } from "react";
import fetch from "unfetch";
import {
    STATUS,
    Loading,
    Avatar,
    Logo,
    Logotype,
    Container,
    Header
} from "gitstar-components";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import UserAvatar from "./Avatar";

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    request: operation => {
        const token = localStorage.getItem("github_token");
        if (token) {
            operation.setContext({
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
        }
    }
});

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const AUTH_API_URI = process.env.REACT_APP_AUTH_API_URI;

class App extends Component {
    state = {
        status: STATUS.INITIAL,
        token: null
    };
    componentDidMount() {
        const storedToken = localStorage.getItem("github_token");
        if (storedToken) {
            this.setState({
                token: storedToken,
                status: STATUS.AUTHENTICATED
            });
            return;
        }
        const code =
            window.location.href.match(/\?code=(.*)/) &&
            window.location.href.match(/\?code=(.*)/)[1];
        if (code) {
            this.setState({ status: STATUS.LOADING });
            fetch(`${AUTH_API_URI}${code}`)
                .then(response => response.json())
                .then(({ token }) => {
                    localStorage.setItem("github_token", token);
                    this.setState({
                        token,
                        status: STATUS.FINISHED_LOADING
                    });
                });
        }
    }
    render() {
        return (
            <ApolloProvider client={client}>
                <UserAvatar
                    style={{
                        transform: `scale(${
                            this.state.status === STATUS.AUTHENTICATED ? "1" : "0"
                            })`
                    }}
                />
                <a
                    style={{
                        display: this.state.status === STATUS.INITIAL ? "inline" : "none"
                    }}
                    href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
                >
                    Login
        </a>
                <Loading
                    status={this.state.status}
                    callback={() => {
                        if (this.props.status !== STATUS.AUTHENTICATED) {
                            this.setState({
                                status: STATUS.AUTHENTICATED
                            });
                        }
                    }}
                />
            </ApolloProvider>
        );
    }
}

export default App;
