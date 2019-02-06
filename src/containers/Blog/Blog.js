import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import FullPost from '../../containers/Blog/FullPost/FullPost';
import NewPost from '../../containers/Blog/NewPost/NewPost';
import Posts from './Posts/Posts';
import './Blog.css';

class Blog extends Component {
    
    

    

    render () {
        return (
            <div className="Blog">
                <header>
                   <nav>
                        <ul>
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/new">Add</NavLink></li>
                        </ul>   
                    </nav> 
                </header>
                <Switch>
                  <Route path="/" exact component={Posts} />
                  <Route path="/new" component={NewPost} />
                  <Route path="/:id" exact component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;