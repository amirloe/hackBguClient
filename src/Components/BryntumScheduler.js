/**
 *- React Scheduler wrapper
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// we import scheduler.umd for IE11 compatibility only. If you don't use IE import:
// import { Scheduler, ObjectHelper, Widget } from 'bryntum-scheduler';
import { Scheduler, ObjectHelper, Widget } from 'bryntum-scheduler/scheduler.umd';

// Defines a React component that wraps Bryntum Scheduler
class BryntumScheduler extends Component {

    /**
     * @deprecated in favor of schedulerInstance
     */
    get schedulerEngine() {
        console.warn('schedulerEngine is deprecated. Use schedulerInstance instead.')
        return this.schedulerInstance;
    }

    // defaults for scheduler. Feel free to adjust it
    static defaultProps = {
        viewPreset : 'hourAndDay',
        barMargin  : 2
    };

    featureRe = /Feature$/;

    /* #region Features */
    features = [
        'cellEditFeature',
        'cellTooltipFeature',
        'columnDragToolbarFeature',
        'columnLinesFeature',
        'columnPickerFeature',
        'columnReorderFeature',
        'columnResizeFeature',
        'contextMenuFeature',
        'dependenciesFeature',
        'dependencyEditFeature',
        'eventContextMenuFeature',
        'eventDragFeature',
        'eventDragCreateFeature',
        'eventDragSelectFeature',
        'eventEditFeature',
        'eventFilterFeature',
        'eventResizeFeature',
        'eventTooltipFeature',
        'filterBarFeature',
        'filterFeature',
        'groupFeature',
        'groupSummaryFeature',
        'headerContextMenuFeature',
        'headerZoomFeature',
        'labelsFeature',
        'nonWorkingTimeFeature',
        'panFeature',
        'pdfExportFeature',
        'quickFindFeature',
        'recurringEventsFeature',
        'recurringTimeSpansFeature',
        'regionResizeFeature',
        'resourceTimeRangesFeature',
        'rowReorderFeature',
        'scheduleContextMenuFeature',
        'scheduleTooltipFeature',
        'searchFeature',
        'simpleEventEditFeature',
        'sortFeature',
        'stripeFeature',
        'summaryFeature',
        'timeRangesFeature',
        'treeFeature'
    ];
    /* #endregion */

    /* #region Configs */
    configs = [
        'allowOverlap',
        'animateRemovingRows',
        'assignments',
        'assignmentStore',
        'autoAdjustTimeAxis',
        'autoHeight',
        'barMargin',
        'columnLines',
        'columns',
        'contextMenuTriggerEvent',
        'createEventOnDblClick',
        'crudManager',
        'defaultResourceImageName',
        'dependencyStore',
        'disableGridRowModelWarning',
        'displayDateFormat',
        'emptyText',
        'enableDeleteKey',
        'enableEventAnimations',
        'enableTextSelection',
        'endDate',
        'endParamName',
        'eventBarTextField',
        'eventBodyTemplate',
        'eventColor',
        'eventLayout',
        'eventRenderer',
        'events',
        'eventSelectionDisabled',
        'eventStyle',
        'eventStore',
        'fillLastColumn',
        'fullRowRefresh',
        'fillTicks',
        'hasVisibleEvents',
        'hideHeaders',
        'horizontalEventSorterFn',
        'loadMask',
        'longPressTime',
        'maintainSelectionOnDatasetChange',
        'managedEventSizing',
        'maxHeight',
        'maxWidth',
        'maxZoomLevel',
        'milestoneAlign',
        'milestoneCharWidth',
        'milestoneLayoutMode',
        'minZoomLevel',
        'mode',
        'height',
        'minHeight',
        'minWidth',
        'multiEventSelect',
        'partner',
        'passStartEndParameters',
        'readOnly',
        'removeUnassignedEvent',
        'resizeToFitIncludesHeader',
        'resourceColumns',
        'resourceImagePath',
        'resourceMargin',
        'resources',
        'resourceStore',
        'resourceTimeRanges',
        'responsiveLevels',
        'rowHeight',
        'scrollLeft',
        'scrollTop',
        'selectedEvents',
        'selectionMode',
        'showDirty',
        'showRemoveRowInContextMenu',
        'snap',
        'snapRelativeToEventStartDate',
        'startDate',
        'startParamName',
        'subGridConfigs',
        'tickWidth',
        'timeRanges',
        'timeResolution',
        'triggerSelectionChangeOnRemove',
        'useInitialAnimation',
        'viewportCenterDate',
        'viewPreset',
        'weekStartDay',
        'width',
        'workingTime',
        'zoomOnMouseWheel',
        'zoomOnTimeAxisDoubleClick',
        'zoomLevel'
    ];
    /* #endregion */

    state = {
        portals    : new Set(),
        generation : 0
    };

    releaseReactCell(cellElement) {
        const
            { state } = this,
            cellElementData = cellElement._domData;

        // Cell already has a react component in it, remove
        if (cellElementData.reactPortal) {
            state.portals.delete(cellElementData.reactPortal);

            this.setState({
                portals    : state.portals,
                generation : state.generation + 1
            });

            cellElementData.reactPortal = null;
        }
    }

    // React component rendered to DOM, render scheduler to it
    componentDidMount() {
        const
            { props } = this,
            config = {
                // Use this element as our encapsulating element
                adopt           : this.el,
                callOnFunctions : true,
                features        : {},

                // Hook called by engine when requesting a cell editor
                processCellEditor : ({ editor, field }) => {
                    // String etc handled by feature, only care about fns returning React components here
                    if (typeof editor !== 'function') {
                        return;
                    }

                    // Wrap React editor in an empty widget, to match expectations from CellEdit/Editor and make alignment
                    // etc. work out of the box
                    const wrapperWidget = new Widget({
                        name : field // For editor to be hooked up to field correctly
                    });

                    // Ref for accessing the React editor later
                    wrapperWidget.reactRef = React.createRef();

                    // column.editor is expected to be a function returning a React component (can be JSX). Function is
                    // called with the ref from above, it has to be used as the ref for the editor to wire things up
                    const reactComponent = editor(wrapperWidget.reactRef);
                    if (reactComponent.$$typeof !== Symbol.for('react.element')) {
                        throw new Error('Expect a React element');
                    }

                    let editorValidityChecked = false;

                    // Add getter/setter for value on the wrapper, relaying to getValue()/setValue() on the React editor
                    Object.defineProperty(wrapperWidget, 'value', {
                        enumerable : true,
                        get        : function() {
                            return wrapperWidget.reactRef.current.getValue();
                        },
                        set        : function(value) {
                            const component = wrapperWidget.reactRef.current;

                            if (!editorValidityChecked) {
                                const misses = ['setValue', 'getValue', 'isValid', 'focus'].filter(fn => !(fn in component));

                                if (misses.length) {
                                    throw new Error(`
                                        Missing function${misses.length > 1 ? 's' : ''} ${misses.join(', ')} in ${component.constructor.name}.
                                        Cell editors must implement setValue, getValue, isValid and focus
                                    `);
                                }

                                editorValidityChecked = true;
                            }

                            const context = wrapperWidget.owner.cellEditorContext;
                            component.setValue(value, context);
                        }
                    });

                    // Add getter for isValid to the wrapper, mapping to isValid() on the React editor
                    Object.defineProperty(wrapperWidget, 'isValid', {
                        enumerable : true,
                        get        : function() {
                            return wrapperWidget.reactRef.current.isValid();
                        }
                    });

                    // Override widgets focus handling, relaying it to focus() on the React editor
                    wrapperWidget.focus = () => {
                        wrapperWidget.reactRef.current.focus && wrapperWidget.reactRef.current.focus();
                    };

                    // Create a portal, making the React editor belong to the React tree although displayed in a Widget
                    const portal = ReactDOM.createPortal(reactComponent, wrapperWidget.element);
                    wrapperWidget.reactPortal = portal;

                    const { state } = this;
                    // Store portal in state to let React keep track of it (inserted into the Grid component)
                    state.portals.add(portal);
                    this.setState({
                        portals    : state.portals,
                        generation : state.generation + 1
                    });

                    return { editor : wrapperWidget };
                },

                // Hook called by engine when rendering cells, creates portals for JSX supplied by renderers
                processCellContent : ({ cellContent, cellElement, cellElementData, record }) => {
                    let shouldSetContent = cellContent != null;

                    // Release any existing React component
                    this.releaseReactCell(cellElement);

                    // Detect React component
                    if (cellContent && cellContent.$$typeof === Symbol.for('react.element')) {
                        // Excluding special rows for now to keep renderers simpler
                        if (!record.meta.specialRow) {
                            // Clear any non-react content
                            const firstChild = cellElement.firstChild;
                            if (!cellElementData.reactPortal && firstChild) {
                                firstChild.data = '';
                            }

                            // Create a portal, belonging to the existing React tree but render in a cell
                            const portal = ReactDOM.createPortal(cellContent, cellElement);
                            cellElementData.reactPortal = portal;

                            const { state } = this;
                            // Store in state for React to not loose track of the portals
                            state.portals.add(portal);
                            this.setState({
                                portals    : state.portals,
                                generation : state.generation + 1
                            });
                        }
                        shouldSetContent = false;
                    }

                    return shouldSetContent;
                }
            };

        // relay properties with names matching this.featureRe to features
        this.features.forEach(featureName => {
            if (featureName in props) {
                config.features[featureName.replace(this.featureRe, '')] = props[featureName];
            }
        });

        // Handle config (relaying all props except those used for features to scheduler)
        Object.keys(props).forEach(propName => {
            if (!propName.match(this.featureRe) && undefined !== props[propName]) {
                if (propName === 'features') {
                    console.warn('Passing "features" object as prop is not supported. Set features one-by-one with "Feature" suffix, for example "timeRangesFeature".');
                }
                else {
                    config[propName] = props[propName];
                }
            }
        });

        // console.log(config);

        // Create the actual scheduler, used as engine for the wrapper
        const engine = this.schedulerInstance = props.schedulerClass ? new props.schedulerClass(config) : new Scheduler(config);

        // Release any contained React components when a row is removed
        engine.rowManager.on({
            removeRow : ({ row }) => row.cells.forEach(cell => this.releaseReactCell(cell))
        });

        // Make stores easier to access
        this.resourceStore = engine.resourceStore;
        this.eventStore = engine.eventStore;

        // Map all features from schedulerInstance to scheduler to simplify calls
        Object.keys(engine.features).forEach(key => {
            const featureName = key + 'Feature';
            if (!this[featureName]) {
                this[featureName] = engine.features[key];
            }
        });

        // Shortcut to set syncDataOnLoad on the stores
        if (props.syncDataOnLoad) {
            engine.resourceStore.syncDataOnLoad = true;
            engine.eventStore.syncDataOnLoad = true;
        }

        if (config.events) {
            this.lastEvents = config.events.slice();
        }

        if (config.resources) {
            this.lastResources = config.resources.slice();
        }
    }

    // React component removed, destroy engine
    componentWillUnmount() {
        this.schedulerInstance.destroy();
    }

    // Component about to be updated, from changing a prop using state. React to it depending on what changed and
    // prevent react from re-rendering our component.
    shouldComponentUpdate(nextProps, nextState) {
        const
            { props, schedulerInstance : engine } = this,
            // These props are ignored or has special handling below
            excludeProps = [
                'adapter',
                'children',
                'columns',
                'events',
                'eventsVersion',
                'features', // #445 React: Scheduler crashes when features object passed as prop
                'listeners', // #9114 prevents the crash when listeners are changed at runtime
                'ref',
                'resources',
                'resourcesVersion',
                'timeRanges',
                ...this.features
            ];

        // Reflect configuration changes. Since most scheduler configs are reactive the scheduler will update automatically
        Object.keys(props).forEach(propName => {
            // Only apply if prop has changed
            if (!excludeProps.includes(propName) && !ObjectHelper.isEqual(props[propName], nextProps[propName])) {
                engine[propName] = nextProps[propName];
            }
        });

        if (
            // resourceVersion used to flag that data has changed
            nextProps.resourcesVersion !== props.resourcesVersion ||
            // if not use do deep equality check against previous dataset
            // TODO: Might be costly for large datasets
            (!('resourcesVersion' in nextProps) && !('resourcesVersion' in props) && !ObjectHelper.isDeeplyEqual(this.lastResources, nextProps.resources))) {
            engine.resources = nextProps.resources;
            this.lastResources = nextProps.resources && nextProps.resources.slice();
        }

        if (
            // eventVersion used to flag that data has changed
            nextProps.eventsVersion !== props.eventsVersion ||
            // if not use do deep equality check against previous dataset
            // TODO: Might be costly for large datasets
            (!('eventsVersion' in nextProps) && !('eventsVersion' in props) && !ObjectHelper.isDeeplyEqual(this.lastEvents, nextProps.events))) {
            engine.events = nextProps.events;
            this.lastEvents = nextProps.events && nextProps.events.slice();
        }

        // Reflect feature config changes
        this.features.forEach(featureName => {
            const currentProp = props[featureName],
                nextProp = nextProps[featureName];

            if (featureName in props && !ObjectHelper.isDeeplyEqual(currentProp, nextProp)) {
                engine.features[featureName.replace(this.featureRe, '')].setConfig(nextProp);
            }
        });

        // Reflect JSX cell changes
        return (nextState.generation !== this.state.generation);
    }

    render() {
        return <div className={'b-react-scheduler-container'} ref={el => this.el = el}>{this.state.portals}</div>;
    } // eo function render

} // eo class BryntumScheduler

export default BryntumScheduler;

// eof
