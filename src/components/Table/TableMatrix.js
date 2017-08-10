import React, { Component } from "react";
import PropTypes from 'prop-types';
//import j2m from 'jira2md';
//import ReactMarkdown from 'react-markdown';
import Loader from '../../components/Loader';
//import Badge from './badge';
import BadgeInfo from '../../containers/Badge/BadgeInfo';
//import { HtmlToReactParser } from 'html-to-react';
import "./styles.css";

const HtmlToReact = require('html-to-react');



class TableMatrix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: 0,
      content: ''
    };
  }

  componentDidMount() {
    const content = this.props.content;
    this.setState({
      content: content
    });
  }

  componentWillReceiveProps(newProps) {
    const content = newProps.content;
    this.setState({
      isLoaded: 1,
      content: content
    });
  }

  renderContent(content) {
    if (!content || content.length === 0) {
      return(
        <span />
      );
    }
    const HtmlToReactParser = HtmlToReact.Parser;
    const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
    const htmlToReactParser = new HtmlToReactParser();

    //const html = j2m.jira_to_html(content);
    const isValidNode = function () {
        return true;
    };

    // Order matters. Instructions are processed in
    // the order they're defined
    const processingInstructions = [
        {
           // This is REQUIRED, it tells the parser
           // that we want to insert our React
           // component as a child data-jira-key="NCPW-35"
           replaceChildren: true,
           shouldProcessNode: function (node) {
                return node.attribs && node.attribs['data-jira-key'];
            },
            processNode: function (node, children, index) {
              const id = (node.attribs && node.attribs['data-jira-key']) ? node.attribs['data-jira-key'] : 'test';
                return <BadgeInfo id={id} />;
            }
        },
        {
            // Anything else
            shouldProcessNode: function (node) {
                return true;
            },
            processNode: processNodeDefinitions.processDefaultNode,
        },
    ];
    //const reactElement = htmlToReactParser.parse(content);
    const reactComponent = htmlToReactParser.parseWithInstructions(
      content, isValidNode, processingInstructions);

    return(
      <div className="panel panel-default">
        <div className="panel-body">
          {reactComponent}
        </div>
      </div>
    );
  }

  render() {
    const content = this.state.content;

    if (!content || content.length === 0) {
      return (
        <Loader />
      );
    }

    return (
      <div>
        {this.renderContent(content)}
      </div>
    );
  }
}

TableMatrix.propTypes = {
  content: PropTypes.string
};

export default TableMatrix;
