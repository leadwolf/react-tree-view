import './row.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';

import { animations } from '../animations';
import { defaultNode, nodePropType } from '../proptypes';

const Row = ({ node, depth, ...rest }) => {
    const {
        classes: { root: classNameRoot = '', content: classNameContent = '' },
        styles: { root: styleRoot = undefined, content: styleContent = undefined },
        renderContent,
        expandedRowIds,
        getAnimation,
        onClick,
        noIndent,
    } = rest;

    const isExpanded = Boolean(expandedRowIds[node.id]);
    const hasChildren = Boolean(node.children) && Boolean(node.children.length);
    const showChildren = hasChildren && isExpanded;
    const indentLeft = depth * 24;

    return (
        <div className={`rtv-row-container ${classNameRoot}`} style={styleRoot}>
            {Boolean(renderContent) && (
                <div
                    className={`rtv-row-content ${classNameContent}`}
                    style={styleContent}
                    onClick={() => onClick(node)}
                >
                    {!noIndent && (
                        <div
                            style={{
                                paddingLeft: `${indentLeft}px`,
                            }}
                        />
                    )}
                    {renderContent({ node, depth, ...rest, isExpanded, hasChildren, indentLeft })}
                </div>
            )}
            <VelocityTransitionGroup {...getAnimation(isExpanded, node)}>
                {showChildren && (
                    <div className="rtv-node-children">
                        {node.children.map(child => (
                            <Row key={child.id} node={child} {...rest} depth={depth + 1} />
                        ))}
                    </div>
                )}
            </VelocityTransitionGroup>
        </div>
    );
};

Row.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
        content: PropTypes.string,
    }),
    styles: PropTypes.shape({
        root: PropTypes.object,
        content: PropTypes.object,
    }),
    /** object map where the kays are the ids of the expanded rows. The values just need to be truthy/falsy */
    expandedRowIds: PropTypes.object,
    /** @returns {Object} props that will be given to VelocityTransitionGroup */
    getAnimation: PropTypes.func,
    iconSize: PropTypes.number,
    node: nodePropType,
    renderContent: PropTypes.func,
    depth: PropTypes.number,
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
    depth: 0,
    noIndent: false,
};

export { Row };
