import React,
       { Component, Fragment }            from 'react';
import { Link }                 from 'react-router-dom';

import PerfectScrollbar         from 'react-perfect-scrollbar';

import { compose, withProps, lifecycle } from "recompose";

class TabHistory extends Component {

  constructor( props )
  {

    super();

    this.state = {
      tab_opened: false,
      routes: [],
    }

  }

  closeHistoryTab()
  {

    this.setState({
      tab_opened: false
    })

  }

  formatTimestampToDate( timestamp )
  {

    let date    = new Date(timestamp);
    let hours   = date.getHours();
        hours   = hours < 10
                  ? "0" + hours
                  : hours;

    let minutes = date.getMinutes();
        minutes = minutes < 10
                  ? "0" + minutes
                  : minutes;

    let year    = date.getFullYear();

    let mounth  = date.getMonth() + 1;
        mounth  = mounth < 10
                ? "0" + mounth
                : mounth;

    let day = date.getUTCDate();
        day = day < 10
              ? "0" + day
              : day;

    return day + "/" + mounth + "/"+ year + " " + hours + ':' + minutes;

  }

  openHistoryTab()
  {

    let { tab_opened } = this.state;

    if( tab_opened == false ){

      this.setState({
        tab_opened: true
      })

    }

  }

  renderBlockWithoutRoute()
  {

    let { texts }  = this.props;

    return (
      <div>
        <p data-info>{texts.no_have_routes}</p>
      </div>
    );

  }

  processHistoryRoute()
  {

    let self = this;
    let { history_routes,
          texts           }  = this.props;

    return history_routes.map( ( route, i ) => {

        return (
          <div data-history-block
            key={i}>
            <p><span>{texts.block_route.schedule}</span> { self.formatTimestampToDate( route.created ) } </p>
            <p><span>{texts.block_route.from}</span> { route.route[0] ? route.route[0].metadata.formated_address : "" } </p>
            <p><span>{texts.block_route.to}</span> { route.route[1] ? route.route[1].metadata.formated_address : "" } </p>
            <p><span>{texts.block_route.times_stop}</span> { route.route.length }</p>
            {/*<button>Visualizar</button>*/}
          </div>
        );

    })

  }

  render() {

    let self = this;
    let { tab_opened }  = this.state;
    let { history_routes,
          texts           }  = this.props;

    return (
      <div>

        <div  onClick={ () => { self.openHistoryTab() } }
              data-container-history={
              tab_opened === false
                ? "closed"
                : ""
              } >

          <button
            data-button-history
            className="icon-history"></button>

          <PerfectScrollbar>

            <div data-header>
              <p>{texts.title}</p>
              <button
                className="icon-close"
                onClick={ () => { self.closeHistoryTab() } }></button>
            </div>

            <div>

                {
                  history_routes.length > 0
                  ? this.processHistoryRoute()
                  : this.renderBlockWithoutRoute()
                }
            </div>

          </PerfectScrollbar>

        </div>

      </div>
    );
  }
}

export default TabHistory;
