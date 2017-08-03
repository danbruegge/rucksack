import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTabs, setTabs } from 'app/utils/storage';
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
                {Object.entries(this.state.tabs).map((list) => {
                    const id = list[0];
                    const tabs = list[1];

                    return (
                        <TabList
                            key={id}
                            listId={id}
                            tabs={tabs}
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
            const { [id]: removedTabs, ...remainingTabs } = prevState.tabs;

            setTabs(remainingTabs);

            return {
                tabs: remainingTabs,
            };
        });
    }
}

const mapStateToProps = ({ addTab }) => ({
    addTab,
});
export default connect(mapStateToProps)(TabLists);
