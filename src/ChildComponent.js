import React from "react";

class ChildComponent extends React.Component
{
    state = 
    {
        show: false
    }
    handleShowHide = () =>
    {
        this.setState({
            show: !this.state.show
        })
    }
    render ()
    {
        let {a, deleteJob} = this.props;
        let {show} = this.state;
        return (
            <>
                {show === false ?
                    <button onClick={this.handleShowHide}>Show</button>
                    :
                    <>
                        {
                            a.map((item, index) => {
                                return (
                                    <>
                                        <div key={item.id}>{item.title} - {item.salary} <span onClick={() => deleteJob(item)}>x</span></div>
                                    </>
                                )
                            })
                        }
                        <button onClick={() => this.handleShowHide()}>Hide</button>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;