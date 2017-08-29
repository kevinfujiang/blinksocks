'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.behaviours=exports.behaviourEvents=exports.getBehaviourClassByName=exports.BEHAVIOUR_EVENT_ON_PRESET_FAILED=undefined;var _directClose=require('./direct-close');var _directClose2=_interopRequireDefault(_directClose);var _randomTimeout=require('./random-timeout');var _randomTimeout2=_interopRequireDefault(_randomTimeout);var _redirect=require('./redirect');var _redirect2=_interopRequireDefault(_redirect);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const BEHAVIOUR_EVENT_ON_PRESET_FAILED=exports.BEHAVIOUR_EVENT_ON_PRESET_FAILED='on-preset-failed';const mapping={'direct-close':_directClose2.default,'random-timeout':_randomTimeout2.default,'redirect':_redirect2.default};const behaviours=Object.keys(mapping);const behaviourEvents=[BEHAVIOUR_EVENT_ON_PRESET_FAILED];function getBehaviourClassByName(name){const clazz=mapping[name];if(clazz===undefined){throw Error(`cannot find behaviour: "${name}"`)}return clazz}exports.getBehaviourClassByName=getBehaviourClassByName;exports.behaviourEvents=behaviourEvents;exports.behaviours=behaviours;