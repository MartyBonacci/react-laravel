import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class BlogArticlePost extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            body: ''
        }
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleBodyChange(e) {
        this.setState({
            body: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Post a new article</div>

                            <div className="card-body">
                                <form>
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="enter blog name"
                                            onChange={this.handleNameChange.bind(this)}
                                            value={this.state.name}
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name="body"
                                            placeholder="enter blog body"
                                            onChange={this.handleBodyChange.bind(this)}
                                            value={this.state.body}
                                        />
                                    </div>
                                    <div>
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
