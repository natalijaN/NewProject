import React, {Component} from 'react'

class LongText extends Component { 
    state = { showAll: false }
    showMore = () => this.setState({showAll: true}); 
    showLess = () => this.setState({showAll: false});
    render() {
        const {content, limit} = this.props;
        const {showAll} = this.state;
        if(content.length<=limit) {
            return <div>{content}</div>
        }
        if(showAll) {
            return <div>
                {content}
                <a onClick={this.showLess}>Read less</a>
            </div>
        }
        const toShow = content.substring(0,limit)+"...";
        return <div>
            {toShow}
        </div>
    }
}

export default LongText