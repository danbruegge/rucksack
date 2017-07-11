import React, { Component } from 'react';

import { getTabs, setTabs } from 'app/storage';

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
                {this.state.tabs.map((list, index) => (
                    this.renderTabList(index)),
                )}
            </div>
        );
    }

    renderTabList(id) {
        return (
            <div>
                <ul>
                    {this.state.tabs[id].map(({ url, title }) => (
                        <li>
                            <a href={url}>{title}</a>
                        </li>
                    ))}
                </ul>
                <button onClick={() => this.onOpenList(id)}>
                    Open list #{id}
                </button>
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

export default TabLists;
