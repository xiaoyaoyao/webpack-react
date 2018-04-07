import React,{Component} from "react";
import {Icon} from "antd";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import "./home.scss";
const Tab1 = ()=>(
    <div>
        <h2>Tab1</h2>
    </div>
);
const Tab2 = ()=>(
    <div>
        <h2>Tab2</h2>
    </div>
);
const Tab3 = ()=>(
    <div>
        <h2>Tab3</h2>
    </div>
);
//动态加载路由
const routes = [
    {
        path: "/",
        exact: true,
        title:'科技',
        icon:'cloud',
        component: Tab1,
    },
    {
        path: "/tab2",
        title:'社会',
        icon:'global',
        component: Tab2,
    },
    {
        path: "/tab3",
        title:'娱乐',
        icon:'coffee',
        component: Tab3,
    },{
        path: "/tab3",
        title:'新闻',
        icon:'filter',
        component: Tab3,
    }, {
        path: "/tab3",
        title:'体育',
        icon:'team',
        component: Tab3,
    }
];

const BasicHome = ()=>(
    <Router>
        <div className="homeContainer">
            <ul className="leftSider">
                {routes.map((link,index)=>(
                    <li  key={'link'+index}  className="leftSiderItem">
                        <Icon type={link.icon} />
                        <Link to={link.path}>{link.title}</Link>
                    </li>

                ))}
            </ul>
            <div className="homeContent">
                {routes.map((route,index)=>(
                    <Route key={"route"+index}
                           path={route.path}
                           exact={route.exact}
                           component={route.component}/>
                ))
                }
            </div>
        </div>

    </Router>
);



export {BasicHome};
