import React, {Component} from "react";
import {Redirect} from "react-router-dom"
import {Form, Icon, Input, Button, Checkbox} from "antd";
import "./login.scss";

const FormItem = Form.Item;

class LoginRouter{

}
const fakeAuth = {
    isAuthenticated: true,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};


class NormalLoginForm extends Component {

   state = {
        redirectToReferrer: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.login();
            }
        });
    }
    login = () => {
        if (fakeAuth.isAuthenticated) {
            this.props.history.replace('/home/');
        }
    }


    render() {
        const {getFieldDecorator} = this.props.form;
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <div className="login-container ">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {
                            getFieldDecorator('userName', {
                                rules: [{required: true, message: 'Please input your username!'}]
                            })(
                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.24)'}}/>} type="text"
                                       placeholder="Username"/>
                            )
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input you Password!'}],
                            })(
                                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="text"
                                       placeholder="Password"/>
                            )
                        }
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuesPropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Sign in
                        </Button>
                        Or <a href=""> Sign up</a>
                    </FormItem>
                </Form>
            </div>

        )
    }
}

export const WrappedNornamLoginForm = Form.create()(NormalLoginForm);
