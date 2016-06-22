/**
 * @fileOverview Requirejs module containing the antie.events.ComponentEvent class.
 *
 * @preserve Copyright (c) 2013 British Broadcasting Corporation
 * (http://www.bbc.co.uk) and TAL Contributors (1)
 *
 * (1) TAL Contributors are listed in the AUTHORS file and at
 *     https://github.com/fmtvp/TAL/AUTHORS - please extend this file,
 *     not this notice.
 *
 * @license Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * All rights reserved
 * Please contact us for an alternative licence
 */


define(
    'antie/events/componentevent',
    ['antie/events/event'],
    function(Event) {
        'use strict';

        /**
         * Class of events raised when a {@link antie.widgets.Component} is being loaded/shown/hidden.
         * @name antie.events.ComponentEvent
         * @class
         * @extends antie.events.Event
         * @param {String} type The type of event.
         * @param {antie.widgets.ComponentContainer} container The container of the component that fired the event.
         * @param {antie.widgets.Component} component The component that fired the event.
         * @param {Object} args Any arguments that were passed into the component when loaded.
         * @param {Object} state Any state information that was stored on the component history stack for this component.
         * @param {Boolean} fromBack True if the event was raised as a result of the user navigating 'back' in the component history.
         */
        return Event.extend(/** @lends antie.events.ComponentEvent.prototype */ {
            /**
             * @constructor
             * @ignore
             */
            init: function(type, container, component, args, state, fromBack) {
                this.container = container;
                this.component = component;
                this.args = args;
                this.state = state;
                this.fromBack = fromBack;
                this._super(type);
            }
        });
    }
);