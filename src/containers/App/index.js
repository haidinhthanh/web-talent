import React,{Component} from "react";
import Header from "../Header";
import Routes from "../../routes";
import SideBar from "../../component/SideBar";
import Footer from "../../containers/Footer";
import {BrowserRouter, Router} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import {css} from "aphrodite";
import { d, fled, w, ovfl, h } from "../../styles/themes";
import history from "../History";
class App extends Component{
    render(){
        return(
            <Provider store={store} >
                <Router history={history}>
                    <div className={css(d.flex, fled.c, w.w_100, h.h_100)}
                    >
                        <Header/>
                        <Routes/>
                        <Footer/>
                        <SideBar/>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App;