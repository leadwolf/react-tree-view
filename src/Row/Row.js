import './row.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';

import { animations } from '../animations';
import { defaultNode, nodePropType } from '../proptypes';
import { DefaultContent, Indent } from './components';

const Row = ({ node, depth, ...rest }) => {
    const {
        classes: { root: classNameRoot = '', content: classNameContent = '' },
        styles: { root: styleRoot = undefined, content: styleContent = undefined },
        renderContent: CustomRenderContent,
        expandedRowIds,
        getAnimation,
        onClick,
        noIndent,
        renderChildren: customRenderChildren,
    } = rest;

    const isExpanded = Boolean(expandedRowIds[node.id]);
    const hasChildren = Boolean(node.children) && Boolean(node.children.length);
    const showChildren = hasChildren && isExpanded;
    const indentLeft = depth * 24;

    const contentProps = {
        node,
        depth,
        ...rest,
        isExpanded,
        hasChildren,
        indentLeft,
    };

    return (
        <div className={`rtv-row-container ${classNameRoot}`} style={styleRoot}>
            <div
                className={`rtv-row-content ${classNameContent}`}
                style={{ cursor: hasChildren ? 'pointer' : 'default', ...styleContent }}
                onClick={() => onClick(node)}
            >
                {!noIndent && <Indent indentLeft={indentLeft} />}
                {!CustomRenderContent && <DefaultContent {...contentProps} />}
                {CustomRenderContent && <CustomRenderContent {...contentProps} />}
            </div>
            {customRenderChildren &&
                customRenderChildren({ node, depth, ...rest, isExpanded, hasChildren, indentLeft })}
            {!customRenderChildren && (
                <VelocityTransitionGroup {...getAnimation(isExpanded, node)}>
                    {showChildren && (
                        <div className="rtv-node-children">
                            {node.children.map(child => (
                                <Row key={child.id} node={child} {...rest} depth={depth + 1} />
                            ))}
                        </div>
                    )}
                </VelocityTransitionGroup>
            )}
        </div>
    );
};

Row.propTypes = {
    /** CSS classes for the 'root' div and the 'content' div that wraps `renderContent` */
    classes: PropTypes.shape({
        root: PropTypes.string,
        content: PropTypes.string,
    }),
    /** Inline styles for convenience */
    styles: PropTypes.shape({
        root: PropTypes.object,
        content: PropTypes.object,
    }),
    /** object map where the kays are the ids of the expanded rows. The values just need to be truthy/falsy */
    expandedRowIds: PropTypes.object,
    /** @returns {Object} props that will be given to VelocityTransitionGroup */
    getAnimation: PropTypes.func,
    /** Size of the Toggle icon */
    iconSize: PropTypes.number,
    node: nodePropType,
    /**
     * Renders the content of this row (except child nodes)
     * Receives all the props of the component plus `isExpanded`, `hasChildren` and `indentLeft`
     */
    renderContent: PropTypes.func,
    /**
     * Renders the div (VelocityTransitionGroup) containing the child nodes
     * Receives the same props as `renderContent`
     * Use this to replace the recursive mapping, or the transitions
     */
    renderChildren: PropTypes.func,
    /** The current depth of this row, used to calculate indentLeft given to `renderContent` */
    depth: PropTypes.number,
    /**
     * Do not apply paddingLeft according to depth.
     * You may want to apply paddingLeft in renderContent depending on how you
     * need to implement margins and padding
     * */
    noIndent: PropTypes.bool,
};

Row.defaultProps = {
    classes: {
        root: '',
        content: '',
    },
    styles: {
        root: undefined,
        content: undefined,
    },
    expandedRowIds: {},
    getAnimation: animations.node,
    iconSize: 24,
    node: defaultNode,
    renderContent: undefined,
    renderChildren: undefined,
    depth: 0,
    noIndent: false,
};

export { Row };
