import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTabs, setTabs } from 'app/storage';
import { TabList } from 'app/components';

class TabLists extends Component {
    state = {
        tabs: [],
    }

    componentDidMount() {
        getTabs().then((storage) => {
            this.setState(() => ({
                tabs: storage.tabs,
            }));
        });
    }

    render() {
        return (
            <div>
                {this.state.tabs.map((list, index) => {
                    const id = index;
                    return (
                        <TabList
                            key={id}
                            listId={id}
                            tabs={list}
                            onClick={() => this.onOpenList(id)}
                        />
                    );
                })}
            </div>
        );
    }

    onOpenList(id) {
        const tabsToOpen = this.state.tabs[id];

        tabsToOpen.map(tab => (
            browser.tabs.create({
                active: false,
                url: tab.url,
            })
        ));

        this.setState((prevState) => {
            const nextState = {
                tabs: [
                    ...prevState.tabs.slice(0, id),
                    ...prevState.tabs.slice(id + 1),
                ],
            };

            setTabs(nextState.tabs);

            return nextState;
        });
    }
}

const mapStateToProps = ({ addTab }) => ({
    addTab,
});
export default connect(mapStateToProps)(TabLists);
