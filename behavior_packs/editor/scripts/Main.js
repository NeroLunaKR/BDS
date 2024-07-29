/*! For license information please see Main.js.LICENSE.txt */
import * as __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__ from "@minecraft/server-editor";

import * as __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__ from "@minecraft/server";

import * as __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_bindings_e2bf1028__ from "@minecraft/server-editor-bindings";

var __webpack_modules__ = {
    869: (__unused_webpack_module, exports) => {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.clampNumber = void 0;
        function clampNumber(val, min, max) {
            return Math.min(Math.max(val, min), max);
        }
        exports.clampNumber = clampNumber;
    },
    605: function(__unused_webpack_module, exports, __webpack_require__) {
        var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            var desc = Object.getOwnPropertyDescriptor(m, k);
            if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                desc = {
                    enumerable: true,
                    get: function() {
                        return m[k];
                    }
                };
            }
            Object.defineProperty(o, k2, desc);
        } : function(o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            o[k2] = m[k];
        });
        var __exportStar = this && this.__exportStar || function(m, exports) {
            for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        __exportStar(__webpack_require__(869), exports);
    },
    79: function(__unused_webpack_module, exports, __webpack_require__) {
        var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            var desc = Object.getOwnPropertyDescriptor(m, k);
            if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                desc = {
                    enumerable: true,
                    get: function() {
                        return m[k];
                    }
                };
            }
            Object.defineProperty(o, k2, desc);
        } : function(o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            o[k2] = m[k];
        });
        var __exportStar = this && this.__exportStar || function(m, exports) {
            for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        __exportStar(__webpack_require__(200), exports);
        __exportStar(__webpack_require__(605), exports);
    },
    604: (__unused_webpack_module, exports, __webpack_require__) => {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.VECTOR3_SOUTH = exports.VECTOR3_NORTH = exports.VECTOR3_EAST = exports.VECTOR3_WEST = exports.VECTOR3_ZERO = exports.VECTOR3_ONE = exports.VECTOR3_BACK = exports.VECTOR3_FORWARD = exports.VECTOR3_RIGHT = exports.VECTOR3_LEFT = exports.VECTOR3_DOWN = exports.VECTOR3_UP = exports.Vector2Utils = exports.Vector3Utils = void 0;
        const clamp_1 = __webpack_require__(869);
        class Vector3Utils {
            static equals(v1, v2) {
                return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;
            }
            static add(v1, v2) {
                return {
                    x: v1.x + v2.x,
                    y: v1.y + v2.y,
                    z: v1.z + v2.z
                };
            }
            static subtract(v1, v2) {
                return {
                    x: v1.x - v2.x,
                    y: v1.y - v2.y,
                    z: v1.z - v2.z
                };
            }
            static scale(v1, scale) {
                return {
                    x: v1.x * scale,
                    y: v1.y * scale,
                    z: v1.z * scale
                };
            }
            static dot(a, b) {
                return a.x * b.x + a.y * b.y + a.z * b.z;
            }
            static cross(a, b) {
                return {
                    x: a.y * b.z - a.z * b.y,
                    y: a.z * b.x - a.x * b.z,
                    z: a.x * b.y - a.y * b.x
                };
            }
            static magnitude(v) {
                return Math.sqrt(v.x ** 2 + v.y ** 2 + v.z ** 2);
            }
            static normalize(v) {
                const mag = Vector3Utils.magnitude(v);
                return {
                    x: v.x / mag,
                    y: v.y / mag,
                    z: v.z / mag
                };
            }
            static floor(v) {
                return {
                    x: Math.floor(v.x),
                    y: Math.floor(v.y),
                    z: Math.floor(v.z)
                };
            }
            static toString(v, options) {
                const decimals = options?.decimals ?? 2;
                const str = [ v.x.toFixed(decimals), v.y.toFixed(decimals), v.z.toFixed(decimals) ];
                return str.join(options?.delimiter ?? ", ");
            }
            static clamp(v, limits) {
                return {
                    x: (0, clamp_1.clampNumber)(v.x, limits?.min?.x ?? Number.MIN_SAFE_INTEGER, limits?.max?.x ?? Number.MAX_SAFE_INTEGER),
                    y: (0, clamp_1.clampNumber)(v.y, limits?.min?.y ?? Number.MIN_SAFE_INTEGER, limits?.max?.y ?? Number.MAX_SAFE_INTEGER),
                    z: (0, clamp_1.clampNumber)(v.z, limits?.min?.z ?? Number.MIN_SAFE_INTEGER, limits?.max?.z ?? Number.MAX_SAFE_INTEGER)
                };
            }
        }
        exports.Vector3Utils = Vector3Utils;
        class Vector2Utils {
            static toString(v, options) {
                const decimals = options?.decimals ?? 2;
                const str = [ v.x.toFixed(decimals), v.y.toFixed(decimals) ];
                return str.join(options?.delimiter ?? ", ");
            }
        }
        exports.Vector2Utils = Vector2Utils;
        exports.VECTOR3_UP = {
            x: 0,
            y: 1,
            z: 0
        };
        exports.VECTOR3_DOWN = {
            x: 0,
            y: -1,
            z: 0
        };
        exports.VECTOR3_LEFT = {
            x: -1,
            y: 0,
            z: 0
        };
        exports.VECTOR3_RIGHT = {
            x: 1,
            y: 0,
            z: 0
        };
        exports.VECTOR3_FORWARD = {
            x: 0,
            y: 0,
            z: 1
        };
        exports.VECTOR3_BACK = {
            x: 0,
            y: 0,
            z: -1
        };
        exports.VECTOR3_ONE = {
            x: 1,
            y: 1,
            z: 1
        };
        exports.VECTOR3_ZERO = {
            x: 0,
            y: 0,
            z: 0
        };
        exports.VECTOR3_WEST = {
            x: -1,
            y: 0,
            z: 0
        };
        exports.VECTOR3_EAST = {
            x: 1,
            y: 0,
            z: 0
        };
        exports.VECTOR3_NORTH = {
            x: 0,
            y: 0,
            z: 1
        };
        exports.VECTOR3_SOUTH = {
            x: 0,
            y: 0,
            z: -1
        };
    },
    200: function(__unused_webpack_module, exports, __webpack_require__) {
        var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            var desc = Object.getOwnPropertyDescriptor(m, k);
            if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                desc = {
                    enumerable: true,
                    get: function() {
                        return m[k];
                    }
                };
            }
            Object.defineProperty(o, k2, desc);
        } : function(o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            o[k2] = m[k];
        });
        var __exportStar = this && this.__exportStar || function(m, exports) {
            for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        __exportStar(__webpack_require__(604), exports);
        __exportStar(__webpack_require__(963), exports);
    },
    963: (__unused_webpack_module, exports, __webpack_require__) => {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.Vector2Builder = exports.Vector3Builder = void 0;
        const coreHelpers_1 = __webpack_require__(604);
        class Vector3Builder {
            constructor(first, y, z) {
                if (typeof first === "object") {
                    this.x = first.x;
                    this.y = first.y;
                    this.z = first.z;
                } else {
                    this.x = first;
                    this.y = y ?? 0;
                    this.z = z ?? 0;
                }
            }
            assign(vec) {
                this.x = vec.x;
                this.y = vec.y;
                this.z = vec.z;
                return this;
            }
            equals(v) {
                return coreHelpers_1.Vector3Utils.equals(this, v);
            }
            add(v) {
                return this.assign(coreHelpers_1.Vector3Utils.add(this, v));
            }
            subtract(v) {
                return this.assign(coreHelpers_1.Vector3Utils.subtract(this, v));
            }
            scale(val) {
                return this.assign(coreHelpers_1.Vector3Utils.scale(this, val));
            }
            dot(vec) {
                return coreHelpers_1.Vector3Utils.dot(this, vec);
            }
            cross(vec) {
                return this.assign(coreHelpers_1.Vector3Utils.cross(this, vec));
            }
            magnitude() {
                return coreHelpers_1.Vector3Utils.magnitude(this);
            }
            normalize() {
                return this.assign(coreHelpers_1.Vector3Utils.normalize(this));
            }
            floor() {
                return this.assign(coreHelpers_1.Vector3Utils.floor(this));
            }
            toString(options) {
                return coreHelpers_1.Vector3Utils.toString(this, options);
            }
            clamp(limits) {
                return this.assign(coreHelpers_1.Vector3Utils.clamp(this, limits));
            }
        }
        exports.Vector3Builder = Vector3Builder;
        class Vector2Builder {
            constructor(first, y) {
                if (typeof first === "object") {
                    this.x = first.x;
                    this.y = first.y;
                } else {
                    this.x = first;
                    this.y = y ?? 0;
                }
            }
            toString(options) {
                return coreHelpers_1.Vector2Utils.toString(this, options);
            }
        }
        exports.Vector2Builder = Vector2Builder;
    }
};

var __webpack_module_cache__ = {};

function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
        return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
        exports: {}
    };
    __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    return module.exports;
}

(() => {
    __webpack_require__.d = (exports, definition) => {
        for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: definition[key]
                });
            }
        }
    };
})();

(() => {
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
})();

var __webpack_exports__ = {};

(() => {
    var x = y => {
        var x = {};
        __webpack_require__.d(x, y);
        return x;
    };
    var y = x => () => x;
    const server_editor_namespaceObject = x({
        ["ActionTypes"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.ActionTypes,
        ["BlockPaletteItemType"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.BlockPaletteItemType,
        ["ButtonPropertyItemVariant"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.ButtonPropertyItemVariant,
        ["ColorPickerVariant"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.ColorPickerVariant,
        ["CoreActionBarItemType"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.CoreActionBarItemType,
        ["CoreMenuType"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.CoreMenuType,
        ["CursorControlMode"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.CursorControlMode,
        ["CursorTargetMode"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.CursorTargetMode,
        ["DaylightCycle"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.DaylightCycle,
        ["EditorInputContext"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.EditorInputContext,
        ["EditorMode"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.EditorMode,
        ["EditorStatusBarAlignment"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.EditorStatusBarAlignment,
        ["EntityOperationType"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.EntityOperationType,
        ["InputModifier"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.InputModifier,
        ["KeyboardKey"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.KeyboardKey,
        ["MouseActionType"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.MouseActionType,
        ["MouseInputType"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.MouseInputType,
        ["PlaytestSessionResult"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.PlaytestSessionResult,
        ["ProbabilityBlockPaletteItem"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.ProbabilityBlockPaletteItem,
        ["SettingsUIElement"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.SettingsUIElement,
        ["SimpleBlockPaletteItem"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.SimpleBlockPaletteItem,
        ["WidgetGroupSelectionMode"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.WidgetGroupSelectionMode,
        ["bindDataSource"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.bindDataSource,
        ["editor"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.editor,
        ["executeLargeOperation"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.executeLargeOperation,
        ["executeLargeOperationFromIterator"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.executeLargeOperationFromIterator,
        ["makeObservable"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.makeObservable,
        ["registerEditorExtension"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.registerEditorExtension,
        ["registerUserDefinedTransactionHandler"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.registerUserDefinedTransactionHandler,
        ["stringFromException"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__.stringFromException
    });
    var server_x = y => {
        var x = {};
        __webpack_require__.d(x, y);
        return x;
    };
    var server_y = x => () => x;
    const server_namespaceObject = server_x({
        ["BlockTypes"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__.BlockTypes,
        ["BlockVolume"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__.BlockVolume,
        ["BoundingBoxUtils"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__.BoundingBoxUtils,
        ["CompoundBlockVolume"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__.CompoundBlockVolume,
        ["CompoundBlockVolumeAction"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__.CompoundBlockVolumeAction,
        ["CompoundBlockVolumePositionRelativity"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__.CompoundBlockVolumePositionRelativity,
        ["Difficulty"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__.Difficulty,
        ["EasingType"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__.EasingType,
        ["GameMode"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__.GameMode,
        ["StructureMirrorAxis"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__.StructureMirrorAxis,
        ["StructureRotation"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__.StructureRotation,
        ["TicksPerSecond"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__.TicksPerSecond,
        ["TimeOfDay"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__.TimeOfDay,
        ["WeatherType"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__.WeatherType,
        ["system"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__.system,
        ["world"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__.world
    });
    var lib = __webpack_require__(79);
    var Direction;
    (function(Direction) {
        Direction[Direction["Forward"] = 0] = "Forward";
        Direction[Direction["Right"] = 1] = "Right";
        Direction[Direction["Back"] = 2] = "Back";
        Direction[Direction["Left"] = 3] = "Left";
        Direction[Direction["Up"] = 4] = "Up";
        Direction[Direction["Down"] = 5] = "Down";
    })(Direction || (Direction = {}));
    const directionLookup = {
        [Direction.Forward]: lib.VECTOR3_FORWARD,
        [Direction.Right]: lib.VECTOR3_LEFT,
        [Direction.Back]: lib.VECTOR3_BACK,
        [Direction.Left]: lib.VECTOR3_RIGHT,
        [Direction.Up]: lib.VECTOR3_UP,
        [Direction.Down]: lib.VECTOR3_DOWN
    };
    function getRotationCorrectedDirection(rotationY, realDirection) {
        if (realDirection === Direction.Up || realDirection === Direction.Down) {
            return realDirection;
        }
        const directionQuadrant = Math.floor((rotationY + 405 + realDirection * 90) % 360 / 90);
        return directionQuadrant;
    }
    function getRotationCorrectedDirectionVector(rotationY, realDirection) {
        const relativeDirection = getRotationCorrectedDirection(rotationY, realDirection);
        return directionLookup[relativeDirection];
    }
    function getDirectionVector(direction) {
        return directionLookup[direction];
    }
    function getScaledDirectionVector(direction, scaleValue) {
        const vec = Vector3Utils.scale(getDirectionVector(direction), scaleValue);
        return vec;
    }
    function shrinkVolumeAlongAbsoluteAxis(volume, direction, amount) {
        const bounds = volume.getBoundingBox();
        const boundSize = server_namespaceObject.BoundingBoxUtils.getSpan(bounds);
        const min = bounds.min;
        const max = bounds.max;
        const spanX = boundSize.x;
        const spanY = boundSize.y;
        const spanZ = boundSize.z;
        switch (direction) {
          case Direction.Up:
            if (spanY > amount) {
                max.y -= amount;
            }
            break;

          case Direction.Down:
            if (spanY > amount) {
                min.y += amount;
            }
            break;

          case Direction.Forward:
            if (spanZ > amount) {
                max.z -= amount;
            }
            break;

          case Direction.Back:
            if (spanZ > amount) {
                min.z += amount;
            }
            break;

          case Direction.Left:
            if (spanX > amount) {
                max.x -= amount;
            }
            break;

          case Direction.Right:
            if (spanX > amount) {
                min.x += amount;
            }
            break;
        }
        return new server_namespaceObject.BlockVolume(min, max);
    }
    function shrinkVolumeAlongViewAxis(volume, rotationY, direction, amount) {
        const relativeDirection = getRotationCorrectedDirection(rotationY, direction);
        return shrinkVolumeAlongAbsoluteAxis(volume, relativeDirection, amount);
    }
    function growVolumeAlongAbsoluteAxis(volume, direction, amount) {
        const maxAxialLength = 100;
        if (amount > maxAxialLength) {
            amount = maxAxialLength;
        }
        const bounds = volume.getBoundingBox();
        const boundSize = server_namespaceObject.BoundingBoxUtils.getSpan(bounds);
        const min = bounds.min;
        const max = bounds.max;
        const spanX = boundSize.x;
        const spanY = boundSize.y;
        const spanZ = boundSize.z;
        switch (direction) {
          case Direction.Up:
            if (spanY + amount > maxAxialLength) {
                amount = maxAxialLength - spanY;
            }
            max.y += amount;
            break;

          case Direction.Down:
            if (spanY + amount > maxAxialLength) {
                amount = maxAxialLength - spanY;
            }
            min.y -= amount;
            break;

          case Direction.Forward:
            if (spanZ + amount > maxAxialLength) {
                amount = maxAxialLength - spanZ;
            }
            max.z += amount;
            break;

          case Direction.Back:
            if (spanZ + amount > maxAxialLength) {
                amount = maxAxialLength - spanZ;
            }
            min.z -= amount;
            break;

          case Direction.Left:
            if (spanX + amount > maxAxialLength) {
                amount = maxAxialLength - spanX;
            }
            max.x += amount;
            break;

          case Direction.Right:
            if (spanX + amount > maxAxialLength) {
                amount = maxAxialLength - spanX;
            }
            min.x -= amount;
            break;
        }
        return new server_namespaceObject.BlockVolume(min, max);
    }
    function growVolumeAlongViewAxis(volume, rotationY, direction, amount) {
        const relativeDirection = getRotationCorrectedDirection(rotationY, direction);
        return growVolumeAlongAbsoluteAxis(volume, relativeDirection, amount);
    }
    var AxisPlanes;
    (function(AxisPlanes) {
        AxisPlanes[AxisPlanes["XZ"] = 0] = "XZ";
        AxisPlanes[AxisPlanes["XY"] = 1] = "XY";
        AxisPlanes[AxisPlanes["YZ"] = 2] = "YZ";
    })(AxisPlanes || (AxisPlanes = {}));
    const axisNormalLookup = {
        [AxisPlanes.XZ]: lib.VECTOR3_UP,
        [AxisPlanes.XY]: lib.VECTOR3_FORWARD,
        [AxisPlanes.YZ]: lib.VECTOR3_LEFT
    };
    function getAxisNormal(axis) {
        return axisNormalLookup[axis];
    }
    function getRelativeXYAxisAsNormal(rotation) {
        const direction = getRotationCorrectedDirection(rotation, Direction.Forward);
        switch (direction) {
          case Direction.Forward:
          case Direction.Back:
            return axisNormalLookup[AxisPlanes.XY];

          case Direction.Right:
          case Direction.Left:
            return axisNormalLookup[AxisPlanes.YZ];

          default:
            throw "Invalid quadrant";
        }
    }
    function intersectRayPlane(rayLocation, rayDirection, planeNormal, planeDistance) {
        const denominator = lib.Vector3Utils.dot(rayDirection, planeNormal);
        if (denominator !== 0) {
            const t = -(lib.Vector3Utils.dot(rayLocation, planeNormal) + planeDistance) / denominator;
            if (t < 0) {
                return undefined;
            }
            const scaledDirection = lib.Vector3Utils.scale(rayDirection, t);
            const result = lib.Vector3Utils.add(rayLocation, scaledDirection);
            return result;
        } else if (lib.Vector3Utils.dot(planeNormal, rayLocation) + planeDistance === 0) {
            return rayLocation;
        }
        return undefined;
    }
    var BlockLineType;
    (function(BlockLineType) {
        BlockLineType[BlockLineType["Direct"] = 0] = "Direct";
        BlockLineType[BlockLineType["Staggered"] = 1] = "Staggered";
        BlockLineType[BlockLineType["Contour"] = 2] = "Contour";
    })(BlockLineType || (BlockLineType = {}));
    class BlockLineLocationIterator {
        constructor(data) {
            this.data = data;
            this.index = 0;
        }
        [Symbol.iterator]() {
            return {
                next: () => this.next()
            };
        }
        next() {
            if (this.index < this.data.length) {
                return {
                    value: this.data[this.index++],
                    done: false
                };
            } else {
                return {
                    value: undefined,
                    done: true
                };
            }
        }
    }
    class BlockLine {
        constructor(start, end, options) {
            this.data = [];
            this.start = start;
            this.end = end;
            if (options) {
                this.options = options;
            } else {
                this.options = {
                    width: 1,
                    height: 1,
                    mode: BlockLineType.Direct
                };
            }
            this.generateLine();
        }
        plotBresenhamLine3D(start, end) {
            const line = [];
            line.push({
                x: start.x,
                y: start.y,
                z: start.z
            });
            const dx = Math.abs(end.x - start.x);
            const dy = Math.abs(end.y - start.y);
            const dz = Math.abs(end.z - start.z);
            const xs = end.x > start.x ? 1 : -1;
            const ys = end.y > start.y ? 1 : -1;
            const zs = end.z > start.z ? 1 : -1;
            if (dx >= dy && dx >= dz) {
                let p0 = 2 * dy - dx;
                let p1 = 2 * dz - dx;
                let x0 = start.x;
                let y0 = start.y;
                let z0 = start.z;
                while (x0 !== end.x) {
                    x0 += xs;
                    if (p0 >= 0) {
                        y0 += ys;
                        p0 -= 2 * dx;
                    }
                    if (p1 >= 0) {
                        z0 += zs;
                        p1 -= 2 * dx;
                    }
                    p0 += 2 * dy;
                    p1 += 2 * dz;
                    line.push({
                        x: x0,
                        y: y0,
                        z: z0
                    });
                }
            } else if (dy >= dx && dy >= dz) {
                let p0 = 2 * dx - dy;
                let p1 = 2 * dz - dy;
                let y0 = start.y;
                let x0 = start.x;
                let z0 = start.z;
                while (y0 !== end.y) {
                    y0 += ys;
                    if (p0 >= 0) {
                        x0 += xs;
                        p0 -= 2 * dy;
                    }
                    if (p1 >= 0) {
                        z0 += zs;
                        p1 -= 2 * dy;
                    }
                    p0 += 2 * dx;
                    p1 += 2 * dz;
                    line.push({
                        x: x0,
                        y: y0,
                        z: z0
                    });
                }
            } else {
                let p0 = 2 * dy - dz;
                let p1 = 2 * dx - dz;
                let z0 = start.z;
                let x0 = start.x;
                let y0 = start.y;
                while (z0 !== end.z) {
                    z0 += zs;
                    if (p0 >= 0) {
                        y0 += ys;
                        p0 -= 2 * dz;
                    }
                    if (p1 >= 0) {
                        x0 += xs;
                        p1 -= 2 * dz;
                    }
                    p0 += 2 * dy;
                    p1 += 2 * dx;
                    line.push({
                        x: x0,
                        y: y0,
                        z: z0
                    });
                }
            }
            return line;
        }
        plotManhattanLine3D(start, end) {
            const line = [];
            let x = start.x;
            let y = start.y;
            let z = start.z;
            line.push({
                x,
                y,
                z
            });
            while (x !== end.x || y !== end.y || z !== end.z) {
                if (x < end.x) {
                    x++;
                    line.push({
                        x,
                        y,
                        z
                    });
                } else if (x > end.x) {
                    x--;
                    line.push({
                        x,
                        y,
                        z
                    });
                }
                if (y < end.y) {
                    y++;
                    line.push({
                        x,
                        y,
                        z
                    });
                } else if (y > end.y) {
                    y--;
                    line.push({
                        x,
                        y,
                        z
                    });
                }
                if (z < end.z) {
                    z++;
                    line.push({
                        x,
                        y,
                        z
                    });
                } else if (z > end.z) {
                    z--;
                    line.push({
                        x,
                        y,
                        z
                    });
                }
            }
            return line;
        }
        generateLine() {
            switch (this.options.mode) {
              case BlockLineType.Direct:
                this.data = this.plotBresenhamLine3D(this.start, this.end);
                break;

              case BlockLineType.Staggered:
                this.data = this.plotManhattanLine3D(this.start, this.end);
                break;

              default:
                this.data = [];
                break;
            }
        }
        setStart(start) {
            this.start = start;
            this.generateLine();
        }
        setEnd(end) {
            this.end = end;
            this.generateLine();
        }
        moveLine(vec) {
            this.start = {
                x: this.start.x + vec.x,
                y: this.start.y + vec.y,
                z: this.start.z + vec.z
            };
            this.end = {
                x: this.end.x,
                y: this.end.y + vec.y,
                z: this.end.z + vec.z
            };
            this.generateLine();
        }
        getBlockLineLocationIterator() {
            return new BlockLineLocationIterator(this.data);
        }
    }
    function calculateClipboardNormalizedAnchorValue(item, absolute) {
        const itemSize = item.getSize();
        if (itemSize.x < 1 || itemSize.y < 1 || itemSize.z < 1) {
            return lib.VECTOR3_ZERO;
        }
        const clamped = lib.Vector3Utils.clamp(absolute, {
            min: lib.VECTOR3_ZERO,
            max: lib.Vector3Utils.subtract(itemSize, lib.VECTOR3_ONE)
        });
        const x = itemSize.x <= 1 ? 0 : clamped.x * 2 / (itemSize.x - 1) - 1;
        const y = itemSize.y <= 1 ? 0 : clamped.y * 2 / (itemSize.y - 1) - 1;
        const z = itemSize.z <= 1 ? 0 : clamped.z * 2 / (itemSize.z - 1) - 1;
        return new lib.Vector3Builder(x, y, z);
    }
    function calculateClipboardAbsoluteAnchorValue(item, normalized) {
        const itemSize = item.getSize();
        const x = (normalized.x + 1) * ((itemSize.x - 1) / 2);
        const y = (normalized.y + 1) * ((itemSize.y - 1) / 2);
        const z = (normalized.z + 1) * ((itemSize.z - 1) / 2);
        return new Vector3Builder(x, y, z);
    }
    const TESTFORBLOCKS_RETRY_COUNT = 5;
    const TESTFORBLOCKS_WAIT_TICKS_COUNT = 2;
    async function executeTickSafeOperation(context, bounds, tickingHandle, operation) {
        const tickingAddCommand = `/tickingarea add ${bounds.min.x} ${bounds.min.y} ${bounds.max.z} ${bounds.max.x} ${bounds.max.y} ${bounds.min.z} name:${tickingHandle}`;
        context.player.dimension.runCommand(tickingAddCommand);
        const areBoundsLoaded = await checkBoundsLoaded(context, bounds);
        if (!areBoundsLoaded) {
            throw new Error("Failed to set ticking area");
        }
        operation();
        const tickingRemoveCommand = `/tickingarea remove name:${tickingHandle}`;
        context.player.dimension.runCommand(tickingRemoveCommand);
    }
    async function executeTickSafeAsyncOperation(context, bounds, tickingHandle, operation) {
        const tickingAddCommand = `/tickingarea add ${bounds.min.x} ${bounds.min.y} ${bounds.max.z} ${bounds.max.x} ${bounds.max.y} ${bounds.min.z} name:${tickingHandle}`;
        context.player.dimension.runCommand(tickingAddCommand);
        const areBoundsLoaded = await checkBoundsLoaded(context, bounds);
        if (!areBoundsLoaded) {
            throw new Error("Failed to set ticking area");
        }
        await operation();
        const tickingRemoveCommand = `/tickingarea remove name:${tickingHandle}`;
        context.player.dimension.runCommand(tickingRemoveCommand);
    }
    async function checkBoundsLoaded(context, bounds) {
        let retryCount = TESTFORBLOCKS_RETRY_COUNT;
        while (retryCount > 0) {
            const testCommand = `/testforblocks ${bounds.min.x} ${bounds.min.y} ${bounds.min.z} ${bounds.max.x} ${bounds.max.y} ${bounds.max.z} ${bounds.min.x} ${bounds.min.y} ${bounds.min.z}`;
            const testResult = context.player.dimension.runCommand(testCommand);
            if (testResult.successCount !== undefined && testResult.successCount > 0) {
                return true;
            }
            await server_namespaceObject.system.waitTicks(TESTFORBLOCKS_WAIT_TICKS_COUNT);
            retryCount--;
        }
        return false;
    }
    async function executeLargeOperationWithTransactionAndTicking(context, originalSelection, transactionString, operation) {
        const selection = context.selectionManager.create();
        selection.set(originalSelection);
        const bounds = selection.getBoundingBox();
        context.transactionManager.openTransaction(transactionString);
        try {
            context.transactionManager.trackBlockChangeArea(bounds.min, bounds.max);
        } catch (e) {
            context.transactionManager.discardOpenTransaction();
            throw Error((0, server_editor_namespaceObject.stringFromException)(e));
        }
        await executeTickSafeAsyncOperation(context, bounds, transactionString, (async () => {
            await (0, server_editor_namespaceObject.executeLargeOperation)(selection, operation).catch((e => {
                context.transactionManager.discardOpenTransaction();
                throw e;
            })).then((() => {
                context.transactionManager.commitOpenTransaction();
            }));
        }));
    }
    async function executeLargeOperationFromIteratorWithTransactionAndTicking(context, bounds, blockLocationIterator, transactionString, operation) {
        context.transactionManager.openTransaction(transactionString);
        try {
            context.transactionManager.trackBlockChangeArea(bounds.min, bounds.max);
        } catch (e) {
            context.transactionManager.discardOpenTransaction();
            throw Error((0, server_editor_namespaceObject.stringFromException)(e));
        }
        await executeTickSafeAsyncOperation(context, bounds, transactionString, (async () => {
            await (0, server_editor_namespaceObject.executeLargeOperationFromIterator)(blockLocationIterator, operation).catch((e => {
                context.transactionManager.discardOpenTransaction();
                throw e;
            })).then((() => {
                context.transactionManager.commitOpenTransaction();
            }));
        }));
    }
    class logInterface {
        debug(_m) {
            if (this._debug) this._debug(_m);
        }
        error(_m) {
            if (this._error) this._error(_m);
        }
        onStep(_path, _key, _type, _data, _properties) {
            if (this._onStep) {
                this._onStep(_path, _key, _type, _data, _properties);
            }
        }
    }
    var OpNodeSourceType;
    (function(OpNodeSourceType) {
        OpNodeSourceType["NULL"] = "null";
        OpNodeSourceType["BOOLEAN"] = "boolean";
        OpNodeSourceType["OBJECT"] = "object";
        OpNodeSourceType["ARRAY"] = "array";
        OpNodeSourceType["NUMBER"] = "number";
        OpNodeSourceType["INTEGER"] = "integer";
        OpNodeSourceType["STRING"] = "string";
        OpNodeSourceType["MAP"] = "map";
        OpNodeSourceType["ENUM"] = "enum";
    })(OpNodeSourceType || (OpNodeSourceType = {}));
    function _isDataOfType(data, type) {
        switch (type) {
          case OpNodeSourceType.NULL:
            return data === undefined;

          case OpNodeSourceType.BOOLEAN:
            return typeof data === "boolean";

          case OpNodeSourceType.OBJECT:
            return typeof data === "object";

          case OpNodeSourceType.ARRAY:
            return Array.isArray(data);

          case OpNodeSourceType.NUMBER:
            return typeof data === "number";

          case OpNodeSourceType.INTEGER:
            return Number.isInteger(data);

          case OpNodeSourceType.STRING:
            return typeof data === "string";

          case OpNodeSourceType.MAP:
            return typeof data === "object";

          case OpNodeSourceType.ENUM:
            return typeof data === "string";

          default:
            return false;
        }
    }
    var OpNodeEditorUIControlType;
    (function(OpNodeEditorUIControlType) {
        OpNodeEditorUIControlType["FLOAT"] = "float";
        OpNodeEditorUIControlType["TEXT"] = "text";
        OpNodeEditorUIControlType["SLIDER"] = "slider";
        OpNodeEditorUIControlType["CHECKBOX"] = "checkbox";
        OpNodeEditorUIControlType["COLOR"] = "color";
        OpNodeEditorUIControlType["VECTOR3"] = "vector3";
        OpNodeEditorUIControlType["DROPDOWN"] = "dropdown";
        OpNodeEditorUIControlType["UNKNOWN"] = "unknown";
    })(OpNodeEditorUIControlType || (OpNodeEditorUIControlType = {}));
    class OpPropertyPattern {
        constructor(pattern) {
            this._pattern = pattern;
        }
        get pattern() {
            return this._pattern;
        }
        clone() {
            return new OpPropertyPattern(this._pattern);
        }
        toString() {
            return `Pattern(${this._pattern})`;
        }
        validate(_key, _data, _log) {
            if (typeof _data !== "string") {
                _log?.error(`Key(${_key}): Data(${JSON.stringify(_data)}) is not a string`);
                return false;
            }
            const regex = new RegExp(this._pattern);
            const isMatch = regex.test(_data);
            if (!isMatch) {
                _log?.error(`Key(${_key}): Data(${String(_data)}) does not match pattern(${this._pattern})`);
            }
            return isMatch;
        }
    }
    class OpPropertyDescription {
        constructor(description) {
            this._description = description;
        }
        get description() {
            return this._description;
        }
        clone() {
            return new OpPropertyDescription(this._description);
        }
        toString() {
            return `Desc(${this._description})`;
        }
        validate(_key, _data, _log) {
            return true;
        }
    }
    class OpPropertyValueRange {
        constructor(minimum, maximum) {
            this._minimum = minimum;
            this._maximum = maximum;
        }
        get min() {
            return this._minimum;
        }
        get max() {
            return this._maximum;
        }
        clone() {
            return new OpPropertyValueRange(this._minimum, this._maximum);
        }
        toString() {
            return `ValueRange(${this._minimum}, ${this._maximum})`;
        }
        validate(_key, data, _log) {
            if (typeof data !== "number") {
                _log?.error(`Key(${_key}): Data(${JSON.stringify(data)}) is not a number`);
                return false;
            }
            const isInRange = data >= this._minimum && data <= this._maximum;
            if (!isInRange) {
                _log?.error(`Key(${_key}): Data(${Number(data)}) is not in range(${this._minimum}, ${this._maximum})`);
            }
            return isInRange;
        }
    }
    class OpPropertyArrayBounds {
        constructor(minItems, maxItems) {
            this._minItems = minItems;
            this._maxItems = maxItems;
        }
        get minItems() {
            return this._minItems;
        }
        get maxItems() {
            return this._maxItems;
        }
        clone() {
            return new OpPropertyArrayBounds(this._minItems, this._maxItems);
        }
        toString() {
            return `ArrayBounds(${String(this._minItems)}, ${String(this._maxItems)})`;
        }
        validate(_key, _data, _log) {
            if (!Array.isArray(_data)) {
                return false;
            }
            if (this._minItems !== undefined && _data.length < this._minItems) {
                _log?.error(`Key(${_key}): Data(${JSON.stringify(_data)}) has less than min items(${this._minItems})`);
                return false;
            }
            if (this._maxItems !== undefined && _data.length > this._maxItems) {
                _log?.error(`Key(${_key}): Data(${JSON.stringify(_data)}) has more than max items(${this._maxItems})`);
                return false;
            }
            return true;
        }
    }
    class OpPropertyMapBounds {
        constructor(minProperties, maxProperties) {
            this._minProperties = minProperties;
            this._maxProperties = maxProperties;
        }
        get minProperties() {
            return this._minProperties;
        }
        get maxProperties() {
            return this._maxProperties;
        }
        clone() {
            return new OpPropertyMapBounds(this._minProperties, this._maxProperties);
        }
        toString() {
            return `MapBounds(${String(this._minProperties)}, ${String(this._maxProperties)})`;
        }
        validate(_key, _data, _log) {
            if (typeof _data !== "object") {
                return false;
            }
            const keys = Object.keys(_data);
            if (this._minProperties !== undefined && keys.length < this._minProperties) {
                _log?.error(`Key(${_key}): Data(${JSON.stringify(_data)}) has less than min properties(${this._minProperties})`);
                return false;
            }
            if (this._maxProperties !== undefined && keys.length > this._maxProperties) {
                _log?.error(`Key(${_key}): Data(${JSON.stringify(_data)}) has more than max properties(${this._maxProperties})`);
                return false;
            }
            return true;
        }
    }
    class OpPropertyStringLiteral {
        constructor(literal) {
            this._literal = literal;
        }
        get literal() {
            return this._literal;
        }
        clone() {
            return new OpPropertyStringLiteral(this._literal);
        }
        toString() {
            return `Literal(${this._literal})`;
        }
        validate(_key, _data, _log) {
            const isMatch = _key.localeCompare(this._literal) === 0;
            return isMatch;
        }
    }
    class OpPropertyEnum {
        constructor(enums) {
            this._enums = [];
            this._prettyEnums = [];
            this._enums = enums;
            this._prettyEnums = enums.map((e => e));
        }
        get enums() {
            return this._enums;
        }
        get prettyEnums() {
            return this._prettyEnums;
        }
        prettifyEnums(prettyFunction) {
            this._prettyEnums = this._enums.map((e => prettyFunction(e)));
        }
        getIndexOf(data) {
            let index = this._enums.indexOf(data);
            if (index < 0) {
                index = this._prettyEnums.indexOf(data);
            }
            return index;
        }
        clone() {
            return new OpPropertyEnum(this._enums);
        }
        toString() {
            return `Enum(${this._prettyEnums.join(", ")})`;
        }
        validate(_key, _data, _log) {
            if (typeof _data !== "string") {
                return false;
            }
            const isMatch = this._enums.includes(_data) || this._prettyEnums.includes(_data);
            if (!isMatch) {
                _log?.error(`Key(${_key}): Data(${_data}) is not in enum[${this._enums.join(", ")}]`);
            }
            return isMatch;
        }
    }
    class OpPropertyReadOnly {
        clone() {
            return new OpPropertyReadOnly;
        }
        toString() {
            return `ReadOnly(true)`;
        }
        validate(_key, _data, _log) {
            return true;
        }
    }
    class OpPropertyPrettifier {
        clone() {
            return new OpPropertyPrettifier;
        }
        toString() {
            return `Prettify(true)`;
        }
        validate(_key, _data, _log) {
            return true;
        }
        prettify(_input) {
            if (_input.startsWith("minecraft:")) {
                _input = _input.substring(10);
            }
            _input = _input.replace(/_/g, " ");
            _input = _input.replace(/([a-z])([A-Z])/g, "$1 $2");
            _input = _input.split(" ").map((word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())).join(" ");
            return _input;
        }
    }
    class OpPropertyLabelAliases {
        constructor(labelRemaps) {
            this._labelRemaps = labelRemaps;
        }
        get aliases() {
            return this._labelRemaps;
        }
        addAlias(_original, _new) {
            this._labelRemaps[_original] = _new;
        }
        clone() {
            return new OpPropertyLabelAliases(this._labelRemaps);
        }
        toString() {
            return `Labels(${Object.entries(this._labelRemaps).map((([key, value]) => `${key}:${value}`)).join(", ")})`;
        }
        validate(_key, _data, _log) {
            return true;
        }
        getLabelAlias(_label) {
            return this._labelRemaps[_label] ?? _label;
        }
    }
    class OpPropertyType {
        constructor(type) {
            this._type = OpNodeSourceType.NULL;
            this._type = type;
        }
        get type() {
            return this._type;
        }
        clone() {
            return new OpPropertyType(this._type);
        }
        toString() {
            return `Type(${this._type})`;
        }
        validate(_key, _data, _log) {
            return _isDataOfType(_data, this._type);
        }
    }
    class OpPropertyEditorUIControl {
        constructor(controlType) {
            this._controlType = OpNodeEditorUIControlType.FLOAT;
            this._controlType = controlType;
        }
        get controlType() {
            return this._controlType;
        }
        clone() {
            return new OpPropertyEditorUIControl(this._controlType);
        }
        toString() {
            return `EditorControl(${this._controlType})`;
        }
        validate(_key, _data, _log) {
            return true;
        }
    }
    class OpPropertyStack {
        constructor() {
            this._properties = [];
        }
        addOrReplaceProperty(property) {
            for (let i = 0; i < this._properties.length; i++) {
                if (this._properties[i].constructor.name === property.constructor.name) {
                    this._properties[i] = property;
                    return;
                }
            }
            this._properties.push(property);
        }
        removeProperty(propType) {
            for (let i = 0; i < this._properties.length; i++) {
                if (this._properties[i].constructor.name === propType) {
                    this._properties.splice(i, 1);
                    return;
                }
            }
        }
        hasProperty(propType) {
            for (let i = 0; i < this._properties.length; i++) {
                if (this._properties[i].constructor.name === propType) {
                    return true;
                }
            }
            return false;
        }
        getProperty(propType) {
            for (let i = 0; i < this._properties.length; i++) {
                if (this._properties[i].constructor.name === propType) {
                    return this._properties[i];
                }
            }
            return undefined;
        }
        _extractEditorProperties(_node, _description) {
            const editorRegex = /editor\(([^)]+)\)/;
            const match = _description.match(editorRegex);
            if (!match) {
                return;
            }
            const editorString = match[1];
            const splitKeyValuePairs = data => {
                const pairs = {};
                let inBraces = false;
                let key = "";
                let value = "";
                let current = "";
                let expectValue = false;
                for (const char of data) {
                    if (char === "{") {
                        inBraces = true;
                        current += char;
                    } else if (char === "}") {
                        inBraces = false;
                        current += char;
                    } else if (char === ":" && !inBraces) {
                        key = current.trim();
                        current = "";
                        expectValue = true;
                    } else if (char === "," && !inBraces) {
                        value = current.trim();
                        pairs[key] = value;
                        current = "";
                        expectValue = false;
                    } else {
                        current += char;
                    }
                }
                if (expectValue) {
                    value = current.trim();
                    pairs[key] = value;
                }
                return pairs;
            };
            const keyValuePairs = splitKeyValuePairs(editorString);
            const aliasRemaps = new OpPropertyLabelAliases({});
            for (const key in keyValuePairs) {
                if (key === "alias" && keyValuePairs[key].startsWith("{") && keyValuePairs[key].endsWith("}")) {
                    const aliasKeyValue = keyValuePairs[key].slice(1, -1);
                    const aliasKeyValuePairs = splitKeyValuePairs(aliasKeyValue);
                    Object.entries(aliasKeyValuePairs).forEach((([aliasKey, aliasValue]) => {
                        aliasRemaps.addAlias(aliasKey, aliasValue);
                    }));
                } else {
                    const value = keyValuePairs[key];
                    if (key && value) {
                        if (key === "type") {
                            let controlType = OpNodeEditorUIControlType.FLOAT;
                            switch (value) {
                              case "float":
                              case "number":
                                controlType = OpNodeEditorUIControlType.FLOAT;
                                break;

                              case "text":
                              case "string":
                                if (_node.enum !== undefined) {
                                    controlType = OpNodeEditorUIControlType.DROPDOWN;
                                } else {
                                    controlType = OpNodeEditorUIControlType.TEXT;
                                }
                                break;

                              case "enum":
                              case "dropdown":
                                controlType = OpNodeEditorUIControlType.DROPDOWN;
                                break;

                              case "slider":
                                controlType = OpNodeEditorUIControlType.SLIDER;
                                break;

                              case "checkbox":
                              case "boolean":
                              case "bool":
                                controlType = OpNodeEditorUIControlType.CHECKBOX;
                                break;

                              case "color":
                                controlType = OpNodeEditorUIControlType.COLOR;
                                break;

                              case "vector3":
                              case "vec3":
                                controlType = OpNodeEditorUIControlType.VECTOR3;
                                break;

                              default:
                                controlType = OpNodeEditorUIControlType.UNKNOWN;
                                throw new Error(`Unknown editor control type: ${value}`);
                            }
                            this.addOrReplaceProperty(new OpPropertyEditorUIControl(controlType));
                        } else if (key === "readonly") {
                            if (value === "true" || value === "1" || value === "yes" || value === "on") {
                                this.addOrReplaceProperty(new OpPropertyReadOnly);
                            }
                        } else if (key === "prettify") {
                            if (value === "true" || value === "1" || value === "yes" || value === "on") {
                                this.addOrReplaceProperty(new OpPropertyPrettifier);
                            }
                        }
                    } else {
                        throw new Error(`Invalid [editor(key:value,...) key-value pair: ${JSON.stringify(keyValuePairs)}`);
                    }
                }
            }
            if (Object.keys(aliasRemaps.aliases).length > 0) {
                this.addOrReplaceProperty(aliasRemaps);
            }
        }
        extractProperties(node) {
            if (node !== undefined) {
                if (node.type !== undefined) {
                    let nodeType = OpNodeSourceType.NULL;
                    switch (node.type) {
                      case "null":
                        nodeType = OpNodeSourceType.NULL;
                        break;

                      case "boolean":
                        nodeType = OpNodeSourceType.BOOLEAN;
                        break;

                      case "object":
                        if (node.additionalProperties !== undefined) {
                            nodeType = OpNodeSourceType.MAP;
                        } else {
                            nodeType = OpNodeSourceType.OBJECT;
                        }
                        break;

                      case "array":
                        nodeType = OpNodeSourceType.ARRAY;
                        break;

                      case "number":
                        nodeType = OpNodeSourceType.NUMBER;
                        break;

                      case "integer":
                        nodeType = OpNodeSourceType.INTEGER;
                        break;

                      case "string":
                        nodeType = OpNodeSourceType.STRING;
                        if (node.enum !== undefined) {
                            nodeType = OpNodeSourceType.ENUM;
                        }
                        break;

                      default:
                        throw new Error(`Unknown type: ${JSON.stringify(node.type)}`);
                    }
                    this.addOrReplaceProperty(new OpPropertyType(nodeType));
                }
                if (node.enum !== undefined) {
                    const enumArray = [ ...node.enum ];
                    this.addOrReplaceProperty(new OpPropertyEnum(enumArray));
                }
                if (node.description !== undefined) {
                    this.addOrReplaceProperty(new OpPropertyDescription(node.description));
                }
                if (node.minimum !== undefined && node.maximum !== undefined) {
                    this.addOrReplaceProperty(new OpPropertyValueRange(node.minimum, node.maximum));
                }
                if (node.pattern !== undefined) {
                    this.addOrReplaceProperty(new OpPropertyPattern(node.pattern));
                }
                if (node.minProperties !== undefined || node.maxProperties !== undefined || node.additionalProperties !== undefined) {
                    this.addOrReplaceProperty(new OpPropertyMapBounds(node.minProperties, node.maxProperties));
                } else if (node.minItems !== undefined || node.maxItems !== undefined || node.items !== undefined) {
                    this.addOrReplaceProperty(new OpPropertyArrayBounds(node.minItems, node.maxItems));
                }
                if (node.description !== undefined) {
                    const description = String(node.description).trim();
                    this._extractEditorProperties(node, description);
                }
            }
        }
        clone() {
            const stack = new OpPropertyStack;
            for (const property of this._properties) {
                stack.addOrReplaceProperty(property.clone());
            }
            return stack;
        }
        toString() {
            let str = "";
            for (let i = this._properties.length - 1; i >= 0; i--) {
                str += this._properties[i].toString() + " ";
            }
            return str;
        }
        validateAll(_key, _data, _log) {
            for (let i = this._properties.length - 1; i >= 0; i--) {
                if (!this._properties[i].validate(_key, _data, _log)) {
                    return false;
                }
            }
            return true;
        }
        validate(_type, _key, data, _log) {
            const property = this.getProperty(_type);
            if (property === undefined) {
                return true;
            }
            return property.validate(_key, data, _log);
        }
    }
    class OpBaseNode {
        constructor(_tabDepth, _schemaObject, _refMap, _propertyStack, _logger) {
            this._type = OpNodeSourceType.NULL;
            this._children = [];
            this._propertyStack = new OpPropertyStack;
            this._logger = _logger;
            _tabDepth = _tabDepth + "    ";
            if (_schemaObject === undefined) {
                throw new Error("SchemaObject is undefined");
            }
            _propertyStack.extractProperties(_schemaObject);
            _schemaObject = _refMap.resolve(_schemaObject);
            _propertyStack.extractProperties(_schemaObject);
            this._propertyStack = _propertyStack.clone();
            this._title = _schemaObject?.title ?? "";
            this._description = _schemaObject?.description ?? "";
            this._type = _schemaObject?.type ?? OpNodeSourceType.OBJECT;
            this._isArray = _schemaObject?.items !== undefined || this._title === "sequence container";
            this._isMap = _schemaObject?.additionalProperties !== undefined || this._title === "associative container";
            this._id = _schemaObject?.$id ?? "no-id";
            this._oneOf = _schemaObject?.oneOf !== undefined;
            if (this._type === "object" && this._isMap) {
                this._type = OpNodeSourceType.MAP;
            } else if (this._type === "object" && this._isArray) {
                this._type = OpNodeSourceType.ARRAY;
            }
            this._logger?.debug(`${_tabDepth}Title: ${this._title}, Id: ${this._id}, Type: ${this._type}, OneOf: ${this._oneOf}, Array: ${this._isArray}, Map: ${this._isMap}`);
            this._logger?.debug(`  ${_tabDepth}props[ ${this._propertyStack.toString()} ]`);
            if (typeof _schemaObject === "object") {
                if (_schemaObject.oneOf !== undefined) {
                    for (const oneOfObject of _schemaObject.oneOf) {
                        const oneOfPropertyStack = _propertyStack.clone();
                        oneOfPropertyStack.extractProperties(oneOfObject);
                        oneOfPropertyStack.removeProperty("OpPropertyStringLiteral");
                        const node = new OpBaseNode(_tabDepth, oneOfObject, _refMap, oneOfPropertyStack, this._logger);
                        this._children.push(node);
                    }
                } else if (_schemaObject.properties !== undefined) {
                    for (const key in _schemaObject.properties) {
                        const propertyPropertyStack = _propertyStack.clone();
                        let property = _schemaObject.properties[key];
                        propertyPropertyStack.extractProperties(property);
                        property = _refMap.resolve(property);
                        propertyPropertyStack.extractProperties(property);
                        propertyPropertyStack.addOrReplaceProperty(new OpPropertyStringLiteral(key));
                        const node = new OpBaseNode(_tabDepth, property, _refMap, propertyPropertyStack, this._logger);
                        this._children.push(node);
                    }
                } else {
                    if (this._type === OpNodeSourceType.ARRAY) {
                        if (_schemaObject.items !== undefined) {
                            const itemPropertyStack = _propertyStack.clone();
                            itemPropertyStack.extractProperties(_schemaObject.items);
                            itemPropertyStack.removeProperty("OpPropertyArrayBounds");
                            itemPropertyStack.removeProperty("OpPropertyStringLiteral");
                            const node = new OpBaseNode(_tabDepth, _schemaObject.items, _refMap, itemPropertyStack, this._logger);
                            this._children.push(node);
                        }
                    } else if (this._type === OpNodeSourceType.MAP) {
                        const additionalPropertyStack = _propertyStack.clone();
                        additionalPropertyStack.extractProperties(_schemaObject.additionalProperties);
                        additionalPropertyStack.removeProperty("OpPropertyMapBounds");
                        additionalPropertyStack.removeProperty("OpPropertyStringLiteral");
                        const node = new OpBaseNode(_tabDepth, _schemaObject.additionalProperties, _refMap, additionalPropertyStack, this._logger);
                        this._children.push(node);
                    } else {
                        this._logger?.debug(`  ${_tabDepth}No properties or oneOf`);
                    }
                }
            } else {
                this._logger?.debug(`  ${_tabDepth}No object - WTF?`);
            }
        }
        validate(_key, _data, _tabDepth, _path) {
            _tabDepth = _tabDepth + "    ";
            if (!this._oneOf && _key !== "") {
                _path += "/" + _key;
            }
            this._logger?.debug(`${_tabDepth}Node: ${this._title}, Type: ${this._type}, Id: ${this._id}, OneOf: ${this._oneOf}, Props: ${this._propertyStack.toString()}, Children: ${this._children.length}`);
            this._logger?.debug(`${_tabDepth}incoming Key: ${_key}, Type: ${typeof _data}, Data: ${JSON.stringify(_data)}, `);
            const isArray = Array.isArray(_data);
            if (!this._oneOf) {
                if (!_isDataOfType(_data, this._type)) {
                    this._logger?.debug(`${_tabDepth}  Type mismatch: ${typeof _data} != ${this._type} (Array: ${isArray})`);
                    return false;
                }
                if (!this._propertyStack.validate("OpPropertyType", _key, _data, this._logger)) {
                    this._logger?.debug(`${_tabDepth}  Type mismatch: ${typeof _data} != ${this._type} (Array: ${isArray})`);
                    return false;
                }
                if (this._type === OpNodeSourceType.ARRAY) {
                    if (!this._propertyStack.validate("OpPropertyArrayBounds", _key, _data, this._logger)) {
                        return false;
                    }
                }
                if (this._type === OpNodeSourceType.MAP) {
                    if (!this._propertyStack.validate("OpPropertyMapBounds", _key, _data, this._logger)) {
                        return false;
                    }
                }
                if (this.type === OpNodeSourceType.STRING) {
                    if (!this._propertyStack.validate("OpPropertyPattern", _key, _data, this._logger)) {
                        return false;
                    }
                }
                if (this.type === OpNodeSourceType.NUMBER || this.type === OpNodeSourceType.INTEGER) {
                    if (!this._propertyStack.validate("OpPropertyValueRange", _key, _data, this._logger)) {
                        return false;
                    }
                }
            }
            if (!this._propertyStack.validate("OpPropertyStringLiteral", _key, _data, this._logger)) {
                return false;
            }
            if (!this._oneOf) {
                if (_path !== "" && _key !== "") {
                    this._logger?.onStep(_path, _key, this._type, _data, this._propertyStack);
                }
            }
            if (this._type === OpNodeSourceType.OBJECT || this._type === OpNodeSourceType.MAP || this._oneOf) {
                if (this._oneOf) {
                    for (const child of this._children) {
                        if (child.validate(_key, _data, _tabDepth, _path)) {
                            return true;
                        }
                    }
                    this._logger?.debug(`${_tabDepth}  Object bounds validation failed (Key: ${_key}, Data: ${JSON.stringify(_data)})`);
                    return false;
                }
                for (const objectKey in _data) {
                    let found = false;
                    for (const child of this._children) {
                        if (child.validate(objectKey, _data[objectKey], _tabDepth, _path)) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        return false;
                    }
                }
                this._logger?.debug(`${_tabDepth}  All object properties validated successfully`);
                return true;
            } else if (isArray) {
                for (let index = 0; index < _data.length; index++) {
                    const element = _data[index];
                    for (const child of this._children) {
                        if (!child.validate(String(index), element, _tabDepth, _path)) {
                            this._logger?.debug(`${_tabDepth}  Array validation failed`);
                            return false;
                        }
                    }
                }
                this._logger?.debug(`${_tabDepth}  Array validation PASSED`);
                return true;
            } else if (this._type === OpNodeSourceType.STRING) {
                const propertyType = this._propertyStack.getProperty("OpPropertyType");
                if (propertyType !== undefined) {
                    if (propertyType.type === OpNodeSourceType.ENUM) {
                        const enumProperty = this._propertyStack.getProperty("OpPropertyEnum");
                        if (enumProperty !== undefined) {
                            if (!enumProperty.validate(_key, _data, this._logger)) {
                                return false;
                            }
                            this._logger?.debug(`${_tabDepth}  Enum validation PASSED`);
                            return true;
                        } else {
                            this._logger?.debug(`${_tabDepth}  Enum property not found`);
                            return false;
                        }
                    }
                }
            }
            this._logger?.debug(`${_tabDepth}  Data: "${_key} : ${JSON.stringify(_data)}" - appears valid`);
            return true;
        }
        get title() {
            return this._title;
        }
        get description() {
            return this._description;
        }
        get type() {
            return this._type;
        }
        get id() {
            return this._id;
        }
    }
    class SchemaRefMap {
        constructor(_definitions) {
            this._map = new Map;
            if (_definitions !== undefined) {
                for (const key in _definitions) {
                    this._map.set(key, _definitions[key]);
                }
            }
        }
        resolve(_schema) {
            if (_schema === undefined) {
                throw new Error("Schema is undefined");
            }
            const refPrologue = "#/definitions/";
            if (_schema.$ref === undefined) {
                return _schema;
            }
            let ref = _schema.$ref;
            if (ref.startsWith(refPrologue)) {
                ref = ref.substring(refPrologue.length);
            } else {
                throw new Error(`Failed to resolve ref: ${String(_schema.$ref)}`);
            }
            const result = this._map.get(ref);
            if (result === undefined) {
                throw new Error(`Failed to resolve ref: ${String(_schema.$ref)}`);
            }
            return this.resolve(result);
        }
    }
    class SchemaBuilder {
        constructor(_logger) {
            this._schemaObject = {};
            this._root = undefined;
            this._refMap = new SchemaRefMap(undefined);
            this._logger = _logger;
        }
        build(_schemaObject) {
            this._schemaObject = _schemaObject;
            if (_schemaObject.definitions !== undefined) {
                this._refMap = new SchemaRefMap(_schemaObject.definitions);
            }
            try {
                const root = new OpBaseNode("", _schemaObject, this._refMap, new OpPropertyStack, this._logger);
                this._root = root;
            } catch {
                this._logger?.error(`Failed to build schema`);
                return false;
            }
            return true;
        }
        validate(_data) {
            if (_data === undefined) {
                throw new Error("Data is undefined");
            }
            if (this._root === undefined) {
                throw new Error("No Schema Map built yet");
            }
            return this._root.validate("", _data, "", "");
        }
    }
    var MinecraftBiomeTypes = (MinecraftBiomeTypes2 => {
        MinecraftBiomeTypes2["BambooJungle"] = "minecraft:bamboo_jungle";
        MinecraftBiomeTypes2["BambooJungleHills"] = "minecraft:bamboo_jungle_hills";
        MinecraftBiomeTypes2["BasaltDeltas"] = "minecraft:basalt_deltas";
        MinecraftBiomeTypes2["Beach"] = "minecraft:beach";
        MinecraftBiomeTypes2["BirchForest"] = "minecraft:birch_forest";
        MinecraftBiomeTypes2["BirchForestHills"] = "minecraft:birch_forest_hills";
        MinecraftBiomeTypes2["BirchForestHillsMutated"] = "minecraft:birch_forest_hills_mutated";
        MinecraftBiomeTypes2["BirchForestMutated"] = "minecraft:birch_forest_mutated";
        MinecraftBiomeTypes2["CherryGrove"] = "minecraft:cherry_grove";
        MinecraftBiomeTypes2["ColdBeach"] = "minecraft:cold_beach";
        MinecraftBiomeTypes2["ColdOcean"] = "minecraft:cold_ocean";
        MinecraftBiomeTypes2["ColdTaiga"] = "minecraft:cold_taiga";
        MinecraftBiomeTypes2["ColdTaigaHills"] = "minecraft:cold_taiga_hills";
        MinecraftBiomeTypes2["ColdTaigaMutated"] = "minecraft:cold_taiga_mutated";
        MinecraftBiomeTypes2["CrimsonForest"] = "minecraft:crimson_forest";
        MinecraftBiomeTypes2["DeepColdOcean"] = "minecraft:deep_cold_ocean";
        MinecraftBiomeTypes2["DeepDark"] = "minecraft:deep_dark";
        MinecraftBiomeTypes2["DeepFrozenOcean"] = "minecraft:deep_frozen_ocean";
        MinecraftBiomeTypes2["DeepLukewarmOcean"] = "minecraft:deep_lukewarm_ocean";
        MinecraftBiomeTypes2["DeepOcean"] = "minecraft:deep_ocean";
        MinecraftBiomeTypes2["DeepWarmOcean"] = "minecraft:deep_warm_ocean";
        MinecraftBiomeTypes2["Desert"] = "minecraft:desert";
        MinecraftBiomeTypes2["DesertHills"] = "minecraft:desert_hills";
        MinecraftBiomeTypes2["DesertMutated"] = "minecraft:desert_mutated";
        MinecraftBiomeTypes2["DripstoneCaves"] = "minecraft:dripstone_caves";
        MinecraftBiomeTypes2["ExtremeHills"] = "minecraft:extreme_hills";
        MinecraftBiomeTypes2["ExtremeHillsEdge"] = "minecraft:extreme_hills_edge";
        MinecraftBiomeTypes2["ExtremeHillsMutated"] = "minecraft:extreme_hills_mutated";
        MinecraftBiomeTypes2["ExtremeHillsPlusTrees"] = "minecraft:extreme_hills_plus_trees";
        MinecraftBiomeTypes2["ExtremeHillsPlusTreesMutated"] = "minecraft:extreme_hills_plus_trees_mutated";
        MinecraftBiomeTypes2["FlowerForest"] = "minecraft:flower_forest";
        MinecraftBiomeTypes2["Forest"] = "minecraft:forest";
        MinecraftBiomeTypes2["ForestHills"] = "minecraft:forest_hills";
        MinecraftBiomeTypes2["FrozenOcean"] = "minecraft:frozen_ocean";
        MinecraftBiomeTypes2["FrozenPeaks"] = "minecraft:frozen_peaks";
        MinecraftBiomeTypes2["FrozenRiver"] = "minecraft:frozen_river";
        MinecraftBiomeTypes2["Grove"] = "minecraft:grove";
        MinecraftBiomeTypes2["Hell"] = "minecraft:hell";
        MinecraftBiomeTypes2["IceMountains"] = "minecraft:ice_mountains";
        MinecraftBiomeTypes2["IcePlains"] = "minecraft:ice_plains";
        MinecraftBiomeTypes2["IcePlainsSpikes"] = "minecraft:ice_plains_spikes";
        MinecraftBiomeTypes2["JaggedPeaks"] = "minecraft:jagged_peaks";
        MinecraftBiomeTypes2["Jungle"] = "minecraft:jungle";
        MinecraftBiomeTypes2["JungleEdge"] = "minecraft:jungle_edge";
        MinecraftBiomeTypes2["JungleEdgeMutated"] = "minecraft:jungle_edge_mutated";
        MinecraftBiomeTypes2["JungleHills"] = "minecraft:jungle_hills";
        MinecraftBiomeTypes2["JungleMutated"] = "minecraft:jungle_mutated";
        MinecraftBiomeTypes2["LegacyFrozenOcean"] = "minecraft:legacy_frozen_ocean";
        MinecraftBiomeTypes2["LukewarmOcean"] = "minecraft:lukewarm_ocean";
        MinecraftBiomeTypes2["LushCaves"] = "minecraft:lush_caves";
        MinecraftBiomeTypes2["MangroveSwamp"] = "minecraft:mangrove_swamp";
        MinecraftBiomeTypes2["Meadow"] = "minecraft:meadow";
        MinecraftBiomeTypes2["MegaTaiga"] = "minecraft:mega_taiga";
        MinecraftBiomeTypes2["MegaTaigaHills"] = "minecraft:mega_taiga_hills";
        MinecraftBiomeTypes2["Mesa"] = "minecraft:mesa";
        MinecraftBiomeTypes2["MesaBryce"] = "minecraft:mesa_bryce";
        MinecraftBiomeTypes2["MesaPlateau"] = "minecraft:mesa_plateau";
        MinecraftBiomeTypes2["MesaPlateauMutated"] = "minecraft:mesa_plateau_mutated";
        MinecraftBiomeTypes2["MesaPlateauStone"] = "minecraft:mesa_plateau_stone";
        MinecraftBiomeTypes2["MesaPlateauStoneMutated"] = "minecraft:mesa_plateau_stone_mutated";
        MinecraftBiomeTypes2["MushroomIsland"] = "minecraft:mushroom_island";
        MinecraftBiomeTypes2["MushroomIslandShore"] = "minecraft:mushroom_island_shore";
        MinecraftBiomeTypes2["Ocean"] = "minecraft:ocean";
        MinecraftBiomeTypes2["Plains"] = "minecraft:plains";
        MinecraftBiomeTypes2["RedwoodTaigaHillsMutated"] = "minecraft:redwood_taiga_hills_mutated";
        MinecraftBiomeTypes2["RedwoodTaigaMutated"] = "minecraft:redwood_taiga_mutated";
        MinecraftBiomeTypes2["River"] = "minecraft:river";
        MinecraftBiomeTypes2["RoofedForest"] = "minecraft:roofed_forest";
        MinecraftBiomeTypes2["RoofedForestMutated"] = "minecraft:roofed_forest_mutated";
        MinecraftBiomeTypes2["Savanna"] = "minecraft:savanna";
        MinecraftBiomeTypes2["SavannaMutated"] = "minecraft:savanna_mutated";
        MinecraftBiomeTypes2["SavannaPlateau"] = "minecraft:savanna_plateau";
        MinecraftBiomeTypes2["SavannaPlateauMutated"] = "minecraft:savanna_plateau_mutated";
        MinecraftBiomeTypes2["SnowySlopes"] = "minecraft:snowy_slopes";
        MinecraftBiomeTypes2["SoulsandValley"] = "minecraft:soulsand_valley";
        MinecraftBiomeTypes2["StoneBeach"] = "minecraft:stone_beach";
        MinecraftBiomeTypes2["StonyPeaks"] = "minecraft:stony_peaks";
        MinecraftBiomeTypes2["SunflowerPlains"] = "minecraft:sunflower_plains";
        MinecraftBiomeTypes2["Swampland"] = "minecraft:swampland";
        MinecraftBiomeTypes2["SwamplandMutated"] = "minecraft:swampland_mutated";
        MinecraftBiomeTypes2["Taiga"] = "minecraft:taiga";
        MinecraftBiomeTypes2["TaigaHills"] = "minecraft:taiga_hills";
        MinecraftBiomeTypes2["TaigaMutated"] = "minecraft:taiga_mutated";
        MinecraftBiomeTypes2["TheEnd"] = "minecraft:the_end";
        MinecraftBiomeTypes2["WarmOcean"] = "minecraft:warm_ocean";
        MinecraftBiomeTypes2["WarpedForest"] = "minecraft:warped_forest";
        return MinecraftBiomeTypes2;
    })(MinecraftBiomeTypes || {});
    var MinecraftBlockTypes = (MinecraftBlockTypes2 => {
        MinecraftBlockTypes2["AcaciaButton"] = "minecraft:acacia_button";
        MinecraftBlockTypes2["AcaciaDoor"] = "minecraft:acacia_door";
        MinecraftBlockTypes2["AcaciaDoubleSlab"] = "minecraft:acacia_double_slab";
        MinecraftBlockTypes2["AcaciaFence"] = "minecraft:acacia_fence";
        MinecraftBlockTypes2["AcaciaFenceGate"] = "minecraft:acacia_fence_gate";
        MinecraftBlockTypes2["AcaciaHangingSign"] = "minecraft:acacia_hanging_sign";
        MinecraftBlockTypes2["AcaciaLeaves"] = "minecraft:acacia_leaves";
        MinecraftBlockTypes2["AcaciaLog"] = "minecraft:acacia_log";
        MinecraftBlockTypes2["AcaciaPlanks"] = "minecraft:acacia_planks";
        MinecraftBlockTypes2["AcaciaPressurePlate"] = "minecraft:acacia_pressure_plate";
        MinecraftBlockTypes2["AcaciaSapling"] = "minecraft:acacia_sapling";
        MinecraftBlockTypes2["AcaciaSlab"] = "minecraft:acacia_slab";
        MinecraftBlockTypes2["AcaciaStairs"] = "minecraft:acacia_stairs";
        MinecraftBlockTypes2["AcaciaStandingSign"] = "minecraft:acacia_standing_sign";
        MinecraftBlockTypes2["AcaciaTrapdoor"] = "minecraft:acacia_trapdoor";
        MinecraftBlockTypes2["AcaciaWallSign"] = "minecraft:acacia_wall_sign";
        MinecraftBlockTypes2["AcaciaWood"] = "minecraft:acacia_wood";
        MinecraftBlockTypes2["ActivatorRail"] = "minecraft:activator_rail";
        MinecraftBlockTypes2["Air"] = "minecraft:air";
        MinecraftBlockTypes2["Allium"] = "minecraft:allium";
        MinecraftBlockTypes2["Allow"] = "minecraft:allow";
        MinecraftBlockTypes2["AmethystBlock"] = "minecraft:amethyst_block";
        MinecraftBlockTypes2["AmethystCluster"] = "minecraft:amethyst_cluster";
        MinecraftBlockTypes2["AncientDebris"] = "minecraft:ancient_debris";
        MinecraftBlockTypes2["Andesite"] = "minecraft:andesite";
        MinecraftBlockTypes2["AndesiteDoubleSlab"] = "minecraft:andesite_double_slab";
        MinecraftBlockTypes2["AndesiteSlab"] = "minecraft:andesite_slab";
        MinecraftBlockTypes2["AndesiteStairs"] = "minecraft:andesite_stairs";
        MinecraftBlockTypes2["Anvil"] = "minecraft:anvil";
        MinecraftBlockTypes2["Azalea"] = "minecraft:azalea";
        MinecraftBlockTypes2["AzaleaLeaves"] = "minecraft:azalea_leaves";
        MinecraftBlockTypes2["AzaleaLeavesFlowered"] = "minecraft:azalea_leaves_flowered";
        MinecraftBlockTypes2["AzureBluet"] = "minecraft:azure_bluet";
        MinecraftBlockTypes2["Bamboo"] = "minecraft:bamboo";
        MinecraftBlockTypes2["BambooBlock"] = "minecraft:bamboo_block";
        MinecraftBlockTypes2["BambooButton"] = "minecraft:bamboo_button";
        MinecraftBlockTypes2["BambooDoor"] = "minecraft:bamboo_door";
        MinecraftBlockTypes2["BambooDoubleSlab"] = "minecraft:bamboo_double_slab";
        MinecraftBlockTypes2["BambooFence"] = "minecraft:bamboo_fence";
        MinecraftBlockTypes2["BambooFenceGate"] = "minecraft:bamboo_fence_gate";
        MinecraftBlockTypes2["BambooHangingSign"] = "minecraft:bamboo_hanging_sign";
        MinecraftBlockTypes2["BambooMosaic"] = "minecraft:bamboo_mosaic";
        MinecraftBlockTypes2["BambooMosaicDoubleSlab"] = "minecraft:bamboo_mosaic_double_slab";
        MinecraftBlockTypes2["BambooMosaicSlab"] = "minecraft:bamboo_mosaic_slab";
        MinecraftBlockTypes2["BambooMosaicStairs"] = "minecraft:bamboo_mosaic_stairs";
        MinecraftBlockTypes2["BambooPlanks"] = "minecraft:bamboo_planks";
        MinecraftBlockTypes2["BambooPressurePlate"] = "minecraft:bamboo_pressure_plate";
        MinecraftBlockTypes2["BambooSapling"] = "minecraft:bamboo_sapling";
        MinecraftBlockTypes2["BambooSlab"] = "minecraft:bamboo_slab";
        MinecraftBlockTypes2["BambooStairs"] = "minecraft:bamboo_stairs";
        MinecraftBlockTypes2["BambooStandingSign"] = "minecraft:bamboo_standing_sign";
        MinecraftBlockTypes2["BambooTrapdoor"] = "minecraft:bamboo_trapdoor";
        MinecraftBlockTypes2["BambooWallSign"] = "minecraft:bamboo_wall_sign";
        MinecraftBlockTypes2["Barrel"] = "minecraft:barrel";
        MinecraftBlockTypes2["Barrier"] = "minecraft:barrier";
        MinecraftBlockTypes2["Basalt"] = "minecraft:basalt";
        MinecraftBlockTypes2["Beacon"] = "minecraft:beacon";
        MinecraftBlockTypes2["Bed"] = "minecraft:bed";
        MinecraftBlockTypes2["Bedrock"] = "minecraft:bedrock";
        MinecraftBlockTypes2["BeeNest"] = "minecraft:bee_nest";
        MinecraftBlockTypes2["Beehive"] = "minecraft:beehive";
        MinecraftBlockTypes2["Beetroot"] = "minecraft:beetroot";
        MinecraftBlockTypes2["Bell"] = "minecraft:bell";
        MinecraftBlockTypes2["BigDripleaf"] = "minecraft:big_dripleaf";
        MinecraftBlockTypes2["BirchButton"] = "minecraft:birch_button";
        MinecraftBlockTypes2["BirchDoor"] = "minecraft:birch_door";
        MinecraftBlockTypes2["BirchDoubleSlab"] = "minecraft:birch_double_slab";
        MinecraftBlockTypes2["BirchFence"] = "minecraft:birch_fence";
        MinecraftBlockTypes2["BirchFenceGate"] = "minecraft:birch_fence_gate";
        MinecraftBlockTypes2["BirchHangingSign"] = "minecraft:birch_hanging_sign";
        MinecraftBlockTypes2["BirchLeaves"] = "minecraft:birch_leaves";
        MinecraftBlockTypes2["BirchLog"] = "minecraft:birch_log";
        MinecraftBlockTypes2["BirchPlanks"] = "minecraft:birch_planks";
        MinecraftBlockTypes2["BirchPressurePlate"] = "minecraft:birch_pressure_plate";
        MinecraftBlockTypes2["BirchSapling"] = "minecraft:birch_sapling";
        MinecraftBlockTypes2["BirchSlab"] = "minecraft:birch_slab";
        MinecraftBlockTypes2["BirchStairs"] = "minecraft:birch_stairs";
        MinecraftBlockTypes2["BirchStandingSign"] = "minecraft:birch_standing_sign";
        MinecraftBlockTypes2["BirchTrapdoor"] = "minecraft:birch_trapdoor";
        MinecraftBlockTypes2["BirchWallSign"] = "minecraft:birch_wall_sign";
        MinecraftBlockTypes2["BirchWood"] = "minecraft:birch_wood";
        MinecraftBlockTypes2["BlackCandle"] = "minecraft:black_candle";
        MinecraftBlockTypes2["BlackCandleCake"] = "minecraft:black_candle_cake";
        MinecraftBlockTypes2["BlackCarpet"] = "minecraft:black_carpet";
        MinecraftBlockTypes2["BlackConcrete"] = "minecraft:black_concrete";
        MinecraftBlockTypes2["BlackConcretePowder"] = "minecraft:black_concrete_powder";
        MinecraftBlockTypes2["BlackGlazedTerracotta"] = "minecraft:black_glazed_terracotta";
        MinecraftBlockTypes2["BlackShulkerBox"] = "minecraft:black_shulker_box";
        MinecraftBlockTypes2["BlackStainedGlass"] = "minecraft:black_stained_glass";
        MinecraftBlockTypes2["BlackStainedGlassPane"] = "minecraft:black_stained_glass_pane";
        MinecraftBlockTypes2["BlackTerracotta"] = "minecraft:black_terracotta";
        MinecraftBlockTypes2["BlackWool"] = "minecraft:black_wool";
        MinecraftBlockTypes2["Blackstone"] = "minecraft:blackstone";
        MinecraftBlockTypes2["BlackstoneDoubleSlab"] = "minecraft:blackstone_double_slab";
        MinecraftBlockTypes2["BlackstoneSlab"] = "minecraft:blackstone_slab";
        MinecraftBlockTypes2["BlackstoneStairs"] = "minecraft:blackstone_stairs";
        MinecraftBlockTypes2["BlackstoneWall"] = "minecraft:blackstone_wall";
        MinecraftBlockTypes2["BlastFurnace"] = "minecraft:blast_furnace";
        MinecraftBlockTypes2["BlueCandle"] = "minecraft:blue_candle";
        MinecraftBlockTypes2["BlueCandleCake"] = "minecraft:blue_candle_cake";
        MinecraftBlockTypes2["BlueCarpet"] = "minecraft:blue_carpet";
        MinecraftBlockTypes2["BlueConcrete"] = "minecraft:blue_concrete";
        MinecraftBlockTypes2["BlueConcretePowder"] = "minecraft:blue_concrete_powder";
        MinecraftBlockTypes2["BlueGlazedTerracotta"] = "minecraft:blue_glazed_terracotta";
        MinecraftBlockTypes2["BlueIce"] = "minecraft:blue_ice";
        MinecraftBlockTypes2["BlueOrchid"] = "minecraft:blue_orchid";
        MinecraftBlockTypes2["BlueShulkerBox"] = "minecraft:blue_shulker_box";
        MinecraftBlockTypes2["BlueStainedGlass"] = "minecraft:blue_stained_glass";
        MinecraftBlockTypes2["BlueStainedGlassPane"] = "minecraft:blue_stained_glass_pane";
        MinecraftBlockTypes2["BlueTerracotta"] = "minecraft:blue_terracotta";
        MinecraftBlockTypes2["BlueWool"] = "minecraft:blue_wool";
        MinecraftBlockTypes2["BoneBlock"] = "minecraft:bone_block";
        MinecraftBlockTypes2["Bookshelf"] = "minecraft:bookshelf";
        MinecraftBlockTypes2["BorderBlock"] = "minecraft:border_block";
        MinecraftBlockTypes2["BrainCoral"] = "minecraft:brain_coral";
        MinecraftBlockTypes2["BrainCoralBlock"] = "minecraft:brain_coral_block";
        MinecraftBlockTypes2["BrainCoralFan"] = "minecraft:brain_coral_fan";
        MinecraftBlockTypes2["BrainCoralWallFan"] = "minecraft:brain_coral_wall_fan";
        MinecraftBlockTypes2["BrewingStand"] = "minecraft:brewing_stand";
        MinecraftBlockTypes2["BrickBlock"] = "minecraft:brick_block";
        MinecraftBlockTypes2["BrickDoubleSlab"] = "minecraft:brick_double_slab";
        MinecraftBlockTypes2["BrickSlab"] = "minecraft:brick_slab";
        MinecraftBlockTypes2["BrickStairs"] = "minecraft:brick_stairs";
        MinecraftBlockTypes2["BrownCandle"] = "minecraft:brown_candle";
        MinecraftBlockTypes2["BrownCandleCake"] = "minecraft:brown_candle_cake";
        MinecraftBlockTypes2["BrownCarpet"] = "minecraft:brown_carpet";
        MinecraftBlockTypes2["BrownConcrete"] = "minecraft:brown_concrete";
        MinecraftBlockTypes2["BrownConcretePowder"] = "minecraft:brown_concrete_powder";
        MinecraftBlockTypes2["BrownGlazedTerracotta"] = "minecraft:brown_glazed_terracotta";
        MinecraftBlockTypes2["BrownMushroom"] = "minecraft:brown_mushroom";
        MinecraftBlockTypes2["BrownMushroomBlock"] = "minecraft:brown_mushroom_block";
        MinecraftBlockTypes2["BrownShulkerBox"] = "minecraft:brown_shulker_box";
        MinecraftBlockTypes2["BrownStainedGlass"] = "minecraft:brown_stained_glass";
        MinecraftBlockTypes2["BrownStainedGlassPane"] = "minecraft:brown_stained_glass_pane";
        MinecraftBlockTypes2["BrownTerracotta"] = "minecraft:brown_terracotta";
        MinecraftBlockTypes2["BrownWool"] = "minecraft:brown_wool";
        MinecraftBlockTypes2["BubbleColumn"] = "minecraft:bubble_column";
        MinecraftBlockTypes2["BubbleCoral"] = "minecraft:bubble_coral";
        MinecraftBlockTypes2["BubbleCoralBlock"] = "minecraft:bubble_coral_block";
        MinecraftBlockTypes2["BubbleCoralFan"] = "minecraft:bubble_coral_fan";
        MinecraftBlockTypes2["BubbleCoralWallFan"] = "minecraft:bubble_coral_wall_fan";
        MinecraftBlockTypes2["BuddingAmethyst"] = "minecraft:budding_amethyst";
        MinecraftBlockTypes2["Cactus"] = "minecraft:cactus";
        MinecraftBlockTypes2["Cake"] = "minecraft:cake";
        MinecraftBlockTypes2["Calcite"] = "minecraft:calcite";
        MinecraftBlockTypes2["CalibratedSculkSensor"] = "minecraft:calibrated_sculk_sensor";
        MinecraftBlockTypes2["Camera"] = "minecraft:camera";
        MinecraftBlockTypes2["Campfire"] = "minecraft:campfire";
        MinecraftBlockTypes2["Candle"] = "minecraft:candle";
        MinecraftBlockTypes2["CandleCake"] = "minecraft:candle_cake";
        MinecraftBlockTypes2["Carrots"] = "minecraft:carrots";
        MinecraftBlockTypes2["CartographyTable"] = "minecraft:cartography_table";
        MinecraftBlockTypes2["CarvedPumpkin"] = "minecraft:carved_pumpkin";
        MinecraftBlockTypes2["Cauldron"] = "minecraft:cauldron";
        MinecraftBlockTypes2["CaveVines"] = "minecraft:cave_vines";
        MinecraftBlockTypes2["CaveVinesBodyWithBerries"] = "minecraft:cave_vines_body_with_berries";
        MinecraftBlockTypes2["CaveVinesHeadWithBerries"] = "minecraft:cave_vines_head_with_berries";
        MinecraftBlockTypes2["Chain"] = "minecraft:chain";
        MinecraftBlockTypes2["ChainCommandBlock"] = "minecraft:chain_command_block";
        MinecraftBlockTypes2["ChemicalHeat"] = "minecraft:chemical_heat";
        MinecraftBlockTypes2["ChemistryTable"] = "minecraft:chemistry_table";
        MinecraftBlockTypes2["CherryButton"] = "minecraft:cherry_button";
        MinecraftBlockTypes2["CherryDoor"] = "minecraft:cherry_door";
        MinecraftBlockTypes2["CherryDoubleSlab"] = "minecraft:cherry_double_slab";
        MinecraftBlockTypes2["CherryFence"] = "minecraft:cherry_fence";
        MinecraftBlockTypes2["CherryFenceGate"] = "minecraft:cherry_fence_gate";
        MinecraftBlockTypes2["CherryHangingSign"] = "minecraft:cherry_hanging_sign";
        MinecraftBlockTypes2["CherryLeaves"] = "minecraft:cherry_leaves";
        MinecraftBlockTypes2["CherryLog"] = "minecraft:cherry_log";
        MinecraftBlockTypes2["CherryPlanks"] = "minecraft:cherry_planks";
        MinecraftBlockTypes2["CherryPressurePlate"] = "minecraft:cherry_pressure_plate";
        MinecraftBlockTypes2["CherrySapling"] = "minecraft:cherry_sapling";
        MinecraftBlockTypes2["CherrySlab"] = "minecraft:cherry_slab";
        MinecraftBlockTypes2["CherryStairs"] = "minecraft:cherry_stairs";
        MinecraftBlockTypes2["CherryStandingSign"] = "minecraft:cherry_standing_sign";
        MinecraftBlockTypes2["CherryTrapdoor"] = "minecraft:cherry_trapdoor";
        MinecraftBlockTypes2["CherryWallSign"] = "minecraft:cherry_wall_sign";
        MinecraftBlockTypes2["CherryWood"] = "minecraft:cherry_wood";
        MinecraftBlockTypes2["Chest"] = "minecraft:chest";
        MinecraftBlockTypes2["ChippedAnvil"] = "minecraft:chipped_anvil";
        MinecraftBlockTypes2["ChiseledBookshelf"] = "minecraft:chiseled_bookshelf";
        MinecraftBlockTypes2["ChiseledCopper"] = "minecraft:chiseled_copper";
        MinecraftBlockTypes2["ChiseledDeepslate"] = "minecraft:chiseled_deepslate";
        MinecraftBlockTypes2["ChiseledNetherBricks"] = "minecraft:chiseled_nether_bricks";
        MinecraftBlockTypes2["ChiseledPolishedBlackstone"] = "minecraft:chiseled_polished_blackstone";
        MinecraftBlockTypes2["ChiseledQuartzBlock"] = "minecraft:chiseled_quartz_block";
        MinecraftBlockTypes2["ChiseledRedSandstone"] = "minecraft:chiseled_red_sandstone";
        MinecraftBlockTypes2["ChiseledSandstone"] = "minecraft:chiseled_sandstone";
        MinecraftBlockTypes2["ChiseledStoneBricks"] = "minecraft:chiseled_stone_bricks";
        MinecraftBlockTypes2["ChiseledTuff"] = "minecraft:chiseled_tuff";
        MinecraftBlockTypes2["ChiseledTuffBricks"] = "minecraft:chiseled_tuff_bricks";
        MinecraftBlockTypes2["ChorusFlower"] = "minecraft:chorus_flower";
        MinecraftBlockTypes2["ChorusPlant"] = "minecraft:chorus_plant";
        MinecraftBlockTypes2["Clay"] = "minecraft:clay";
        MinecraftBlockTypes2["ClientRequestPlaceholderBlock"] = "minecraft:client_request_placeholder_block";
        MinecraftBlockTypes2["CoalBlock"] = "minecraft:coal_block";
        MinecraftBlockTypes2["CoalOre"] = "minecraft:coal_ore";
        MinecraftBlockTypes2["CoarseDirt"] = "minecraft:coarse_dirt";
        MinecraftBlockTypes2["CobbledDeepslate"] = "minecraft:cobbled_deepslate";
        MinecraftBlockTypes2["CobbledDeepslateDoubleSlab"] = "minecraft:cobbled_deepslate_double_slab";
        MinecraftBlockTypes2["CobbledDeepslateSlab"] = "minecraft:cobbled_deepslate_slab";
        MinecraftBlockTypes2["CobbledDeepslateStairs"] = "minecraft:cobbled_deepslate_stairs";
        MinecraftBlockTypes2["CobbledDeepslateWall"] = "minecraft:cobbled_deepslate_wall";
        MinecraftBlockTypes2["Cobblestone"] = "minecraft:cobblestone";
        MinecraftBlockTypes2["CobblestoneDoubleSlab"] = "minecraft:cobblestone_double_slab";
        MinecraftBlockTypes2["CobblestoneSlab"] = "minecraft:cobblestone_slab";
        MinecraftBlockTypes2["CobblestoneWall"] = "minecraft:cobblestone_wall";
        MinecraftBlockTypes2["Cocoa"] = "minecraft:cocoa";
        MinecraftBlockTypes2["ColoredTorchBp"] = "minecraft:colored_torch_bp";
        MinecraftBlockTypes2["ColoredTorchRg"] = "minecraft:colored_torch_rg";
        MinecraftBlockTypes2["CommandBlock"] = "minecraft:command_block";
        MinecraftBlockTypes2["Composter"] = "minecraft:composter";
        MinecraftBlockTypes2["Conduit"] = "minecraft:conduit";
        MinecraftBlockTypes2["CopperBlock"] = "minecraft:copper_block";
        MinecraftBlockTypes2["CopperBulb"] = "minecraft:copper_bulb";
        MinecraftBlockTypes2["CopperDoor"] = "minecraft:copper_door";
        MinecraftBlockTypes2["CopperGrate"] = "minecraft:copper_grate";
        MinecraftBlockTypes2["CopperOre"] = "minecraft:copper_ore";
        MinecraftBlockTypes2["CopperTrapdoor"] = "minecraft:copper_trapdoor";
        MinecraftBlockTypes2["Cornflower"] = "minecraft:cornflower";
        MinecraftBlockTypes2["CrackedDeepslateBricks"] = "minecraft:cracked_deepslate_bricks";
        MinecraftBlockTypes2["CrackedDeepslateTiles"] = "minecraft:cracked_deepslate_tiles";
        MinecraftBlockTypes2["CrackedNetherBricks"] = "minecraft:cracked_nether_bricks";
        MinecraftBlockTypes2["CrackedPolishedBlackstoneBricks"] = "minecraft:cracked_polished_blackstone_bricks";
        MinecraftBlockTypes2["CrackedStoneBricks"] = "minecraft:cracked_stone_bricks";
        MinecraftBlockTypes2["Crafter"] = "minecraft:crafter";
        MinecraftBlockTypes2["CraftingTable"] = "minecraft:crafting_table";
        MinecraftBlockTypes2["CrimsonButton"] = "minecraft:crimson_button";
        MinecraftBlockTypes2["CrimsonDoor"] = "minecraft:crimson_door";
        MinecraftBlockTypes2["CrimsonDoubleSlab"] = "minecraft:crimson_double_slab";
        MinecraftBlockTypes2["CrimsonFence"] = "minecraft:crimson_fence";
        MinecraftBlockTypes2["CrimsonFenceGate"] = "minecraft:crimson_fence_gate";
        MinecraftBlockTypes2["CrimsonFungus"] = "minecraft:crimson_fungus";
        MinecraftBlockTypes2["CrimsonHangingSign"] = "minecraft:crimson_hanging_sign";
        MinecraftBlockTypes2["CrimsonHyphae"] = "minecraft:crimson_hyphae";
        MinecraftBlockTypes2["CrimsonNylium"] = "minecraft:crimson_nylium";
        MinecraftBlockTypes2["CrimsonPlanks"] = "minecraft:crimson_planks";
        MinecraftBlockTypes2["CrimsonPressurePlate"] = "minecraft:crimson_pressure_plate";
        MinecraftBlockTypes2["CrimsonRoots"] = "minecraft:crimson_roots";
        MinecraftBlockTypes2["CrimsonSlab"] = "minecraft:crimson_slab";
        MinecraftBlockTypes2["CrimsonStairs"] = "minecraft:crimson_stairs";
        MinecraftBlockTypes2["CrimsonStandingSign"] = "minecraft:crimson_standing_sign";
        MinecraftBlockTypes2["CrimsonStem"] = "minecraft:crimson_stem";
        MinecraftBlockTypes2["CrimsonTrapdoor"] = "minecraft:crimson_trapdoor";
        MinecraftBlockTypes2["CrimsonWallSign"] = "minecraft:crimson_wall_sign";
        MinecraftBlockTypes2["CryingObsidian"] = "minecraft:crying_obsidian";
        MinecraftBlockTypes2["CutCopper"] = "minecraft:cut_copper";
        MinecraftBlockTypes2["CutCopperSlab"] = "minecraft:cut_copper_slab";
        MinecraftBlockTypes2["CutCopperStairs"] = "minecraft:cut_copper_stairs";
        MinecraftBlockTypes2["CutRedSandstone"] = "minecraft:cut_red_sandstone";
        MinecraftBlockTypes2["CutRedSandstoneDoubleSlab"] = "minecraft:cut_red_sandstone_double_slab";
        MinecraftBlockTypes2["CutRedSandstoneSlab"] = "minecraft:cut_red_sandstone_slab";
        MinecraftBlockTypes2["CutSandstone"] = "minecraft:cut_sandstone";
        MinecraftBlockTypes2["CutSandstoneDoubleSlab"] = "minecraft:cut_sandstone_double_slab";
        MinecraftBlockTypes2["CutSandstoneSlab"] = "minecraft:cut_sandstone_slab";
        MinecraftBlockTypes2["CyanCandle"] = "minecraft:cyan_candle";
        MinecraftBlockTypes2["CyanCandleCake"] = "minecraft:cyan_candle_cake";
        MinecraftBlockTypes2["CyanCarpet"] = "minecraft:cyan_carpet";
        MinecraftBlockTypes2["CyanConcrete"] = "minecraft:cyan_concrete";
        MinecraftBlockTypes2["CyanConcretePowder"] = "minecraft:cyan_concrete_powder";
        MinecraftBlockTypes2["CyanGlazedTerracotta"] = "minecraft:cyan_glazed_terracotta";
        MinecraftBlockTypes2["CyanShulkerBox"] = "minecraft:cyan_shulker_box";
        MinecraftBlockTypes2["CyanStainedGlass"] = "minecraft:cyan_stained_glass";
        MinecraftBlockTypes2["CyanStainedGlassPane"] = "minecraft:cyan_stained_glass_pane";
        MinecraftBlockTypes2["CyanTerracotta"] = "minecraft:cyan_terracotta";
        MinecraftBlockTypes2["CyanWool"] = "minecraft:cyan_wool";
        MinecraftBlockTypes2["DamagedAnvil"] = "minecraft:damaged_anvil";
        MinecraftBlockTypes2["Dandelion"] = "minecraft:dandelion";
        MinecraftBlockTypes2["DarkOakButton"] = "minecraft:dark_oak_button";
        MinecraftBlockTypes2["DarkOakDoor"] = "minecraft:dark_oak_door";
        MinecraftBlockTypes2["DarkOakDoubleSlab"] = "minecraft:dark_oak_double_slab";
        MinecraftBlockTypes2["DarkOakFence"] = "minecraft:dark_oak_fence";
        MinecraftBlockTypes2["DarkOakFenceGate"] = "minecraft:dark_oak_fence_gate";
        MinecraftBlockTypes2["DarkOakHangingSign"] = "minecraft:dark_oak_hanging_sign";
        MinecraftBlockTypes2["DarkOakLeaves"] = "minecraft:dark_oak_leaves";
        MinecraftBlockTypes2["DarkOakLog"] = "minecraft:dark_oak_log";
        MinecraftBlockTypes2["DarkOakPlanks"] = "minecraft:dark_oak_planks";
        MinecraftBlockTypes2["DarkOakPressurePlate"] = "minecraft:dark_oak_pressure_plate";
        MinecraftBlockTypes2["DarkOakSapling"] = "minecraft:dark_oak_sapling";
        MinecraftBlockTypes2["DarkOakSlab"] = "minecraft:dark_oak_slab";
        MinecraftBlockTypes2["DarkOakStairs"] = "minecraft:dark_oak_stairs";
        MinecraftBlockTypes2["DarkOakTrapdoor"] = "minecraft:dark_oak_trapdoor";
        MinecraftBlockTypes2["DarkOakWood"] = "minecraft:dark_oak_wood";
        MinecraftBlockTypes2["DarkPrismarine"] = "minecraft:dark_prismarine";
        MinecraftBlockTypes2["DarkPrismarineDoubleSlab"] = "minecraft:dark_prismarine_double_slab";
        MinecraftBlockTypes2["DarkPrismarineSlab"] = "minecraft:dark_prismarine_slab";
        MinecraftBlockTypes2["DarkPrismarineStairs"] = "minecraft:dark_prismarine_stairs";
        MinecraftBlockTypes2["DarkoakStandingSign"] = "minecraft:darkoak_standing_sign";
        MinecraftBlockTypes2["DarkoakWallSign"] = "minecraft:darkoak_wall_sign";
        MinecraftBlockTypes2["DaylightDetector"] = "minecraft:daylight_detector";
        MinecraftBlockTypes2["DaylightDetectorInverted"] = "minecraft:daylight_detector_inverted";
        MinecraftBlockTypes2["DeadBrainCoral"] = "minecraft:dead_brain_coral";
        MinecraftBlockTypes2["DeadBrainCoralBlock"] = "minecraft:dead_brain_coral_block";
        MinecraftBlockTypes2["DeadBrainCoralFan"] = "minecraft:dead_brain_coral_fan";
        MinecraftBlockTypes2["DeadBrainCoralWallFan"] = "minecraft:dead_brain_coral_wall_fan";
        MinecraftBlockTypes2["DeadBubbleCoral"] = "minecraft:dead_bubble_coral";
        MinecraftBlockTypes2["DeadBubbleCoralBlock"] = "minecraft:dead_bubble_coral_block";
        MinecraftBlockTypes2["DeadBubbleCoralFan"] = "minecraft:dead_bubble_coral_fan";
        MinecraftBlockTypes2["DeadBubbleCoralWallFan"] = "minecraft:dead_bubble_coral_wall_fan";
        MinecraftBlockTypes2["DeadFireCoral"] = "minecraft:dead_fire_coral";
        MinecraftBlockTypes2["DeadFireCoralBlock"] = "minecraft:dead_fire_coral_block";
        MinecraftBlockTypes2["DeadFireCoralFan"] = "minecraft:dead_fire_coral_fan";
        MinecraftBlockTypes2["DeadFireCoralWallFan"] = "minecraft:dead_fire_coral_wall_fan";
        MinecraftBlockTypes2["DeadHornCoral"] = "minecraft:dead_horn_coral";
        MinecraftBlockTypes2["DeadHornCoralBlock"] = "minecraft:dead_horn_coral_block";
        MinecraftBlockTypes2["DeadHornCoralFan"] = "minecraft:dead_horn_coral_fan";
        MinecraftBlockTypes2["DeadHornCoralWallFan"] = "minecraft:dead_horn_coral_wall_fan";
        MinecraftBlockTypes2["DeadTubeCoral"] = "minecraft:dead_tube_coral";
        MinecraftBlockTypes2["DeadTubeCoralBlock"] = "minecraft:dead_tube_coral_block";
        MinecraftBlockTypes2["DeadTubeCoralFan"] = "minecraft:dead_tube_coral_fan";
        MinecraftBlockTypes2["DeadTubeCoralWallFan"] = "minecraft:dead_tube_coral_wall_fan";
        MinecraftBlockTypes2["Deadbush"] = "minecraft:deadbush";
        MinecraftBlockTypes2["DecoratedPot"] = "minecraft:decorated_pot";
        MinecraftBlockTypes2["Deepslate"] = "minecraft:deepslate";
        MinecraftBlockTypes2["DeepslateBrickDoubleSlab"] = "minecraft:deepslate_brick_double_slab";
        MinecraftBlockTypes2["DeepslateBrickSlab"] = "minecraft:deepslate_brick_slab";
        MinecraftBlockTypes2["DeepslateBrickStairs"] = "minecraft:deepslate_brick_stairs";
        MinecraftBlockTypes2["DeepslateBrickWall"] = "minecraft:deepslate_brick_wall";
        MinecraftBlockTypes2["DeepslateBricks"] = "minecraft:deepslate_bricks";
        MinecraftBlockTypes2["DeepslateCoalOre"] = "minecraft:deepslate_coal_ore";
        MinecraftBlockTypes2["DeepslateCopperOre"] = "minecraft:deepslate_copper_ore";
        MinecraftBlockTypes2["DeepslateDiamondOre"] = "minecraft:deepslate_diamond_ore";
        MinecraftBlockTypes2["DeepslateEmeraldOre"] = "minecraft:deepslate_emerald_ore";
        MinecraftBlockTypes2["DeepslateGoldOre"] = "minecraft:deepslate_gold_ore";
        MinecraftBlockTypes2["DeepslateIronOre"] = "minecraft:deepslate_iron_ore";
        MinecraftBlockTypes2["DeepslateLapisOre"] = "minecraft:deepslate_lapis_ore";
        MinecraftBlockTypes2["DeepslateRedstoneOre"] = "minecraft:deepslate_redstone_ore";
        MinecraftBlockTypes2["DeepslateTileDoubleSlab"] = "minecraft:deepslate_tile_double_slab";
        MinecraftBlockTypes2["DeepslateTileSlab"] = "minecraft:deepslate_tile_slab";
        MinecraftBlockTypes2["DeepslateTileStairs"] = "minecraft:deepslate_tile_stairs";
        MinecraftBlockTypes2["DeepslateTileWall"] = "minecraft:deepslate_tile_wall";
        MinecraftBlockTypes2["DeepslateTiles"] = "minecraft:deepslate_tiles";
        MinecraftBlockTypes2["Deny"] = "minecraft:deny";
        MinecraftBlockTypes2["DeprecatedAnvil"] = "minecraft:deprecated_anvil";
        MinecraftBlockTypes2["DetectorRail"] = "minecraft:detector_rail";
        MinecraftBlockTypes2["DiamondBlock"] = "minecraft:diamond_block";
        MinecraftBlockTypes2["DiamondOre"] = "minecraft:diamond_ore";
        MinecraftBlockTypes2["Diorite"] = "minecraft:diorite";
        MinecraftBlockTypes2["DioriteDoubleSlab"] = "minecraft:diorite_double_slab";
        MinecraftBlockTypes2["DioriteSlab"] = "minecraft:diorite_slab";
        MinecraftBlockTypes2["DioriteStairs"] = "minecraft:diorite_stairs";
        MinecraftBlockTypes2["Dirt"] = "minecraft:dirt";
        MinecraftBlockTypes2["DirtWithRoots"] = "minecraft:dirt_with_roots";
        MinecraftBlockTypes2["Dispenser"] = "minecraft:dispenser";
        MinecraftBlockTypes2["DoubleCutCopperSlab"] = "minecraft:double_cut_copper_slab";
        MinecraftBlockTypes2["DragonEgg"] = "minecraft:dragon_egg";
        MinecraftBlockTypes2["DriedKelpBlock"] = "minecraft:dried_kelp_block";
        MinecraftBlockTypes2["DripstoneBlock"] = "minecraft:dripstone_block";
        MinecraftBlockTypes2["Dropper"] = "minecraft:dropper";
        MinecraftBlockTypes2["Element0"] = "minecraft:element_0";
        MinecraftBlockTypes2["Element1"] = "minecraft:element_1";
        MinecraftBlockTypes2["Element10"] = "minecraft:element_10";
        MinecraftBlockTypes2["Element100"] = "minecraft:element_100";
        MinecraftBlockTypes2["Element101"] = "minecraft:element_101";
        MinecraftBlockTypes2["Element102"] = "minecraft:element_102";
        MinecraftBlockTypes2["Element103"] = "minecraft:element_103";
        MinecraftBlockTypes2["Element104"] = "minecraft:element_104";
        MinecraftBlockTypes2["Element105"] = "minecraft:element_105";
        MinecraftBlockTypes2["Element106"] = "minecraft:element_106";
        MinecraftBlockTypes2["Element107"] = "minecraft:element_107";
        MinecraftBlockTypes2["Element108"] = "minecraft:element_108";
        MinecraftBlockTypes2["Element109"] = "minecraft:element_109";
        MinecraftBlockTypes2["Element11"] = "minecraft:element_11";
        MinecraftBlockTypes2["Element110"] = "minecraft:element_110";
        MinecraftBlockTypes2["Element111"] = "minecraft:element_111";
        MinecraftBlockTypes2["Element112"] = "minecraft:element_112";
        MinecraftBlockTypes2["Element113"] = "minecraft:element_113";
        MinecraftBlockTypes2["Element114"] = "minecraft:element_114";
        MinecraftBlockTypes2["Element115"] = "minecraft:element_115";
        MinecraftBlockTypes2["Element116"] = "minecraft:element_116";
        MinecraftBlockTypes2["Element117"] = "minecraft:element_117";
        MinecraftBlockTypes2["Element118"] = "minecraft:element_118";
        MinecraftBlockTypes2["Element12"] = "minecraft:element_12";
        MinecraftBlockTypes2["Element13"] = "minecraft:element_13";
        MinecraftBlockTypes2["Element14"] = "minecraft:element_14";
        MinecraftBlockTypes2["Element15"] = "minecraft:element_15";
        MinecraftBlockTypes2["Element16"] = "minecraft:element_16";
        MinecraftBlockTypes2["Element17"] = "minecraft:element_17";
        MinecraftBlockTypes2["Element18"] = "minecraft:element_18";
        MinecraftBlockTypes2["Element19"] = "minecraft:element_19";
        MinecraftBlockTypes2["Element2"] = "minecraft:element_2";
        MinecraftBlockTypes2["Element20"] = "minecraft:element_20";
        MinecraftBlockTypes2["Element21"] = "minecraft:element_21";
        MinecraftBlockTypes2["Element22"] = "minecraft:element_22";
        MinecraftBlockTypes2["Element23"] = "minecraft:element_23";
        MinecraftBlockTypes2["Element24"] = "minecraft:element_24";
        MinecraftBlockTypes2["Element25"] = "minecraft:element_25";
        MinecraftBlockTypes2["Element26"] = "minecraft:element_26";
        MinecraftBlockTypes2["Element27"] = "minecraft:element_27";
        MinecraftBlockTypes2["Element28"] = "minecraft:element_28";
        MinecraftBlockTypes2["Element29"] = "minecraft:element_29";
        MinecraftBlockTypes2["Element3"] = "minecraft:element_3";
        MinecraftBlockTypes2["Element30"] = "minecraft:element_30";
        MinecraftBlockTypes2["Element31"] = "minecraft:element_31";
        MinecraftBlockTypes2["Element32"] = "minecraft:element_32";
        MinecraftBlockTypes2["Element33"] = "minecraft:element_33";
        MinecraftBlockTypes2["Element34"] = "minecraft:element_34";
        MinecraftBlockTypes2["Element35"] = "minecraft:element_35";
        MinecraftBlockTypes2["Element36"] = "minecraft:element_36";
        MinecraftBlockTypes2["Element37"] = "minecraft:element_37";
        MinecraftBlockTypes2["Element38"] = "minecraft:element_38";
        MinecraftBlockTypes2["Element39"] = "minecraft:element_39";
        MinecraftBlockTypes2["Element4"] = "minecraft:element_4";
        MinecraftBlockTypes2["Element40"] = "minecraft:element_40";
        MinecraftBlockTypes2["Element41"] = "minecraft:element_41";
        MinecraftBlockTypes2["Element42"] = "minecraft:element_42";
        MinecraftBlockTypes2["Element43"] = "minecraft:element_43";
        MinecraftBlockTypes2["Element44"] = "minecraft:element_44";
        MinecraftBlockTypes2["Element45"] = "minecraft:element_45";
        MinecraftBlockTypes2["Element46"] = "minecraft:element_46";
        MinecraftBlockTypes2["Element47"] = "minecraft:element_47";
        MinecraftBlockTypes2["Element48"] = "minecraft:element_48";
        MinecraftBlockTypes2["Element49"] = "minecraft:element_49";
        MinecraftBlockTypes2["Element5"] = "minecraft:element_5";
        MinecraftBlockTypes2["Element50"] = "minecraft:element_50";
        MinecraftBlockTypes2["Element51"] = "minecraft:element_51";
        MinecraftBlockTypes2["Element52"] = "minecraft:element_52";
        MinecraftBlockTypes2["Element53"] = "minecraft:element_53";
        MinecraftBlockTypes2["Element54"] = "minecraft:element_54";
        MinecraftBlockTypes2["Element55"] = "minecraft:element_55";
        MinecraftBlockTypes2["Element56"] = "minecraft:element_56";
        MinecraftBlockTypes2["Element57"] = "minecraft:element_57";
        MinecraftBlockTypes2["Element58"] = "minecraft:element_58";
        MinecraftBlockTypes2["Element59"] = "minecraft:element_59";
        MinecraftBlockTypes2["Element6"] = "minecraft:element_6";
        MinecraftBlockTypes2["Element60"] = "minecraft:element_60";
        MinecraftBlockTypes2["Element61"] = "minecraft:element_61";
        MinecraftBlockTypes2["Element62"] = "minecraft:element_62";
        MinecraftBlockTypes2["Element63"] = "minecraft:element_63";
        MinecraftBlockTypes2["Element64"] = "minecraft:element_64";
        MinecraftBlockTypes2["Element65"] = "minecraft:element_65";
        MinecraftBlockTypes2["Element66"] = "minecraft:element_66";
        MinecraftBlockTypes2["Element67"] = "minecraft:element_67";
        MinecraftBlockTypes2["Element68"] = "minecraft:element_68";
        MinecraftBlockTypes2["Element69"] = "minecraft:element_69";
        MinecraftBlockTypes2["Element7"] = "minecraft:element_7";
        MinecraftBlockTypes2["Element70"] = "minecraft:element_70";
        MinecraftBlockTypes2["Element71"] = "minecraft:element_71";
        MinecraftBlockTypes2["Element72"] = "minecraft:element_72";
        MinecraftBlockTypes2["Element73"] = "minecraft:element_73";
        MinecraftBlockTypes2["Element74"] = "minecraft:element_74";
        MinecraftBlockTypes2["Element75"] = "minecraft:element_75";
        MinecraftBlockTypes2["Element76"] = "minecraft:element_76";
        MinecraftBlockTypes2["Element77"] = "minecraft:element_77";
        MinecraftBlockTypes2["Element78"] = "minecraft:element_78";
        MinecraftBlockTypes2["Element79"] = "minecraft:element_79";
        MinecraftBlockTypes2["Element8"] = "minecraft:element_8";
        MinecraftBlockTypes2["Element80"] = "minecraft:element_80";
        MinecraftBlockTypes2["Element81"] = "minecraft:element_81";
        MinecraftBlockTypes2["Element82"] = "minecraft:element_82";
        MinecraftBlockTypes2["Element83"] = "minecraft:element_83";
        MinecraftBlockTypes2["Element84"] = "minecraft:element_84";
        MinecraftBlockTypes2["Element85"] = "minecraft:element_85";
        MinecraftBlockTypes2["Element86"] = "minecraft:element_86";
        MinecraftBlockTypes2["Element87"] = "minecraft:element_87";
        MinecraftBlockTypes2["Element88"] = "minecraft:element_88";
        MinecraftBlockTypes2["Element89"] = "minecraft:element_89";
        MinecraftBlockTypes2["Element9"] = "minecraft:element_9";
        MinecraftBlockTypes2["Element90"] = "minecraft:element_90";
        MinecraftBlockTypes2["Element91"] = "minecraft:element_91";
        MinecraftBlockTypes2["Element92"] = "minecraft:element_92";
        MinecraftBlockTypes2["Element93"] = "minecraft:element_93";
        MinecraftBlockTypes2["Element94"] = "minecraft:element_94";
        MinecraftBlockTypes2["Element95"] = "minecraft:element_95";
        MinecraftBlockTypes2["Element96"] = "minecraft:element_96";
        MinecraftBlockTypes2["Element97"] = "minecraft:element_97";
        MinecraftBlockTypes2["Element98"] = "minecraft:element_98";
        MinecraftBlockTypes2["Element99"] = "minecraft:element_99";
        MinecraftBlockTypes2["EmeraldBlock"] = "minecraft:emerald_block";
        MinecraftBlockTypes2["EmeraldOre"] = "minecraft:emerald_ore";
        MinecraftBlockTypes2["EnchantingTable"] = "minecraft:enchanting_table";
        MinecraftBlockTypes2["EndBrickStairs"] = "minecraft:end_brick_stairs";
        MinecraftBlockTypes2["EndBricks"] = "minecraft:end_bricks";
        MinecraftBlockTypes2["EndGateway"] = "minecraft:end_gateway";
        MinecraftBlockTypes2["EndPortal"] = "minecraft:end_portal";
        MinecraftBlockTypes2["EndPortalFrame"] = "minecraft:end_portal_frame";
        MinecraftBlockTypes2["EndRod"] = "minecraft:end_rod";
        MinecraftBlockTypes2["EndStone"] = "minecraft:end_stone";
        MinecraftBlockTypes2["EndStoneBrickDoubleSlab"] = "minecraft:end_stone_brick_double_slab";
        MinecraftBlockTypes2["EndStoneBrickSlab"] = "minecraft:end_stone_brick_slab";
        MinecraftBlockTypes2["EnderChest"] = "minecraft:ender_chest";
        MinecraftBlockTypes2["ExposedChiseledCopper"] = "minecraft:exposed_chiseled_copper";
        MinecraftBlockTypes2["ExposedCopper"] = "minecraft:exposed_copper";
        MinecraftBlockTypes2["ExposedCopperBulb"] = "minecraft:exposed_copper_bulb";
        MinecraftBlockTypes2["ExposedCopperDoor"] = "minecraft:exposed_copper_door";
        MinecraftBlockTypes2["ExposedCopperGrate"] = "minecraft:exposed_copper_grate";
        MinecraftBlockTypes2["ExposedCopperTrapdoor"] = "minecraft:exposed_copper_trapdoor";
        MinecraftBlockTypes2["ExposedCutCopper"] = "minecraft:exposed_cut_copper";
        MinecraftBlockTypes2["ExposedCutCopperSlab"] = "minecraft:exposed_cut_copper_slab";
        MinecraftBlockTypes2["ExposedCutCopperStairs"] = "minecraft:exposed_cut_copper_stairs";
        MinecraftBlockTypes2["ExposedDoubleCutCopperSlab"] = "minecraft:exposed_double_cut_copper_slab";
        MinecraftBlockTypes2["Farmland"] = "minecraft:farmland";
        MinecraftBlockTypes2["FenceGate"] = "minecraft:fence_gate";
        MinecraftBlockTypes2["Fern"] = "minecraft:fern";
        MinecraftBlockTypes2["Fire"] = "minecraft:fire";
        MinecraftBlockTypes2["FireCoral"] = "minecraft:fire_coral";
        MinecraftBlockTypes2["FireCoralBlock"] = "minecraft:fire_coral_block";
        MinecraftBlockTypes2["FireCoralFan"] = "minecraft:fire_coral_fan";
        MinecraftBlockTypes2["FireCoralWallFan"] = "minecraft:fire_coral_wall_fan";
        MinecraftBlockTypes2["FletchingTable"] = "minecraft:fletching_table";
        MinecraftBlockTypes2["FlowerPot"] = "minecraft:flower_pot";
        MinecraftBlockTypes2["FloweringAzalea"] = "minecraft:flowering_azalea";
        MinecraftBlockTypes2["FlowingLava"] = "minecraft:flowing_lava";
        MinecraftBlockTypes2["FlowingWater"] = "minecraft:flowing_water";
        MinecraftBlockTypes2["Frame"] = "minecraft:frame";
        MinecraftBlockTypes2["FrogSpawn"] = "minecraft:frog_spawn";
        MinecraftBlockTypes2["FrostedIce"] = "minecraft:frosted_ice";
        MinecraftBlockTypes2["Furnace"] = "minecraft:furnace";
        MinecraftBlockTypes2["GildedBlackstone"] = "minecraft:gilded_blackstone";
        MinecraftBlockTypes2["Glass"] = "minecraft:glass";
        MinecraftBlockTypes2["GlassPane"] = "minecraft:glass_pane";
        MinecraftBlockTypes2["GlowFrame"] = "minecraft:glow_frame";
        MinecraftBlockTypes2["GlowLichen"] = "minecraft:glow_lichen";
        MinecraftBlockTypes2["Glowingobsidian"] = "minecraft:glowingobsidian";
        MinecraftBlockTypes2["Glowstone"] = "minecraft:glowstone";
        MinecraftBlockTypes2["GoldBlock"] = "minecraft:gold_block";
        MinecraftBlockTypes2["GoldOre"] = "minecraft:gold_ore";
        MinecraftBlockTypes2["GoldenRail"] = "minecraft:golden_rail";
        MinecraftBlockTypes2["Granite"] = "minecraft:granite";
        MinecraftBlockTypes2["GraniteDoubleSlab"] = "minecraft:granite_double_slab";
        MinecraftBlockTypes2["GraniteSlab"] = "minecraft:granite_slab";
        MinecraftBlockTypes2["GraniteStairs"] = "minecraft:granite_stairs";
        MinecraftBlockTypes2["GrassBlock"] = "minecraft:grass_block";
        MinecraftBlockTypes2["GrassPath"] = "minecraft:grass_path";
        MinecraftBlockTypes2["Gravel"] = "minecraft:gravel";
        MinecraftBlockTypes2["GrayCandle"] = "minecraft:gray_candle";
        MinecraftBlockTypes2["GrayCandleCake"] = "minecraft:gray_candle_cake";
        MinecraftBlockTypes2["GrayCarpet"] = "minecraft:gray_carpet";
        MinecraftBlockTypes2["GrayConcrete"] = "minecraft:gray_concrete";
        MinecraftBlockTypes2["GrayConcretePowder"] = "minecraft:gray_concrete_powder";
        MinecraftBlockTypes2["GrayGlazedTerracotta"] = "minecraft:gray_glazed_terracotta";
        MinecraftBlockTypes2["GrayShulkerBox"] = "minecraft:gray_shulker_box";
        MinecraftBlockTypes2["GrayStainedGlass"] = "minecraft:gray_stained_glass";
        MinecraftBlockTypes2["GrayStainedGlassPane"] = "minecraft:gray_stained_glass_pane";
        MinecraftBlockTypes2["GrayTerracotta"] = "minecraft:gray_terracotta";
        MinecraftBlockTypes2["GrayWool"] = "minecraft:gray_wool";
        MinecraftBlockTypes2["GreenCandle"] = "minecraft:green_candle";
        MinecraftBlockTypes2["GreenCandleCake"] = "minecraft:green_candle_cake";
        MinecraftBlockTypes2["GreenCarpet"] = "minecraft:green_carpet";
        MinecraftBlockTypes2["GreenConcrete"] = "minecraft:green_concrete";
        MinecraftBlockTypes2["GreenConcretePowder"] = "minecraft:green_concrete_powder";
        MinecraftBlockTypes2["GreenGlazedTerracotta"] = "minecraft:green_glazed_terracotta";
        MinecraftBlockTypes2["GreenShulkerBox"] = "minecraft:green_shulker_box";
        MinecraftBlockTypes2["GreenStainedGlass"] = "minecraft:green_stained_glass";
        MinecraftBlockTypes2["GreenStainedGlassPane"] = "minecraft:green_stained_glass_pane";
        MinecraftBlockTypes2["GreenTerracotta"] = "minecraft:green_terracotta";
        MinecraftBlockTypes2["GreenWool"] = "minecraft:green_wool";
        MinecraftBlockTypes2["Grindstone"] = "minecraft:grindstone";
        MinecraftBlockTypes2["HangingRoots"] = "minecraft:hanging_roots";
        MinecraftBlockTypes2["HardBlackStainedGlass"] = "minecraft:hard_black_stained_glass";
        MinecraftBlockTypes2["HardBlackStainedGlassPane"] = "minecraft:hard_black_stained_glass_pane";
        MinecraftBlockTypes2["HardBlueStainedGlass"] = "minecraft:hard_blue_stained_glass";
        MinecraftBlockTypes2["HardBlueStainedGlassPane"] = "minecraft:hard_blue_stained_glass_pane";
        MinecraftBlockTypes2["HardBrownStainedGlass"] = "minecraft:hard_brown_stained_glass";
        MinecraftBlockTypes2["HardBrownStainedGlassPane"] = "minecraft:hard_brown_stained_glass_pane";
        MinecraftBlockTypes2["HardCyanStainedGlass"] = "minecraft:hard_cyan_stained_glass";
        MinecraftBlockTypes2["HardCyanStainedGlassPane"] = "minecraft:hard_cyan_stained_glass_pane";
        MinecraftBlockTypes2["HardGlass"] = "minecraft:hard_glass";
        MinecraftBlockTypes2["HardGlassPane"] = "minecraft:hard_glass_pane";
        MinecraftBlockTypes2["HardGrayStainedGlass"] = "minecraft:hard_gray_stained_glass";
        MinecraftBlockTypes2["HardGrayStainedGlassPane"] = "minecraft:hard_gray_stained_glass_pane";
        MinecraftBlockTypes2["HardGreenStainedGlass"] = "minecraft:hard_green_stained_glass";
        MinecraftBlockTypes2["HardGreenStainedGlassPane"] = "minecraft:hard_green_stained_glass_pane";
        MinecraftBlockTypes2["HardLightBlueStainedGlass"] = "minecraft:hard_light_blue_stained_glass";
        MinecraftBlockTypes2["HardLightBlueStainedGlassPane"] = "minecraft:hard_light_blue_stained_glass_pane";
        MinecraftBlockTypes2["HardLightGrayStainedGlass"] = "minecraft:hard_light_gray_stained_glass";
        MinecraftBlockTypes2["HardLightGrayStainedGlassPane"] = "minecraft:hard_light_gray_stained_glass_pane";
        MinecraftBlockTypes2["HardLimeStainedGlass"] = "minecraft:hard_lime_stained_glass";
        MinecraftBlockTypes2["HardLimeStainedGlassPane"] = "minecraft:hard_lime_stained_glass_pane";
        MinecraftBlockTypes2["HardMagentaStainedGlass"] = "minecraft:hard_magenta_stained_glass";
        MinecraftBlockTypes2["HardMagentaStainedGlassPane"] = "minecraft:hard_magenta_stained_glass_pane";
        MinecraftBlockTypes2["HardOrangeStainedGlass"] = "minecraft:hard_orange_stained_glass";
        MinecraftBlockTypes2["HardOrangeStainedGlassPane"] = "minecraft:hard_orange_stained_glass_pane";
        MinecraftBlockTypes2["HardPinkStainedGlass"] = "minecraft:hard_pink_stained_glass";
        MinecraftBlockTypes2["HardPinkStainedGlassPane"] = "minecraft:hard_pink_stained_glass_pane";
        MinecraftBlockTypes2["HardPurpleStainedGlass"] = "minecraft:hard_purple_stained_glass";
        MinecraftBlockTypes2["HardPurpleStainedGlassPane"] = "minecraft:hard_purple_stained_glass_pane";
        MinecraftBlockTypes2["HardRedStainedGlass"] = "minecraft:hard_red_stained_glass";
        MinecraftBlockTypes2["HardRedStainedGlassPane"] = "minecraft:hard_red_stained_glass_pane";
        MinecraftBlockTypes2["HardWhiteStainedGlass"] = "minecraft:hard_white_stained_glass";
        MinecraftBlockTypes2["HardWhiteStainedGlassPane"] = "minecraft:hard_white_stained_glass_pane";
        MinecraftBlockTypes2["HardYellowStainedGlass"] = "minecraft:hard_yellow_stained_glass";
        MinecraftBlockTypes2["HardYellowStainedGlassPane"] = "minecraft:hard_yellow_stained_glass_pane";
        MinecraftBlockTypes2["HardenedClay"] = "minecraft:hardened_clay";
        MinecraftBlockTypes2["HayBlock"] = "minecraft:hay_block";
        MinecraftBlockTypes2["HeavyCore"] = "minecraft:heavy_core";
        MinecraftBlockTypes2["HeavyWeightedPressurePlate"] = "minecraft:heavy_weighted_pressure_plate";
        MinecraftBlockTypes2["HoneyBlock"] = "minecraft:honey_block";
        MinecraftBlockTypes2["HoneycombBlock"] = "minecraft:honeycomb_block";
        MinecraftBlockTypes2["Hopper"] = "minecraft:hopper";
        MinecraftBlockTypes2["HornCoral"] = "minecraft:horn_coral";
        MinecraftBlockTypes2["HornCoralBlock"] = "minecraft:horn_coral_block";
        MinecraftBlockTypes2["HornCoralFan"] = "minecraft:horn_coral_fan";
        MinecraftBlockTypes2["HornCoralWallFan"] = "minecraft:horn_coral_wall_fan";
        MinecraftBlockTypes2["Ice"] = "minecraft:ice";
        MinecraftBlockTypes2["InfestedChiseledStoneBricks"] = "minecraft:infested_chiseled_stone_bricks";
        MinecraftBlockTypes2["InfestedCobblestone"] = "minecraft:infested_cobblestone";
        MinecraftBlockTypes2["InfestedCrackedStoneBricks"] = "minecraft:infested_cracked_stone_bricks";
        MinecraftBlockTypes2["InfestedDeepslate"] = "minecraft:infested_deepslate";
        MinecraftBlockTypes2["InfestedMossyStoneBricks"] = "minecraft:infested_mossy_stone_bricks";
        MinecraftBlockTypes2["InfestedStone"] = "minecraft:infested_stone";
        MinecraftBlockTypes2["InfestedStoneBricks"] = "minecraft:infested_stone_bricks";
        MinecraftBlockTypes2["InfoUpdate"] = "minecraft:info_update";
        MinecraftBlockTypes2["InfoUpdate2"] = "minecraft:info_update2";
        MinecraftBlockTypes2["InvisibleBedrock"] = "minecraft:invisible_bedrock";
        MinecraftBlockTypes2["IronBars"] = "minecraft:iron_bars";
        MinecraftBlockTypes2["IronBlock"] = "minecraft:iron_block";
        MinecraftBlockTypes2["IronDoor"] = "minecraft:iron_door";
        MinecraftBlockTypes2["IronOre"] = "minecraft:iron_ore";
        MinecraftBlockTypes2["IronTrapdoor"] = "minecraft:iron_trapdoor";
        MinecraftBlockTypes2["Jigsaw"] = "minecraft:jigsaw";
        MinecraftBlockTypes2["Jukebox"] = "minecraft:jukebox";
        MinecraftBlockTypes2["JungleButton"] = "minecraft:jungle_button";
        MinecraftBlockTypes2["JungleDoor"] = "minecraft:jungle_door";
        MinecraftBlockTypes2["JungleDoubleSlab"] = "minecraft:jungle_double_slab";
        MinecraftBlockTypes2["JungleFence"] = "minecraft:jungle_fence";
        MinecraftBlockTypes2["JungleFenceGate"] = "minecraft:jungle_fence_gate";
        MinecraftBlockTypes2["JungleHangingSign"] = "minecraft:jungle_hanging_sign";
        MinecraftBlockTypes2["JungleLeaves"] = "minecraft:jungle_leaves";
        MinecraftBlockTypes2["JungleLog"] = "minecraft:jungle_log";
        MinecraftBlockTypes2["JunglePlanks"] = "minecraft:jungle_planks";
        MinecraftBlockTypes2["JunglePressurePlate"] = "minecraft:jungle_pressure_plate";
        MinecraftBlockTypes2["JungleSapling"] = "minecraft:jungle_sapling";
        MinecraftBlockTypes2["JungleSlab"] = "minecraft:jungle_slab";
        MinecraftBlockTypes2["JungleStairs"] = "minecraft:jungle_stairs";
        MinecraftBlockTypes2["JungleStandingSign"] = "minecraft:jungle_standing_sign";
        MinecraftBlockTypes2["JungleTrapdoor"] = "minecraft:jungle_trapdoor";
        MinecraftBlockTypes2["JungleWallSign"] = "minecraft:jungle_wall_sign";
        MinecraftBlockTypes2["JungleWood"] = "minecraft:jungle_wood";
        MinecraftBlockTypes2["Kelp"] = "minecraft:kelp";
        MinecraftBlockTypes2["Ladder"] = "minecraft:ladder";
        MinecraftBlockTypes2["Lantern"] = "minecraft:lantern";
        MinecraftBlockTypes2["LapisBlock"] = "minecraft:lapis_block";
        MinecraftBlockTypes2["LapisOre"] = "minecraft:lapis_ore";
        MinecraftBlockTypes2["LargeAmethystBud"] = "minecraft:large_amethyst_bud";
        MinecraftBlockTypes2["LargeFern"] = "minecraft:large_fern";
        MinecraftBlockTypes2["Lava"] = "minecraft:lava";
        MinecraftBlockTypes2["Lectern"] = "minecraft:lectern";
        MinecraftBlockTypes2["Lever"] = "minecraft:lever";
        MinecraftBlockTypes2["LightBlock0"] = "minecraft:light_block_0";
        MinecraftBlockTypes2["LightBlock1"] = "minecraft:light_block_1";
        MinecraftBlockTypes2["LightBlock10"] = "minecraft:light_block_10";
        MinecraftBlockTypes2["LightBlock11"] = "minecraft:light_block_11";
        MinecraftBlockTypes2["LightBlock12"] = "minecraft:light_block_12";
        MinecraftBlockTypes2["LightBlock13"] = "minecraft:light_block_13";
        MinecraftBlockTypes2["LightBlock14"] = "minecraft:light_block_14";
        MinecraftBlockTypes2["LightBlock15"] = "minecraft:light_block_15";
        MinecraftBlockTypes2["LightBlock2"] = "minecraft:light_block_2";
        MinecraftBlockTypes2["LightBlock3"] = "minecraft:light_block_3";
        MinecraftBlockTypes2["LightBlock4"] = "minecraft:light_block_4";
        MinecraftBlockTypes2["LightBlock5"] = "minecraft:light_block_5";
        MinecraftBlockTypes2["LightBlock6"] = "minecraft:light_block_6";
        MinecraftBlockTypes2["LightBlock7"] = "minecraft:light_block_7";
        MinecraftBlockTypes2["LightBlock8"] = "minecraft:light_block_8";
        MinecraftBlockTypes2["LightBlock9"] = "minecraft:light_block_9";
        MinecraftBlockTypes2["LightBlueCandle"] = "minecraft:light_blue_candle";
        MinecraftBlockTypes2["LightBlueCandleCake"] = "minecraft:light_blue_candle_cake";
        MinecraftBlockTypes2["LightBlueCarpet"] = "minecraft:light_blue_carpet";
        MinecraftBlockTypes2["LightBlueConcrete"] = "minecraft:light_blue_concrete";
        MinecraftBlockTypes2["LightBlueConcretePowder"] = "minecraft:light_blue_concrete_powder";
        MinecraftBlockTypes2["LightBlueGlazedTerracotta"] = "minecraft:light_blue_glazed_terracotta";
        MinecraftBlockTypes2["LightBlueShulkerBox"] = "minecraft:light_blue_shulker_box";
        MinecraftBlockTypes2["LightBlueStainedGlass"] = "minecraft:light_blue_stained_glass";
        MinecraftBlockTypes2["LightBlueStainedGlassPane"] = "minecraft:light_blue_stained_glass_pane";
        MinecraftBlockTypes2["LightBlueTerracotta"] = "minecraft:light_blue_terracotta";
        MinecraftBlockTypes2["LightBlueWool"] = "minecraft:light_blue_wool";
        MinecraftBlockTypes2["LightGrayCandle"] = "minecraft:light_gray_candle";
        MinecraftBlockTypes2["LightGrayCandleCake"] = "minecraft:light_gray_candle_cake";
        MinecraftBlockTypes2["LightGrayCarpet"] = "minecraft:light_gray_carpet";
        MinecraftBlockTypes2["LightGrayConcrete"] = "minecraft:light_gray_concrete";
        MinecraftBlockTypes2["LightGrayConcretePowder"] = "minecraft:light_gray_concrete_powder";
        MinecraftBlockTypes2["LightGrayShulkerBox"] = "minecraft:light_gray_shulker_box";
        MinecraftBlockTypes2["LightGrayStainedGlass"] = "minecraft:light_gray_stained_glass";
        MinecraftBlockTypes2["LightGrayStainedGlassPane"] = "minecraft:light_gray_stained_glass_pane";
        MinecraftBlockTypes2["LightGrayTerracotta"] = "minecraft:light_gray_terracotta";
        MinecraftBlockTypes2["LightGrayWool"] = "minecraft:light_gray_wool";
        MinecraftBlockTypes2["LightWeightedPressurePlate"] = "minecraft:light_weighted_pressure_plate";
        MinecraftBlockTypes2["LightningRod"] = "minecraft:lightning_rod";
        MinecraftBlockTypes2["Lilac"] = "minecraft:lilac";
        MinecraftBlockTypes2["LilyOfTheValley"] = "minecraft:lily_of_the_valley";
        MinecraftBlockTypes2["LimeCandle"] = "minecraft:lime_candle";
        MinecraftBlockTypes2["LimeCandleCake"] = "minecraft:lime_candle_cake";
        MinecraftBlockTypes2["LimeCarpet"] = "minecraft:lime_carpet";
        MinecraftBlockTypes2["LimeConcrete"] = "minecraft:lime_concrete";
        MinecraftBlockTypes2["LimeConcretePowder"] = "minecraft:lime_concrete_powder";
        MinecraftBlockTypes2["LimeGlazedTerracotta"] = "minecraft:lime_glazed_terracotta";
        MinecraftBlockTypes2["LimeShulkerBox"] = "minecraft:lime_shulker_box";
        MinecraftBlockTypes2["LimeStainedGlass"] = "minecraft:lime_stained_glass";
        MinecraftBlockTypes2["LimeStainedGlassPane"] = "minecraft:lime_stained_glass_pane";
        MinecraftBlockTypes2["LimeTerracotta"] = "minecraft:lime_terracotta";
        MinecraftBlockTypes2["LimeWool"] = "minecraft:lime_wool";
        MinecraftBlockTypes2["LitBlastFurnace"] = "minecraft:lit_blast_furnace";
        MinecraftBlockTypes2["LitDeepslateRedstoneOre"] = "minecraft:lit_deepslate_redstone_ore";
        MinecraftBlockTypes2["LitFurnace"] = "minecraft:lit_furnace";
        MinecraftBlockTypes2["LitPumpkin"] = "minecraft:lit_pumpkin";
        MinecraftBlockTypes2["LitRedstoneLamp"] = "minecraft:lit_redstone_lamp";
        MinecraftBlockTypes2["LitRedstoneOre"] = "minecraft:lit_redstone_ore";
        MinecraftBlockTypes2["LitSmoker"] = "minecraft:lit_smoker";
        MinecraftBlockTypes2["Lodestone"] = "minecraft:lodestone";
        MinecraftBlockTypes2["Loom"] = "minecraft:loom";
        MinecraftBlockTypes2["MagentaCandle"] = "minecraft:magenta_candle";
        MinecraftBlockTypes2["MagentaCandleCake"] = "minecraft:magenta_candle_cake";
        MinecraftBlockTypes2["MagentaCarpet"] = "minecraft:magenta_carpet";
        MinecraftBlockTypes2["MagentaConcrete"] = "minecraft:magenta_concrete";
        MinecraftBlockTypes2["MagentaConcretePowder"] = "minecraft:magenta_concrete_powder";
        MinecraftBlockTypes2["MagentaGlazedTerracotta"] = "minecraft:magenta_glazed_terracotta";
        MinecraftBlockTypes2["MagentaShulkerBox"] = "minecraft:magenta_shulker_box";
        MinecraftBlockTypes2["MagentaStainedGlass"] = "minecraft:magenta_stained_glass";
        MinecraftBlockTypes2["MagentaStainedGlassPane"] = "minecraft:magenta_stained_glass_pane";
        MinecraftBlockTypes2["MagentaTerracotta"] = "minecraft:magenta_terracotta";
        MinecraftBlockTypes2["MagentaWool"] = "minecraft:magenta_wool";
        MinecraftBlockTypes2["Magma"] = "minecraft:magma";
        MinecraftBlockTypes2["MangroveButton"] = "minecraft:mangrove_button";
        MinecraftBlockTypes2["MangroveDoor"] = "minecraft:mangrove_door";
        MinecraftBlockTypes2["MangroveDoubleSlab"] = "minecraft:mangrove_double_slab";
        MinecraftBlockTypes2["MangroveFence"] = "minecraft:mangrove_fence";
        MinecraftBlockTypes2["MangroveFenceGate"] = "minecraft:mangrove_fence_gate";
        MinecraftBlockTypes2["MangroveHangingSign"] = "minecraft:mangrove_hanging_sign";
        MinecraftBlockTypes2["MangroveLeaves"] = "minecraft:mangrove_leaves";
        MinecraftBlockTypes2["MangroveLog"] = "minecraft:mangrove_log";
        MinecraftBlockTypes2["MangrovePlanks"] = "minecraft:mangrove_planks";
        MinecraftBlockTypes2["MangrovePressurePlate"] = "minecraft:mangrove_pressure_plate";
        MinecraftBlockTypes2["MangrovePropagule"] = "minecraft:mangrove_propagule";
        MinecraftBlockTypes2["MangroveRoots"] = "minecraft:mangrove_roots";
        MinecraftBlockTypes2["MangroveSlab"] = "minecraft:mangrove_slab";
        MinecraftBlockTypes2["MangroveStairs"] = "minecraft:mangrove_stairs";
        MinecraftBlockTypes2["MangroveStandingSign"] = "minecraft:mangrove_standing_sign";
        MinecraftBlockTypes2["MangroveTrapdoor"] = "minecraft:mangrove_trapdoor";
        MinecraftBlockTypes2["MangroveWallSign"] = "minecraft:mangrove_wall_sign";
        MinecraftBlockTypes2["MangroveWood"] = "minecraft:mangrove_wood";
        MinecraftBlockTypes2["MediumAmethystBud"] = "minecraft:medium_amethyst_bud";
        MinecraftBlockTypes2["MelonBlock"] = "minecraft:melon_block";
        MinecraftBlockTypes2["MelonStem"] = "minecraft:melon_stem";
        MinecraftBlockTypes2["MobSpawner"] = "minecraft:mob_spawner";
        MinecraftBlockTypes2["MossBlock"] = "minecraft:moss_block";
        MinecraftBlockTypes2["MossCarpet"] = "minecraft:moss_carpet";
        MinecraftBlockTypes2["MossyCobblestone"] = "minecraft:mossy_cobblestone";
        MinecraftBlockTypes2["MossyCobblestoneDoubleSlab"] = "minecraft:mossy_cobblestone_double_slab";
        MinecraftBlockTypes2["MossyCobblestoneSlab"] = "minecraft:mossy_cobblestone_slab";
        MinecraftBlockTypes2["MossyCobblestoneStairs"] = "minecraft:mossy_cobblestone_stairs";
        MinecraftBlockTypes2["MossyStoneBrickDoubleSlab"] = "minecraft:mossy_stone_brick_double_slab";
        MinecraftBlockTypes2["MossyStoneBrickSlab"] = "minecraft:mossy_stone_brick_slab";
        MinecraftBlockTypes2["MossyStoneBrickStairs"] = "minecraft:mossy_stone_brick_stairs";
        MinecraftBlockTypes2["MossyStoneBricks"] = "minecraft:mossy_stone_bricks";
        MinecraftBlockTypes2["MovingBlock"] = "minecraft:moving_block";
        MinecraftBlockTypes2["Mud"] = "minecraft:mud";
        MinecraftBlockTypes2["MudBrickDoubleSlab"] = "minecraft:mud_brick_double_slab";
        MinecraftBlockTypes2["MudBrickSlab"] = "minecraft:mud_brick_slab";
        MinecraftBlockTypes2["MudBrickStairs"] = "minecraft:mud_brick_stairs";
        MinecraftBlockTypes2["MudBrickWall"] = "minecraft:mud_brick_wall";
        MinecraftBlockTypes2["MudBricks"] = "minecraft:mud_bricks";
        MinecraftBlockTypes2["MuddyMangroveRoots"] = "minecraft:muddy_mangrove_roots";
        MinecraftBlockTypes2["Mycelium"] = "minecraft:mycelium";
        MinecraftBlockTypes2["NetherBrick"] = "minecraft:nether_brick";
        MinecraftBlockTypes2["NetherBrickDoubleSlab"] = "minecraft:nether_brick_double_slab";
        MinecraftBlockTypes2["NetherBrickFence"] = "minecraft:nether_brick_fence";
        MinecraftBlockTypes2["NetherBrickSlab"] = "minecraft:nether_brick_slab";
        MinecraftBlockTypes2["NetherBrickStairs"] = "minecraft:nether_brick_stairs";
        MinecraftBlockTypes2["NetherGoldOre"] = "minecraft:nether_gold_ore";
        MinecraftBlockTypes2["NetherSprouts"] = "minecraft:nether_sprouts";
        MinecraftBlockTypes2["NetherWart"] = "minecraft:nether_wart";
        MinecraftBlockTypes2["NetherWartBlock"] = "minecraft:nether_wart_block";
        MinecraftBlockTypes2["NetheriteBlock"] = "minecraft:netherite_block";
        MinecraftBlockTypes2["Netherrack"] = "minecraft:netherrack";
        MinecraftBlockTypes2["Netherreactor"] = "minecraft:netherreactor";
        MinecraftBlockTypes2["NormalStoneDoubleSlab"] = "minecraft:normal_stone_double_slab";
        MinecraftBlockTypes2["NormalStoneSlab"] = "minecraft:normal_stone_slab";
        MinecraftBlockTypes2["NormalStoneStairs"] = "minecraft:normal_stone_stairs";
        MinecraftBlockTypes2["Noteblock"] = "minecraft:noteblock";
        MinecraftBlockTypes2["OakDoubleSlab"] = "minecraft:oak_double_slab";
        MinecraftBlockTypes2["OakFence"] = "minecraft:oak_fence";
        MinecraftBlockTypes2["OakHangingSign"] = "minecraft:oak_hanging_sign";
        MinecraftBlockTypes2["OakLeaves"] = "minecraft:oak_leaves";
        MinecraftBlockTypes2["OakLog"] = "minecraft:oak_log";
        MinecraftBlockTypes2["OakPlanks"] = "minecraft:oak_planks";
        MinecraftBlockTypes2["OakSapling"] = "minecraft:oak_sapling";
        MinecraftBlockTypes2["OakSlab"] = "minecraft:oak_slab";
        MinecraftBlockTypes2["OakStairs"] = "minecraft:oak_stairs";
        MinecraftBlockTypes2["OakWood"] = "minecraft:oak_wood";
        MinecraftBlockTypes2["Observer"] = "minecraft:observer";
        MinecraftBlockTypes2["Obsidian"] = "minecraft:obsidian";
        MinecraftBlockTypes2["OchreFroglight"] = "minecraft:ochre_froglight";
        MinecraftBlockTypes2["OrangeCandle"] = "minecraft:orange_candle";
        MinecraftBlockTypes2["OrangeCandleCake"] = "minecraft:orange_candle_cake";
        MinecraftBlockTypes2["OrangeCarpet"] = "minecraft:orange_carpet";
        MinecraftBlockTypes2["OrangeConcrete"] = "minecraft:orange_concrete";
        MinecraftBlockTypes2["OrangeConcretePowder"] = "minecraft:orange_concrete_powder";
        MinecraftBlockTypes2["OrangeGlazedTerracotta"] = "minecraft:orange_glazed_terracotta";
        MinecraftBlockTypes2["OrangeShulkerBox"] = "minecraft:orange_shulker_box";
        MinecraftBlockTypes2["OrangeStainedGlass"] = "minecraft:orange_stained_glass";
        MinecraftBlockTypes2["OrangeStainedGlassPane"] = "minecraft:orange_stained_glass_pane";
        MinecraftBlockTypes2["OrangeTerracotta"] = "minecraft:orange_terracotta";
        MinecraftBlockTypes2["OrangeTulip"] = "minecraft:orange_tulip";
        MinecraftBlockTypes2["OrangeWool"] = "minecraft:orange_wool";
        MinecraftBlockTypes2["OxeyeDaisy"] = "minecraft:oxeye_daisy";
        MinecraftBlockTypes2["OxidizedChiseledCopper"] = "minecraft:oxidized_chiseled_copper";
        MinecraftBlockTypes2["OxidizedCopper"] = "minecraft:oxidized_copper";
        MinecraftBlockTypes2["OxidizedCopperBulb"] = "minecraft:oxidized_copper_bulb";
        MinecraftBlockTypes2["OxidizedCopperDoor"] = "minecraft:oxidized_copper_door";
        MinecraftBlockTypes2["OxidizedCopperGrate"] = "minecraft:oxidized_copper_grate";
        MinecraftBlockTypes2["OxidizedCopperTrapdoor"] = "minecraft:oxidized_copper_trapdoor";
        MinecraftBlockTypes2["OxidizedCutCopper"] = "minecraft:oxidized_cut_copper";
        MinecraftBlockTypes2["OxidizedCutCopperSlab"] = "minecraft:oxidized_cut_copper_slab";
        MinecraftBlockTypes2["OxidizedCutCopperStairs"] = "minecraft:oxidized_cut_copper_stairs";
        MinecraftBlockTypes2["OxidizedDoubleCutCopperSlab"] = "minecraft:oxidized_double_cut_copper_slab";
        MinecraftBlockTypes2["PackedIce"] = "minecraft:packed_ice";
        MinecraftBlockTypes2["PackedMud"] = "minecraft:packed_mud";
        MinecraftBlockTypes2["PearlescentFroglight"] = "minecraft:pearlescent_froglight";
        MinecraftBlockTypes2["Peony"] = "minecraft:peony";
        MinecraftBlockTypes2["PetrifiedOakDoubleSlab"] = "minecraft:petrified_oak_double_slab";
        MinecraftBlockTypes2["PetrifiedOakSlab"] = "minecraft:petrified_oak_slab";
        MinecraftBlockTypes2["PinkCandle"] = "minecraft:pink_candle";
        MinecraftBlockTypes2["PinkCandleCake"] = "minecraft:pink_candle_cake";
        MinecraftBlockTypes2["PinkCarpet"] = "minecraft:pink_carpet";
        MinecraftBlockTypes2["PinkConcrete"] = "minecraft:pink_concrete";
        MinecraftBlockTypes2["PinkConcretePowder"] = "minecraft:pink_concrete_powder";
        MinecraftBlockTypes2["PinkGlazedTerracotta"] = "minecraft:pink_glazed_terracotta";
        MinecraftBlockTypes2["PinkPetals"] = "minecraft:pink_petals";
        MinecraftBlockTypes2["PinkShulkerBox"] = "minecraft:pink_shulker_box";
        MinecraftBlockTypes2["PinkStainedGlass"] = "minecraft:pink_stained_glass";
        MinecraftBlockTypes2["PinkStainedGlassPane"] = "minecraft:pink_stained_glass_pane";
        MinecraftBlockTypes2["PinkTerracotta"] = "minecraft:pink_terracotta";
        MinecraftBlockTypes2["PinkTulip"] = "minecraft:pink_tulip";
        MinecraftBlockTypes2["PinkWool"] = "minecraft:pink_wool";
        MinecraftBlockTypes2["Piston"] = "minecraft:piston";
        MinecraftBlockTypes2["PistonArmCollision"] = "minecraft:piston_arm_collision";
        MinecraftBlockTypes2["PitcherCrop"] = "minecraft:pitcher_crop";
        MinecraftBlockTypes2["PitcherPlant"] = "minecraft:pitcher_plant";
        MinecraftBlockTypes2["Podzol"] = "minecraft:podzol";
        MinecraftBlockTypes2["PointedDripstone"] = "minecraft:pointed_dripstone";
        MinecraftBlockTypes2["PolishedAndesite"] = "minecraft:polished_andesite";
        MinecraftBlockTypes2["PolishedAndesiteDoubleSlab"] = "minecraft:polished_andesite_double_slab";
        MinecraftBlockTypes2["PolishedAndesiteSlab"] = "minecraft:polished_andesite_slab";
        MinecraftBlockTypes2["PolishedAndesiteStairs"] = "minecraft:polished_andesite_stairs";
        MinecraftBlockTypes2["PolishedBasalt"] = "minecraft:polished_basalt";
        MinecraftBlockTypes2["PolishedBlackstone"] = "minecraft:polished_blackstone";
        MinecraftBlockTypes2["PolishedBlackstoneBrickDoubleSlab"] = "minecraft:polished_blackstone_brick_double_slab";
        MinecraftBlockTypes2["PolishedBlackstoneBrickSlab"] = "minecraft:polished_blackstone_brick_slab";
        MinecraftBlockTypes2["PolishedBlackstoneBrickStairs"] = "minecraft:polished_blackstone_brick_stairs";
        MinecraftBlockTypes2["PolishedBlackstoneBrickWall"] = "minecraft:polished_blackstone_brick_wall";
        MinecraftBlockTypes2["PolishedBlackstoneBricks"] = "minecraft:polished_blackstone_bricks";
        MinecraftBlockTypes2["PolishedBlackstoneButton"] = "minecraft:polished_blackstone_button";
        MinecraftBlockTypes2["PolishedBlackstoneDoubleSlab"] = "minecraft:polished_blackstone_double_slab";
        MinecraftBlockTypes2["PolishedBlackstonePressurePlate"] = "minecraft:polished_blackstone_pressure_plate";
        MinecraftBlockTypes2["PolishedBlackstoneSlab"] = "minecraft:polished_blackstone_slab";
        MinecraftBlockTypes2["PolishedBlackstoneStairs"] = "minecraft:polished_blackstone_stairs";
        MinecraftBlockTypes2["PolishedBlackstoneWall"] = "minecraft:polished_blackstone_wall";
        MinecraftBlockTypes2["PolishedDeepslate"] = "minecraft:polished_deepslate";
        MinecraftBlockTypes2["PolishedDeepslateDoubleSlab"] = "minecraft:polished_deepslate_double_slab";
        MinecraftBlockTypes2["PolishedDeepslateSlab"] = "minecraft:polished_deepslate_slab";
        MinecraftBlockTypes2["PolishedDeepslateStairs"] = "minecraft:polished_deepslate_stairs";
        MinecraftBlockTypes2["PolishedDeepslateWall"] = "minecraft:polished_deepslate_wall";
        MinecraftBlockTypes2["PolishedDiorite"] = "minecraft:polished_diorite";
        MinecraftBlockTypes2["PolishedDioriteDoubleSlab"] = "minecraft:polished_diorite_double_slab";
        MinecraftBlockTypes2["PolishedDioriteSlab"] = "minecraft:polished_diorite_slab";
        MinecraftBlockTypes2["PolishedDioriteStairs"] = "minecraft:polished_diorite_stairs";
        MinecraftBlockTypes2["PolishedGranite"] = "minecraft:polished_granite";
        MinecraftBlockTypes2["PolishedGraniteDoubleSlab"] = "minecraft:polished_granite_double_slab";
        MinecraftBlockTypes2["PolishedGraniteSlab"] = "minecraft:polished_granite_slab";
        MinecraftBlockTypes2["PolishedGraniteStairs"] = "minecraft:polished_granite_stairs";
        MinecraftBlockTypes2["PolishedTuff"] = "minecraft:polished_tuff";
        MinecraftBlockTypes2["PolishedTuffDoubleSlab"] = "minecraft:polished_tuff_double_slab";
        MinecraftBlockTypes2["PolishedTuffSlab"] = "minecraft:polished_tuff_slab";
        MinecraftBlockTypes2["PolishedTuffStairs"] = "minecraft:polished_tuff_stairs";
        MinecraftBlockTypes2["PolishedTuffWall"] = "minecraft:polished_tuff_wall";
        MinecraftBlockTypes2["Poppy"] = "minecraft:poppy";
        MinecraftBlockTypes2["Portal"] = "minecraft:portal";
        MinecraftBlockTypes2["Potatoes"] = "minecraft:potatoes";
        MinecraftBlockTypes2["PowderSnow"] = "minecraft:powder_snow";
        MinecraftBlockTypes2["PoweredComparator"] = "minecraft:powered_comparator";
        MinecraftBlockTypes2["PoweredRepeater"] = "minecraft:powered_repeater";
        MinecraftBlockTypes2["Prismarine"] = "minecraft:prismarine";
        MinecraftBlockTypes2["PrismarineBrickDoubleSlab"] = "minecraft:prismarine_brick_double_slab";
        MinecraftBlockTypes2["PrismarineBrickSlab"] = "minecraft:prismarine_brick_slab";
        MinecraftBlockTypes2["PrismarineBricks"] = "minecraft:prismarine_bricks";
        MinecraftBlockTypes2["PrismarineBricksStairs"] = "minecraft:prismarine_bricks_stairs";
        MinecraftBlockTypes2["PrismarineDoubleSlab"] = "minecraft:prismarine_double_slab";
        MinecraftBlockTypes2["PrismarineSlab"] = "minecraft:prismarine_slab";
        MinecraftBlockTypes2["PrismarineStairs"] = "minecraft:prismarine_stairs";
        MinecraftBlockTypes2["Pumpkin"] = "minecraft:pumpkin";
        MinecraftBlockTypes2["PumpkinStem"] = "minecraft:pumpkin_stem";
        MinecraftBlockTypes2["PurpleCandle"] = "minecraft:purple_candle";
        MinecraftBlockTypes2["PurpleCandleCake"] = "minecraft:purple_candle_cake";
        MinecraftBlockTypes2["PurpleCarpet"] = "minecraft:purple_carpet";
        MinecraftBlockTypes2["PurpleConcrete"] = "minecraft:purple_concrete";
        MinecraftBlockTypes2["PurpleConcretePowder"] = "minecraft:purple_concrete_powder";
        MinecraftBlockTypes2["PurpleGlazedTerracotta"] = "minecraft:purple_glazed_terracotta";
        MinecraftBlockTypes2["PurpleShulkerBox"] = "minecraft:purple_shulker_box";
        MinecraftBlockTypes2["PurpleStainedGlass"] = "minecraft:purple_stained_glass";
        MinecraftBlockTypes2["PurpleStainedGlassPane"] = "minecraft:purple_stained_glass_pane";
        MinecraftBlockTypes2["PurpleTerracotta"] = "minecraft:purple_terracotta";
        MinecraftBlockTypes2["PurpleWool"] = "minecraft:purple_wool";
        MinecraftBlockTypes2["PurpurBlock"] = "minecraft:purpur_block";
        MinecraftBlockTypes2["PurpurDoubleSlab"] = "minecraft:purpur_double_slab";
        MinecraftBlockTypes2["PurpurSlab"] = "minecraft:purpur_slab";
        MinecraftBlockTypes2["PurpurStairs"] = "minecraft:purpur_stairs";
        MinecraftBlockTypes2["QuartzBlock"] = "minecraft:quartz_block";
        MinecraftBlockTypes2["QuartzBricks"] = "minecraft:quartz_bricks";
        MinecraftBlockTypes2["QuartzDoubleSlab"] = "minecraft:quartz_double_slab";
        MinecraftBlockTypes2["QuartzOre"] = "minecraft:quartz_ore";
        MinecraftBlockTypes2["QuartzPillar"] = "minecraft:quartz_pillar";
        MinecraftBlockTypes2["QuartzSlab"] = "minecraft:quartz_slab";
        MinecraftBlockTypes2["QuartzStairs"] = "minecraft:quartz_stairs";
        MinecraftBlockTypes2["Rail"] = "minecraft:rail";
        MinecraftBlockTypes2["RawCopperBlock"] = "minecraft:raw_copper_block";
        MinecraftBlockTypes2["RawGoldBlock"] = "minecraft:raw_gold_block";
        MinecraftBlockTypes2["RawIronBlock"] = "minecraft:raw_iron_block";
        MinecraftBlockTypes2["RedCandle"] = "minecraft:red_candle";
        MinecraftBlockTypes2["RedCandleCake"] = "minecraft:red_candle_cake";
        MinecraftBlockTypes2["RedCarpet"] = "minecraft:red_carpet";
        MinecraftBlockTypes2["RedConcrete"] = "minecraft:red_concrete";
        MinecraftBlockTypes2["RedConcretePowder"] = "minecraft:red_concrete_powder";
        MinecraftBlockTypes2["RedGlazedTerracotta"] = "minecraft:red_glazed_terracotta";
        MinecraftBlockTypes2["RedMushroom"] = "minecraft:red_mushroom";
        MinecraftBlockTypes2["RedMushroomBlock"] = "minecraft:red_mushroom_block";
        MinecraftBlockTypes2["RedNetherBrick"] = "minecraft:red_nether_brick";
        MinecraftBlockTypes2["RedNetherBrickDoubleSlab"] = "minecraft:red_nether_brick_double_slab";
        MinecraftBlockTypes2["RedNetherBrickSlab"] = "minecraft:red_nether_brick_slab";
        MinecraftBlockTypes2["RedNetherBrickStairs"] = "minecraft:red_nether_brick_stairs";
        MinecraftBlockTypes2["RedSand"] = "minecraft:red_sand";
        MinecraftBlockTypes2["RedSandstone"] = "minecraft:red_sandstone";
        MinecraftBlockTypes2["RedSandstoneDoubleSlab"] = "minecraft:red_sandstone_double_slab";
        MinecraftBlockTypes2["RedSandstoneSlab"] = "minecraft:red_sandstone_slab";
        MinecraftBlockTypes2["RedSandstoneStairs"] = "minecraft:red_sandstone_stairs";
        MinecraftBlockTypes2["RedShulkerBox"] = "minecraft:red_shulker_box";
        MinecraftBlockTypes2["RedStainedGlass"] = "minecraft:red_stained_glass";
        MinecraftBlockTypes2["RedStainedGlassPane"] = "minecraft:red_stained_glass_pane";
        MinecraftBlockTypes2["RedTerracotta"] = "minecraft:red_terracotta";
        MinecraftBlockTypes2["RedTulip"] = "minecraft:red_tulip";
        MinecraftBlockTypes2["RedWool"] = "minecraft:red_wool";
        MinecraftBlockTypes2["RedstoneBlock"] = "minecraft:redstone_block";
        MinecraftBlockTypes2["RedstoneLamp"] = "minecraft:redstone_lamp";
        MinecraftBlockTypes2["RedstoneOre"] = "minecraft:redstone_ore";
        MinecraftBlockTypes2["RedstoneTorch"] = "minecraft:redstone_torch";
        MinecraftBlockTypes2["RedstoneWire"] = "minecraft:redstone_wire";
        MinecraftBlockTypes2["Reeds"] = "minecraft:reeds";
        MinecraftBlockTypes2["ReinforcedDeepslate"] = "minecraft:reinforced_deepslate";
        MinecraftBlockTypes2["RepeatingCommandBlock"] = "minecraft:repeating_command_block";
        MinecraftBlockTypes2["Reserved6"] = "minecraft:reserved6";
        MinecraftBlockTypes2["RespawnAnchor"] = "minecraft:respawn_anchor";
        MinecraftBlockTypes2["RoseBush"] = "minecraft:rose_bush";
        MinecraftBlockTypes2["Sand"] = "minecraft:sand";
        MinecraftBlockTypes2["Sandstone"] = "minecraft:sandstone";
        MinecraftBlockTypes2["SandstoneDoubleSlab"] = "minecraft:sandstone_double_slab";
        MinecraftBlockTypes2["SandstoneSlab"] = "minecraft:sandstone_slab";
        MinecraftBlockTypes2["SandstoneStairs"] = "minecraft:sandstone_stairs";
        MinecraftBlockTypes2["Scaffolding"] = "minecraft:scaffolding";
        MinecraftBlockTypes2["Sculk"] = "minecraft:sculk";
        MinecraftBlockTypes2["SculkCatalyst"] = "minecraft:sculk_catalyst";
        MinecraftBlockTypes2["SculkSensor"] = "minecraft:sculk_sensor";
        MinecraftBlockTypes2["SculkShrieker"] = "minecraft:sculk_shrieker";
        MinecraftBlockTypes2["SculkVein"] = "minecraft:sculk_vein";
        MinecraftBlockTypes2["SeaLantern"] = "minecraft:sea_lantern";
        MinecraftBlockTypes2["SeaPickle"] = "minecraft:sea_pickle";
        MinecraftBlockTypes2["Seagrass"] = "minecraft:seagrass";
        MinecraftBlockTypes2["ShortGrass"] = "minecraft:short_grass";
        MinecraftBlockTypes2["Shroomlight"] = "minecraft:shroomlight";
        MinecraftBlockTypes2["SilverGlazedTerracotta"] = "minecraft:silver_glazed_terracotta";
        MinecraftBlockTypes2["Skull"] = "minecraft:skull";
        MinecraftBlockTypes2["Slime"] = "minecraft:slime";
        MinecraftBlockTypes2["SmallAmethystBud"] = "minecraft:small_amethyst_bud";
        MinecraftBlockTypes2["SmallDripleafBlock"] = "minecraft:small_dripleaf_block";
        MinecraftBlockTypes2["SmithingTable"] = "minecraft:smithing_table";
        MinecraftBlockTypes2["Smoker"] = "minecraft:smoker";
        MinecraftBlockTypes2["SmoothBasalt"] = "minecraft:smooth_basalt";
        MinecraftBlockTypes2["SmoothQuartz"] = "minecraft:smooth_quartz";
        MinecraftBlockTypes2["SmoothQuartzDoubleSlab"] = "minecraft:smooth_quartz_double_slab";
        MinecraftBlockTypes2["SmoothQuartzSlab"] = "minecraft:smooth_quartz_slab";
        MinecraftBlockTypes2["SmoothQuartzStairs"] = "minecraft:smooth_quartz_stairs";
        MinecraftBlockTypes2["SmoothRedSandstone"] = "minecraft:smooth_red_sandstone";
        MinecraftBlockTypes2["SmoothRedSandstoneDoubleSlab"] = "minecraft:smooth_red_sandstone_double_slab";
        MinecraftBlockTypes2["SmoothRedSandstoneSlab"] = "minecraft:smooth_red_sandstone_slab";
        MinecraftBlockTypes2["SmoothRedSandstoneStairs"] = "minecraft:smooth_red_sandstone_stairs";
        MinecraftBlockTypes2["SmoothSandstone"] = "minecraft:smooth_sandstone";
        MinecraftBlockTypes2["SmoothSandstoneDoubleSlab"] = "minecraft:smooth_sandstone_double_slab";
        MinecraftBlockTypes2["SmoothSandstoneSlab"] = "minecraft:smooth_sandstone_slab";
        MinecraftBlockTypes2["SmoothSandstoneStairs"] = "minecraft:smooth_sandstone_stairs";
        MinecraftBlockTypes2["SmoothStone"] = "minecraft:smooth_stone";
        MinecraftBlockTypes2["SmoothStoneDoubleSlab"] = "minecraft:smooth_stone_double_slab";
        MinecraftBlockTypes2["SmoothStoneSlab"] = "minecraft:smooth_stone_slab";
        MinecraftBlockTypes2["SnifferEgg"] = "minecraft:sniffer_egg";
        MinecraftBlockTypes2["Snow"] = "minecraft:snow";
        MinecraftBlockTypes2["SnowLayer"] = "minecraft:snow_layer";
        MinecraftBlockTypes2["SoulCampfire"] = "minecraft:soul_campfire";
        MinecraftBlockTypes2["SoulFire"] = "minecraft:soul_fire";
        MinecraftBlockTypes2["SoulLantern"] = "minecraft:soul_lantern";
        MinecraftBlockTypes2["SoulSand"] = "minecraft:soul_sand";
        MinecraftBlockTypes2["SoulSoil"] = "minecraft:soul_soil";
        MinecraftBlockTypes2["SoulTorch"] = "minecraft:soul_torch";
        MinecraftBlockTypes2["Sponge"] = "minecraft:sponge";
        MinecraftBlockTypes2["SporeBlossom"] = "minecraft:spore_blossom";
        MinecraftBlockTypes2["SpruceButton"] = "minecraft:spruce_button";
        MinecraftBlockTypes2["SpruceDoor"] = "minecraft:spruce_door";
        MinecraftBlockTypes2["SpruceDoubleSlab"] = "minecraft:spruce_double_slab";
        MinecraftBlockTypes2["SpruceFence"] = "minecraft:spruce_fence";
        MinecraftBlockTypes2["SpruceFenceGate"] = "minecraft:spruce_fence_gate";
        MinecraftBlockTypes2["SpruceHangingSign"] = "minecraft:spruce_hanging_sign";
        MinecraftBlockTypes2["SpruceLeaves"] = "minecraft:spruce_leaves";
        MinecraftBlockTypes2["SpruceLog"] = "minecraft:spruce_log";
        MinecraftBlockTypes2["SprucePlanks"] = "minecraft:spruce_planks";
        MinecraftBlockTypes2["SprucePressurePlate"] = "minecraft:spruce_pressure_plate";
        MinecraftBlockTypes2["SpruceSapling"] = "minecraft:spruce_sapling";
        MinecraftBlockTypes2["SpruceSlab"] = "minecraft:spruce_slab";
        MinecraftBlockTypes2["SpruceStairs"] = "minecraft:spruce_stairs";
        MinecraftBlockTypes2["SpruceStandingSign"] = "minecraft:spruce_standing_sign";
        MinecraftBlockTypes2["SpruceTrapdoor"] = "minecraft:spruce_trapdoor";
        MinecraftBlockTypes2["SpruceWallSign"] = "minecraft:spruce_wall_sign";
        MinecraftBlockTypes2["SpruceWood"] = "minecraft:spruce_wood";
        MinecraftBlockTypes2["StandingBanner"] = "minecraft:standing_banner";
        MinecraftBlockTypes2["StandingSign"] = "minecraft:standing_sign";
        MinecraftBlockTypes2["StickyPiston"] = "minecraft:sticky_piston";
        MinecraftBlockTypes2["StickyPistonArmCollision"] = "minecraft:sticky_piston_arm_collision";
        MinecraftBlockTypes2["Stone"] = "minecraft:stone";
        MinecraftBlockTypes2["StoneBrickDoubleSlab"] = "minecraft:stone_brick_double_slab";
        MinecraftBlockTypes2["StoneBrickSlab"] = "minecraft:stone_brick_slab";
        MinecraftBlockTypes2["StoneBrickStairs"] = "minecraft:stone_brick_stairs";
        MinecraftBlockTypes2["StoneBricks"] = "minecraft:stone_bricks";
        MinecraftBlockTypes2["StoneButton"] = "minecraft:stone_button";
        MinecraftBlockTypes2["StonePressurePlate"] = "minecraft:stone_pressure_plate";
        MinecraftBlockTypes2["StoneStairs"] = "minecraft:stone_stairs";
        MinecraftBlockTypes2["Stonecutter"] = "minecraft:stonecutter";
        MinecraftBlockTypes2["StonecutterBlock"] = "minecraft:stonecutter_block";
        MinecraftBlockTypes2["StrippedAcaciaLog"] = "minecraft:stripped_acacia_log";
        MinecraftBlockTypes2["StrippedAcaciaWood"] = "minecraft:stripped_acacia_wood";
        MinecraftBlockTypes2["StrippedBambooBlock"] = "minecraft:stripped_bamboo_block";
        MinecraftBlockTypes2["StrippedBirchLog"] = "minecraft:stripped_birch_log";
        MinecraftBlockTypes2["StrippedBirchWood"] = "minecraft:stripped_birch_wood";
        MinecraftBlockTypes2["StrippedCherryLog"] = "minecraft:stripped_cherry_log";
        MinecraftBlockTypes2["StrippedCherryWood"] = "minecraft:stripped_cherry_wood";
        MinecraftBlockTypes2["StrippedCrimsonHyphae"] = "minecraft:stripped_crimson_hyphae";
        MinecraftBlockTypes2["StrippedCrimsonStem"] = "minecraft:stripped_crimson_stem";
        MinecraftBlockTypes2["StrippedDarkOakLog"] = "minecraft:stripped_dark_oak_log";
        MinecraftBlockTypes2["StrippedDarkOakWood"] = "minecraft:stripped_dark_oak_wood";
        MinecraftBlockTypes2["StrippedJungleLog"] = "minecraft:stripped_jungle_log";
        MinecraftBlockTypes2["StrippedJungleWood"] = "minecraft:stripped_jungle_wood";
        MinecraftBlockTypes2["StrippedMangroveLog"] = "minecraft:stripped_mangrove_log";
        MinecraftBlockTypes2["StrippedMangroveWood"] = "minecraft:stripped_mangrove_wood";
        MinecraftBlockTypes2["StrippedOakLog"] = "minecraft:stripped_oak_log";
        MinecraftBlockTypes2["StrippedOakWood"] = "minecraft:stripped_oak_wood";
        MinecraftBlockTypes2["StrippedSpruceLog"] = "minecraft:stripped_spruce_log";
        MinecraftBlockTypes2["StrippedSpruceWood"] = "minecraft:stripped_spruce_wood";
        MinecraftBlockTypes2["StrippedWarpedHyphae"] = "minecraft:stripped_warped_hyphae";
        MinecraftBlockTypes2["StrippedWarpedStem"] = "minecraft:stripped_warped_stem";
        MinecraftBlockTypes2["StructureBlock"] = "minecraft:structure_block";
        MinecraftBlockTypes2["StructureVoid"] = "minecraft:structure_void";
        MinecraftBlockTypes2["Sunflower"] = "minecraft:sunflower";
        MinecraftBlockTypes2["SuspiciousGravel"] = "minecraft:suspicious_gravel";
        MinecraftBlockTypes2["SuspiciousSand"] = "minecraft:suspicious_sand";
        MinecraftBlockTypes2["SweetBerryBush"] = "minecraft:sweet_berry_bush";
        MinecraftBlockTypes2["TallGrass"] = "minecraft:tall_grass";
        MinecraftBlockTypes2["Target"] = "minecraft:target";
        MinecraftBlockTypes2["TintedGlass"] = "minecraft:tinted_glass";
        MinecraftBlockTypes2["Tnt"] = "minecraft:tnt";
        MinecraftBlockTypes2["Torch"] = "minecraft:torch";
        MinecraftBlockTypes2["Torchflower"] = "minecraft:torchflower";
        MinecraftBlockTypes2["TorchflowerCrop"] = "minecraft:torchflower_crop";
        MinecraftBlockTypes2["Trapdoor"] = "minecraft:trapdoor";
        MinecraftBlockTypes2["TrappedChest"] = "minecraft:trapped_chest";
        MinecraftBlockTypes2["TrialSpawner"] = "minecraft:trial_spawner";
        MinecraftBlockTypes2["TripWire"] = "minecraft:trip_wire";
        MinecraftBlockTypes2["TripwireHook"] = "minecraft:tripwire_hook";
        MinecraftBlockTypes2["TubeCoral"] = "minecraft:tube_coral";
        MinecraftBlockTypes2["TubeCoralBlock"] = "minecraft:tube_coral_block";
        MinecraftBlockTypes2["TubeCoralFan"] = "minecraft:tube_coral_fan";
        MinecraftBlockTypes2["TubeCoralWallFan"] = "minecraft:tube_coral_wall_fan";
        MinecraftBlockTypes2["Tuff"] = "minecraft:tuff";
        MinecraftBlockTypes2["TuffBrickDoubleSlab"] = "minecraft:tuff_brick_double_slab";
        MinecraftBlockTypes2["TuffBrickSlab"] = "minecraft:tuff_brick_slab";
        MinecraftBlockTypes2["TuffBrickStairs"] = "minecraft:tuff_brick_stairs";
        MinecraftBlockTypes2["TuffBrickWall"] = "minecraft:tuff_brick_wall";
        MinecraftBlockTypes2["TuffBricks"] = "minecraft:tuff_bricks";
        MinecraftBlockTypes2["TuffDoubleSlab"] = "minecraft:tuff_double_slab";
        MinecraftBlockTypes2["TuffSlab"] = "minecraft:tuff_slab";
        MinecraftBlockTypes2["TuffStairs"] = "minecraft:tuff_stairs";
        MinecraftBlockTypes2["TuffWall"] = "minecraft:tuff_wall";
        MinecraftBlockTypes2["TurtleEgg"] = "minecraft:turtle_egg";
        MinecraftBlockTypes2["TwistingVines"] = "minecraft:twisting_vines";
        MinecraftBlockTypes2["UnderwaterTorch"] = "minecraft:underwater_torch";
        MinecraftBlockTypes2["UndyedShulkerBox"] = "minecraft:undyed_shulker_box";
        MinecraftBlockTypes2["Unknown"] = "minecraft:unknown";
        MinecraftBlockTypes2["UnlitRedstoneTorch"] = "minecraft:unlit_redstone_torch";
        MinecraftBlockTypes2["UnpoweredComparator"] = "minecraft:unpowered_comparator";
        MinecraftBlockTypes2["UnpoweredRepeater"] = "minecraft:unpowered_repeater";
        MinecraftBlockTypes2["Vault"] = "minecraft:vault";
        MinecraftBlockTypes2["VerdantFroglight"] = "minecraft:verdant_froglight";
        MinecraftBlockTypes2["Vine"] = "minecraft:vine";
        MinecraftBlockTypes2["WallBanner"] = "minecraft:wall_banner";
        MinecraftBlockTypes2["WallSign"] = "minecraft:wall_sign";
        MinecraftBlockTypes2["WarpedButton"] = "minecraft:warped_button";
        MinecraftBlockTypes2["WarpedDoor"] = "minecraft:warped_door";
        MinecraftBlockTypes2["WarpedDoubleSlab"] = "minecraft:warped_double_slab";
        MinecraftBlockTypes2["WarpedFence"] = "minecraft:warped_fence";
        MinecraftBlockTypes2["WarpedFenceGate"] = "minecraft:warped_fence_gate";
        MinecraftBlockTypes2["WarpedFungus"] = "minecraft:warped_fungus";
        MinecraftBlockTypes2["WarpedHangingSign"] = "minecraft:warped_hanging_sign";
        MinecraftBlockTypes2["WarpedHyphae"] = "minecraft:warped_hyphae";
        MinecraftBlockTypes2["WarpedNylium"] = "minecraft:warped_nylium";
        MinecraftBlockTypes2["WarpedPlanks"] = "minecraft:warped_planks";
        MinecraftBlockTypes2["WarpedPressurePlate"] = "minecraft:warped_pressure_plate";
        MinecraftBlockTypes2["WarpedRoots"] = "minecraft:warped_roots";
        MinecraftBlockTypes2["WarpedSlab"] = "minecraft:warped_slab";
        MinecraftBlockTypes2["WarpedStairs"] = "minecraft:warped_stairs";
        MinecraftBlockTypes2["WarpedStandingSign"] = "minecraft:warped_standing_sign";
        MinecraftBlockTypes2["WarpedStem"] = "minecraft:warped_stem";
        MinecraftBlockTypes2["WarpedTrapdoor"] = "minecraft:warped_trapdoor";
        MinecraftBlockTypes2["WarpedWallSign"] = "minecraft:warped_wall_sign";
        MinecraftBlockTypes2["WarpedWartBlock"] = "minecraft:warped_wart_block";
        MinecraftBlockTypes2["Water"] = "minecraft:water";
        MinecraftBlockTypes2["Waterlily"] = "minecraft:waterlily";
        MinecraftBlockTypes2["WaxedChiseledCopper"] = "minecraft:waxed_chiseled_copper";
        MinecraftBlockTypes2["WaxedCopper"] = "minecraft:waxed_copper";
        MinecraftBlockTypes2["WaxedCopperBulb"] = "minecraft:waxed_copper_bulb";
        MinecraftBlockTypes2["WaxedCopperDoor"] = "minecraft:waxed_copper_door";
        MinecraftBlockTypes2["WaxedCopperGrate"] = "minecraft:waxed_copper_grate";
        MinecraftBlockTypes2["WaxedCopperTrapdoor"] = "minecraft:waxed_copper_trapdoor";
        MinecraftBlockTypes2["WaxedCutCopper"] = "minecraft:waxed_cut_copper";
        MinecraftBlockTypes2["WaxedCutCopperSlab"] = "minecraft:waxed_cut_copper_slab";
        MinecraftBlockTypes2["WaxedCutCopperStairs"] = "minecraft:waxed_cut_copper_stairs";
        MinecraftBlockTypes2["WaxedDoubleCutCopperSlab"] = "minecraft:waxed_double_cut_copper_slab";
        MinecraftBlockTypes2["WaxedExposedChiseledCopper"] = "minecraft:waxed_exposed_chiseled_copper";
        MinecraftBlockTypes2["WaxedExposedCopper"] = "minecraft:waxed_exposed_copper";
        MinecraftBlockTypes2["WaxedExposedCopperBulb"] = "minecraft:waxed_exposed_copper_bulb";
        MinecraftBlockTypes2["WaxedExposedCopperDoor"] = "minecraft:waxed_exposed_copper_door";
        MinecraftBlockTypes2["WaxedExposedCopperGrate"] = "minecraft:waxed_exposed_copper_grate";
        MinecraftBlockTypes2["WaxedExposedCopperTrapdoor"] = "minecraft:waxed_exposed_copper_trapdoor";
        MinecraftBlockTypes2["WaxedExposedCutCopper"] = "minecraft:waxed_exposed_cut_copper";
        MinecraftBlockTypes2["WaxedExposedCutCopperSlab"] = "minecraft:waxed_exposed_cut_copper_slab";
        MinecraftBlockTypes2["WaxedExposedCutCopperStairs"] = "minecraft:waxed_exposed_cut_copper_stairs";
        MinecraftBlockTypes2["WaxedExposedDoubleCutCopperSlab"] = "minecraft:waxed_exposed_double_cut_copper_slab";
        MinecraftBlockTypes2["WaxedOxidizedChiseledCopper"] = "minecraft:waxed_oxidized_chiseled_copper";
        MinecraftBlockTypes2["WaxedOxidizedCopper"] = "minecraft:waxed_oxidized_copper";
        MinecraftBlockTypes2["WaxedOxidizedCopperBulb"] = "minecraft:waxed_oxidized_copper_bulb";
        MinecraftBlockTypes2["WaxedOxidizedCopperDoor"] = "minecraft:waxed_oxidized_copper_door";
        MinecraftBlockTypes2["WaxedOxidizedCopperGrate"] = "minecraft:waxed_oxidized_copper_grate";
        MinecraftBlockTypes2["WaxedOxidizedCopperTrapdoor"] = "minecraft:waxed_oxidized_copper_trapdoor";
        MinecraftBlockTypes2["WaxedOxidizedCutCopper"] = "minecraft:waxed_oxidized_cut_copper";
        MinecraftBlockTypes2["WaxedOxidizedCutCopperSlab"] = "minecraft:waxed_oxidized_cut_copper_slab";
        MinecraftBlockTypes2["WaxedOxidizedCutCopperStairs"] = "minecraft:waxed_oxidized_cut_copper_stairs";
        MinecraftBlockTypes2["WaxedOxidizedDoubleCutCopperSlab"] = "minecraft:waxed_oxidized_double_cut_copper_slab";
        MinecraftBlockTypes2["WaxedWeatheredChiseledCopper"] = "minecraft:waxed_weathered_chiseled_copper";
        MinecraftBlockTypes2["WaxedWeatheredCopper"] = "minecraft:waxed_weathered_copper";
        MinecraftBlockTypes2["WaxedWeatheredCopperBulb"] = "minecraft:waxed_weathered_copper_bulb";
        MinecraftBlockTypes2["WaxedWeatheredCopperDoor"] = "minecraft:waxed_weathered_copper_door";
        MinecraftBlockTypes2["WaxedWeatheredCopperGrate"] = "minecraft:waxed_weathered_copper_grate";
        MinecraftBlockTypes2["WaxedWeatheredCopperTrapdoor"] = "minecraft:waxed_weathered_copper_trapdoor";
        MinecraftBlockTypes2["WaxedWeatheredCutCopper"] = "minecraft:waxed_weathered_cut_copper";
        MinecraftBlockTypes2["WaxedWeatheredCutCopperSlab"] = "minecraft:waxed_weathered_cut_copper_slab";
        MinecraftBlockTypes2["WaxedWeatheredCutCopperStairs"] = "minecraft:waxed_weathered_cut_copper_stairs";
        MinecraftBlockTypes2["WaxedWeatheredDoubleCutCopperSlab"] = "minecraft:waxed_weathered_double_cut_copper_slab";
        MinecraftBlockTypes2["WeatheredChiseledCopper"] = "minecraft:weathered_chiseled_copper";
        MinecraftBlockTypes2["WeatheredCopper"] = "minecraft:weathered_copper";
        MinecraftBlockTypes2["WeatheredCopperBulb"] = "minecraft:weathered_copper_bulb";
        MinecraftBlockTypes2["WeatheredCopperDoor"] = "minecraft:weathered_copper_door";
        MinecraftBlockTypes2["WeatheredCopperGrate"] = "minecraft:weathered_copper_grate";
        MinecraftBlockTypes2["WeatheredCopperTrapdoor"] = "minecraft:weathered_copper_trapdoor";
        MinecraftBlockTypes2["WeatheredCutCopper"] = "minecraft:weathered_cut_copper";
        MinecraftBlockTypes2["WeatheredCutCopperSlab"] = "minecraft:weathered_cut_copper_slab";
        MinecraftBlockTypes2["WeatheredCutCopperStairs"] = "minecraft:weathered_cut_copper_stairs";
        MinecraftBlockTypes2["WeatheredDoubleCutCopperSlab"] = "minecraft:weathered_double_cut_copper_slab";
        MinecraftBlockTypes2["Web"] = "minecraft:web";
        MinecraftBlockTypes2["WeepingVines"] = "minecraft:weeping_vines";
        MinecraftBlockTypes2["Wheat"] = "minecraft:wheat";
        MinecraftBlockTypes2["WhiteCandle"] = "minecraft:white_candle";
        MinecraftBlockTypes2["WhiteCandleCake"] = "minecraft:white_candle_cake";
        MinecraftBlockTypes2["WhiteCarpet"] = "minecraft:white_carpet";
        MinecraftBlockTypes2["WhiteConcrete"] = "minecraft:white_concrete";
        MinecraftBlockTypes2["WhiteConcretePowder"] = "minecraft:white_concrete_powder";
        MinecraftBlockTypes2["WhiteGlazedTerracotta"] = "minecraft:white_glazed_terracotta";
        MinecraftBlockTypes2["WhiteShulkerBox"] = "minecraft:white_shulker_box";
        MinecraftBlockTypes2["WhiteStainedGlass"] = "minecraft:white_stained_glass";
        MinecraftBlockTypes2["WhiteStainedGlassPane"] = "minecraft:white_stained_glass_pane";
        MinecraftBlockTypes2["WhiteTerracotta"] = "minecraft:white_terracotta";
        MinecraftBlockTypes2["WhiteTulip"] = "minecraft:white_tulip";
        MinecraftBlockTypes2["WhiteWool"] = "minecraft:white_wool";
        MinecraftBlockTypes2["WitherRose"] = "minecraft:wither_rose";
        MinecraftBlockTypes2["WoodenButton"] = "minecraft:wooden_button";
        MinecraftBlockTypes2["WoodenDoor"] = "minecraft:wooden_door";
        MinecraftBlockTypes2["WoodenPressurePlate"] = "minecraft:wooden_pressure_plate";
        MinecraftBlockTypes2["YellowCandle"] = "minecraft:yellow_candle";
        MinecraftBlockTypes2["YellowCandleCake"] = "minecraft:yellow_candle_cake";
        MinecraftBlockTypes2["YellowCarpet"] = "minecraft:yellow_carpet";
        MinecraftBlockTypes2["YellowConcrete"] = "minecraft:yellow_concrete";
        MinecraftBlockTypes2["YellowConcretePowder"] = "minecraft:yellow_concrete_powder";
        MinecraftBlockTypes2["YellowGlazedTerracotta"] = "minecraft:yellow_glazed_terracotta";
        MinecraftBlockTypes2["YellowShulkerBox"] = "minecraft:yellow_shulker_box";
        MinecraftBlockTypes2["YellowStainedGlass"] = "minecraft:yellow_stained_glass";
        MinecraftBlockTypes2["YellowStainedGlassPane"] = "minecraft:yellow_stained_glass_pane";
        MinecraftBlockTypes2["YellowTerracotta"] = "minecraft:yellow_terracotta";
        MinecraftBlockTypes2["YellowWool"] = "minecraft:yellow_wool";
        return MinecraftBlockTypes2;
    })(MinecraftBlockTypes || {});
    var MinecraftCameraPresetsTypes = (MinecraftCameraPresetsTypes2 => {
        MinecraftCameraPresetsTypes2["FirstPerson"] = "minecraft:first_person";
        MinecraftCameraPresetsTypes2["FollowOrbit"] = "minecraft:follow_orbit";
        MinecraftCameraPresetsTypes2["Free"] = "minecraft:free";
        MinecraftCameraPresetsTypes2["ThirdPerson"] = "minecraft:third_person";
        MinecraftCameraPresetsTypes2["ThirdPersonFront"] = "minecraft:third_person_front";
        return MinecraftCameraPresetsTypes2;
    })(MinecraftCameraPresetsTypes || {});
    var MinecraftCooldownCategoryTypes = (MinecraftCooldownCategoryTypes2 => {
        MinecraftCooldownCategoryTypes2["Chorusfruit"] = "minecraft:chorusfruit";
        MinecraftCooldownCategoryTypes2["EnderPearl"] = "minecraft:ender_pearl";
        MinecraftCooldownCategoryTypes2["GoatHorn"] = "minecraft:goat_horn";
        MinecraftCooldownCategoryTypes2["Shield"] = "minecraft:shield";
        MinecraftCooldownCategoryTypes2["WindCharge"] = "minecraft:wind_charge";
        return MinecraftCooldownCategoryTypes2;
    })(MinecraftCooldownCategoryTypes || {});
    var MinecraftDimensionTypes = (MinecraftDimensionTypes2 => {
        MinecraftDimensionTypes2["Nether"] = "minecraft:nether";
        MinecraftDimensionTypes2["Overworld"] = "minecraft:overworld";
        MinecraftDimensionTypes2["TheEnd"] = "minecraft:the_end";
        return MinecraftDimensionTypes2;
    })(MinecraftDimensionTypes || {});
    var MinecraftEffectTypes = (MinecraftEffectTypes2 => {
        MinecraftEffectTypes2["Absorption"] = "minecraft:absorption";
        MinecraftEffectTypes2["BadOmen"] = "minecraft:bad_omen";
        MinecraftEffectTypes2["Blindness"] = "minecraft:blindness";
        MinecraftEffectTypes2["ConduitPower"] = "minecraft:conduit_power";
        MinecraftEffectTypes2["Darkness"] = "minecraft:darkness";
        MinecraftEffectTypes2["FatalPoison"] = "minecraft:fatal_poison";
        MinecraftEffectTypes2["FireResistance"] = "minecraft:fire_resistance";
        MinecraftEffectTypes2["Haste"] = "minecraft:haste";
        MinecraftEffectTypes2["HealthBoost"] = "minecraft:health_boost";
        MinecraftEffectTypes2["Hunger"] = "minecraft:hunger";
        MinecraftEffectTypes2["Infested"] = "minecraft:infested";
        MinecraftEffectTypes2["InstantDamage"] = "minecraft:instant_damage";
        MinecraftEffectTypes2["InstantHealth"] = "minecraft:instant_health";
        MinecraftEffectTypes2["Invisibility"] = "minecraft:invisibility";
        MinecraftEffectTypes2["JumpBoost"] = "minecraft:jump_boost";
        MinecraftEffectTypes2["Levitation"] = "minecraft:levitation";
        MinecraftEffectTypes2["MiningFatigue"] = "minecraft:mining_fatigue";
        MinecraftEffectTypes2["Nausea"] = "minecraft:nausea";
        MinecraftEffectTypes2["NightVision"] = "minecraft:night_vision";
        MinecraftEffectTypes2["Oozing"] = "minecraft:oozing";
        MinecraftEffectTypes2["Poison"] = "minecraft:poison";
        MinecraftEffectTypes2["RaidOmen"] = "minecraft:raid_omen";
        MinecraftEffectTypes2["Regeneration"] = "minecraft:regeneration";
        MinecraftEffectTypes2["Resistance"] = "minecraft:resistance";
        MinecraftEffectTypes2["Saturation"] = "minecraft:saturation";
        MinecraftEffectTypes2["SlowFalling"] = "minecraft:slow_falling";
        MinecraftEffectTypes2["Slowness"] = "minecraft:slowness";
        MinecraftEffectTypes2["Speed"] = "minecraft:speed";
        MinecraftEffectTypes2["Strength"] = "minecraft:strength";
        MinecraftEffectTypes2["TrialOmen"] = "minecraft:trial_omen";
        MinecraftEffectTypes2["VillageHero"] = "minecraft:village_hero";
        MinecraftEffectTypes2["WaterBreathing"] = "minecraft:water_breathing";
        MinecraftEffectTypes2["Weakness"] = "minecraft:weakness";
        MinecraftEffectTypes2["Weaving"] = "minecraft:weaving";
        MinecraftEffectTypes2["WindCharged"] = "minecraft:wind_charged";
        MinecraftEffectTypes2["Wither"] = "minecraft:wither";
        return MinecraftEffectTypes2;
    })(MinecraftEffectTypes || {});
    var MinecraftEnchantmentTypes = (MinecraftEnchantmentTypes2 => {
        MinecraftEnchantmentTypes2["AquaAffinity"] = "minecraft:aqua_affinity";
        MinecraftEnchantmentTypes2["BaneOfArthropods"] = "minecraft:bane_of_arthropods";
        MinecraftEnchantmentTypes2["Binding"] = "minecraft:binding";
        MinecraftEnchantmentTypes2["BlastProtection"] = "minecraft:blast_protection";
        MinecraftEnchantmentTypes2["BowInfinity"] = "minecraft:infinity";
        MinecraftEnchantmentTypes2["Breach"] = "minecraft:breach";
        MinecraftEnchantmentTypes2["Channeling"] = "minecraft:channeling";
        MinecraftEnchantmentTypes2["Density"] = "minecraft:density";
        MinecraftEnchantmentTypes2["DepthStrider"] = "minecraft:depth_strider";
        MinecraftEnchantmentTypes2["Efficiency"] = "minecraft:efficiency";
        MinecraftEnchantmentTypes2["FeatherFalling"] = "minecraft:feather_falling";
        MinecraftEnchantmentTypes2["FireAspect"] = "minecraft:fire_aspect";
        MinecraftEnchantmentTypes2["FireProtection"] = "minecraft:fire_protection";
        MinecraftEnchantmentTypes2["Flame"] = "minecraft:flame";
        MinecraftEnchantmentTypes2["Fortune"] = "minecraft:fortune";
        MinecraftEnchantmentTypes2["FrostWalker"] = "minecraft:frost_walker";
        MinecraftEnchantmentTypes2["Impaling"] = "minecraft:impaling";
        MinecraftEnchantmentTypes2["Knockback"] = "minecraft:knockback";
        MinecraftEnchantmentTypes2["Looting"] = "minecraft:looting";
        MinecraftEnchantmentTypes2["Loyalty"] = "minecraft:loyalty";
        MinecraftEnchantmentTypes2["LuckOfTheSea"] = "minecraft:luck_of_the_sea";
        MinecraftEnchantmentTypes2["Lure"] = "minecraft:lure";
        MinecraftEnchantmentTypes2["Mending"] = "minecraft:mending";
        MinecraftEnchantmentTypes2["Multishot"] = "minecraft:multishot";
        MinecraftEnchantmentTypes2["Piercing"] = "minecraft:piercing";
        MinecraftEnchantmentTypes2["Power"] = "minecraft:power";
        MinecraftEnchantmentTypes2["ProjectileProtection"] = "minecraft:projectile_protection";
        MinecraftEnchantmentTypes2["Protection"] = "minecraft:protection";
        MinecraftEnchantmentTypes2["Punch"] = "minecraft:punch";
        MinecraftEnchantmentTypes2["QuickCharge"] = "minecraft:quick_charge";
        MinecraftEnchantmentTypes2["Respiration"] = "minecraft:respiration";
        MinecraftEnchantmentTypes2["Riptide"] = "minecraft:riptide";
        MinecraftEnchantmentTypes2["Sharpness"] = "minecraft:sharpness";
        MinecraftEnchantmentTypes2["SilkTouch"] = "minecraft:silk_touch";
        MinecraftEnchantmentTypes2["Smite"] = "minecraft:smite";
        MinecraftEnchantmentTypes2["SoulSpeed"] = "minecraft:soul_speed";
        MinecraftEnchantmentTypes2["SwiftSneak"] = "minecraft:swift_sneak";
        MinecraftEnchantmentTypes2["Thorns"] = "minecraft:thorns";
        MinecraftEnchantmentTypes2["Unbreaking"] = "minecraft:unbreaking";
        MinecraftEnchantmentTypes2["Vanishing"] = "minecraft:vanishing";
        MinecraftEnchantmentTypes2["WindBurst"] = "minecraft:wind_burst";
        return MinecraftEnchantmentTypes2;
    })(MinecraftEnchantmentTypes || {});
    var MinecraftEntityTypes = (MinecraftEntityTypes2 => {
        MinecraftEntityTypes2["Agent"] = "minecraft:agent";
        MinecraftEntityTypes2["Allay"] = "minecraft:allay";
        MinecraftEntityTypes2["AreaEffectCloud"] = "minecraft:area_effect_cloud";
        MinecraftEntityTypes2["Armadillo"] = "minecraft:armadillo";
        MinecraftEntityTypes2["ArmorStand"] = "minecraft:armor_stand";
        MinecraftEntityTypes2["Arrow"] = "minecraft:arrow";
        MinecraftEntityTypes2["Axolotl"] = "minecraft:axolotl";
        MinecraftEntityTypes2["Bat"] = "minecraft:bat";
        MinecraftEntityTypes2["Bee"] = "minecraft:bee";
        MinecraftEntityTypes2["Blaze"] = "minecraft:blaze";
        MinecraftEntityTypes2["Boat"] = "minecraft:boat";
        MinecraftEntityTypes2["Bogged"] = "minecraft:bogged";
        MinecraftEntityTypes2["Breeze"] = "minecraft:breeze";
        MinecraftEntityTypes2["BreezeWindChargeProjectile"] = "minecraft:breeze_wind_charge_projectile";
        MinecraftEntityTypes2["Camel"] = "minecraft:camel";
        MinecraftEntityTypes2["Cat"] = "minecraft:cat";
        MinecraftEntityTypes2["CaveSpider"] = "minecraft:cave_spider";
        MinecraftEntityTypes2["ChestBoat"] = "minecraft:chest_boat";
        MinecraftEntityTypes2["ChestMinecart"] = "minecraft:chest_minecart";
        MinecraftEntityTypes2["Chicken"] = "minecraft:chicken";
        MinecraftEntityTypes2["Cod"] = "minecraft:cod";
        MinecraftEntityTypes2["CommandBlockMinecart"] = "minecraft:command_block_minecart";
        MinecraftEntityTypes2["Cow"] = "minecraft:cow";
        MinecraftEntityTypes2["Creeper"] = "minecraft:creeper";
        MinecraftEntityTypes2["Dolphin"] = "minecraft:dolphin";
        MinecraftEntityTypes2["Donkey"] = "minecraft:donkey";
        MinecraftEntityTypes2["DragonFireball"] = "minecraft:dragon_fireball";
        MinecraftEntityTypes2["Drowned"] = "minecraft:drowned";
        MinecraftEntityTypes2["Egg"] = "minecraft:egg";
        MinecraftEntityTypes2["ElderGuardian"] = "minecraft:elder_guardian";
        MinecraftEntityTypes2["EnderCrystal"] = "minecraft:ender_crystal";
        MinecraftEntityTypes2["EnderDragon"] = "minecraft:ender_dragon";
        MinecraftEntityTypes2["EnderPearl"] = "minecraft:ender_pearl";
        MinecraftEntityTypes2["Enderman"] = "minecraft:enderman";
        MinecraftEntityTypes2["Endermite"] = "minecraft:endermite";
        MinecraftEntityTypes2["EvocationIllager"] = "minecraft:evocation_illager";
        MinecraftEntityTypes2["EyeOfEnderSignal"] = "minecraft:eye_of_ender_signal";
        MinecraftEntityTypes2["Fireball"] = "minecraft:fireball";
        MinecraftEntityTypes2["FireworksRocket"] = "minecraft:fireworks_rocket";
        MinecraftEntityTypes2["FishingHook"] = "minecraft:fishing_hook";
        MinecraftEntityTypes2["Fox"] = "minecraft:fox";
        MinecraftEntityTypes2["Frog"] = "minecraft:frog";
        MinecraftEntityTypes2["Ghast"] = "minecraft:ghast";
        MinecraftEntityTypes2["GlowSquid"] = "minecraft:glow_squid";
        MinecraftEntityTypes2["Goat"] = "minecraft:goat";
        MinecraftEntityTypes2["Guardian"] = "minecraft:guardian";
        MinecraftEntityTypes2["Hoglin"] = "minecraft:hoglin";
        MinecraftEntityTypes2["HopperMinecart"] = "minecraft:hopper_minecart";
        MinecraftEntityTypes2["Horse"] = "minecraft:horse";
        MinecraftEntityTypes2["Husk"] = "minecraft:husk";
        MinecraftEntityTypes2["IronGolem"] = "minecraft:iron_golem";
        MinecraftEntityTypes2["LightningBolt"] = "minecraft:lightning_bolt";
        MinecraftEntityTypes2["LingeringPotion"] = "minecraft:lingering_potion";
        MinecraftEntityTypes2["Llama"] = "minecraft:llama";
        MinecraftEntityTypes2["LlamaSpit"] = "minecraft:llama_spit";
        MinecraftEntityTypes2["MagmaCube"] = "minecraft:magma_cube";
        MinecraftEntityTypes2["Minecart"] = "minecraft:minecart";
        MinecraftEntityTypes2["Mooshroom"] = "minecraft:mooshroom";
        MinecraftEntityTypes2["Mule"] = "minecraft:mule";
        MinecraftEntityTypes2["Npc"] = "minecraft:npc";
        MinecraftEntityTypes2["Ocelot"] = "minecraft:ocelot";
        MinecraftEntityTypes2["OminousItemSpawner"] = "minecraft:ominous_item_spawner";
        MinecraftEntityTypes2["Panda"] = "minecraft:panda";
        MinecraftEntityTypes2["Parrot"] = "minecraft:parrot";
        MinecraftEntityTypes2["Phantom"] = "minecraft:phantom";
        MinecraftEntityTypes2["Pig"] = "minecraft:pig";
        MinecraftEntityTypes2["Piglin"] = "minecraft:piglin";
        MinecraftEntityTypes2["PiglinBrute"] = "minecraft:piglin_brute";
        MinecraftEntityTypes2["Pillager"] = "minecraft:pillager";
        MinecraftEntityTypes2["Player"] = "minecraft:player";
        MinecraftEntityTypes2["PolarBear"] = "minecraft:polar_bear";
        MinecraftEntityTypes2["Pufferfish"] = "minecraft:pufferfish";
        MinecraftEntityTypes2["Rabbit"] = "minecraft:rabbit";
        MinecraftEntityTypes2["Ravager"] = "minecraft:ravager";
        MinecraftEntityTypes2["Salmon"] = "minecraft:salmon";
        MinecraftEntityTypes2["Sheep"] = "minecraft:sheep";
        MinecraftEntityTypes2["Shulker"] = "minecraft:shulker";
        MinecraftEntityTypes2["ShulkerBullet"] = "minecraft:shulker_bullet";
        MinecraftEntityTypes2["Silverfish"] = "minecraft:silverfish";
        MinecraftEntityTypes2["Skeleton"] = "minecraft:skeleton";
        MinecraftEntityTypes2["SkeletonHorse"] = "minecraft:skeleton_horse";
        MinecraftEntityTypes2["Slime"] = "minecraft:slime";
        MinecraftEntityTypes2["SmallFireball"] = "minecraft:small_fireball";
        MinecraftEntityTypes2["Sniffer"] = "minecraft:sniffer";
        MinecraftEntityTypes2["SnowGolem"] = "minecraft:snow_golem";
        MinecraftEntityTypes2["Snowball"] = "minecraft:snowball";
        MinecraftEntityTypes2["Spider"] = "minecraft:spider";
        MinecraftEntityTypes2["SplashPotion"] = "minecraft:splash_potion";
        MinecraftEntityTypes2["Squid"] = "minecraft:squid";
        MinecraftEntityTypes2["Stray"] = "minecraft:stray";
        MinecraftEntityTypes2["Strider"] = "minecraft:strider";
        MinecraftEntityTypes2["Tadpole"] = "minecraft:tadpole";
        MinecraftEntityTypes2["ThrownTrident"] = "minecraft:thrown_trident";
        MinecraftEntityTypes2["Tnt"] = "minecraft:tnt";
        MinecraftEntityTypes2["TntMinecart"] = "minecraft:tnt_minecart";
        MinecraftEntityTypes2["TraderLlama"] = "minecraft:trader_llama";
        MinecraftEntityTypes2["TripodCamera"] = "minecraft:tripod_camera";
        MinecraftEntityTypes2["Tropicalfish"] = "minecraft:tropicalfish";
        MinecraftEntityTypes2["Turtle"] = "minecraft:turtle";
        MinecraftEntityTypes2["Vex"] = "minecraft:vex";
        MinecraftEntityTypes2["Villager"] = "minecraft:villager";
        MinecraftEntityTypes2["VillagerV2"] = "minecraft:villager_v2";
        MinecraftEntityTypes2["Vindicator"] = "minecraft:vindicator";
        MinecraftEntityTypes2["WanderingTrader"] = "minecraft:wandering_trader";
        MinecraftEntityTypes2["Warden"] = "minecraft:warden";
        MinecraftEntityTypes2["WindChargeProjectile"] = "minecraft:wind_charge_projectile";
        MinecraftEntityTypes2["Witch"] = "minecraft:witch";
        MinecraftEntityTypes2["Wither"] = "minecraft:wither";
        MinecraftEntityTypes2["WitherSkeleton"] = "minecraft:wither_skeleton";
        MinecraftEntityTypes2["WitherSkull"] = "minecraft:wither_skull";
        MinecraftEntityTypes2["WitherSkullDangerous"] = "minecraft:wither_skull_dangerous";
        MinecraftEntityTypes2["Wolf"] = "minecraft:wolf";
        MinecraftEntityTypes2["XpBottle"] = "minecraft:xp_bottle";
        MinecraftEntityTypes2["XpOrb"] = "minecraft:xp_orb";
        MinecraftEntityTypes2["Zoglin"] = "minecraft:zoglin";
        MinecraftEntityTypes2["Zombie"] = "minecraft:zombie";
        MinecraftEntityTypes2["ZombieHorse"] = "minecraft:zombie_horse";
        MinecraftEntityTypes2["ZombiePigman"] = "minecraft:zombie_pigman";
        MinecraftEntityTypes2["ZombieVillager"] = "minecraft:zombie_villager";
        MinecraftEntityTypes2["ZombieVillagerV2"] = "minecraft:zombie_villager_v2";
        return MinecraftEntityTypes2;
    })(MinecraftEntityTypes || {});
    var MinecraftFeatureTypes = (MinecraftFeatureTypes2 => {
        MinecraftFeatureTypes2["AncientCity"] = "minecraft:ancient_city";
        MinecraftFeatureTypes2["BastionRemnant"] = "minecraft:bastion_remnant";
        MinecraftFeatureTypes2["BuriedTreasure"] = "minecraft:buried_treasure";
        MinecraftFeatureTypes2["EndCity"] = "minecraft:end_city";
        MinecraftFeatureTypes2["Fortress"] = "minecraft:fortress";
        MinecraftFeatureTypes2["Mansion"] = "minecraft:mansion";
        MinecraftFeatureTypes2["Mineshaft"] = "minecraft:mineshaft";
        MinecraftFeatureTypes2["Monument"] = "minecraft:monument";
        MinecraftFeatureTypes2["PillagerOutpost"] = "minecraft:pillager_outpost";
        MinecraftFeatureTypes2["RuinedPortal"] = "minecraft:ruined_portal";
        MinecraftFeatureTypes2["Ruins"] = "minecraft:ruins";
        MinecraftFeatureTypes2["Shipwreck"] = "minecraft:shipwreck";
        MinecraftFeatureTypes2["Stronghold"] = "minecraft:stronghold";
        MinecraftFeatureTypes2["Temple"] = "minecraft:temple";
        MinecraftFeatureTypes2["TrailRuins"] = "minecraft:trail_ruins";
        MinecraftFeatureTypes2["TrialChambers"] = "minecraft:trial_chambers";
        MinecraftFeatureTypes2["Village"] = "minecraft:village";
        return MinecraftFeatureTypes2;
    })(MinecraftFeatureTypes || {});
    var MinecraftItemTypes = (MinecraftItemTypes2 => {
        MinecraftItemTypes2["AcaciaBoat"] = "minecraft:acacia_boat";
        MinecraftItemTypes2["AcaciaButton"] = "minecraft:acacia_button";
        MinecraftItemTypes2["AcaciaChestBoat"] = "minecraft:acacia_chest_boat";
        MinecraftItemTypes2["AcaciaDoor"] = "minecraft:acacia_door";
        MinecraftItemTypes2["AcaciaFence"] = "minecraft:acacia_fence";
        MinecraftItemTypes2["AcaciaFenceGate"] = "minecraft:acacia_fence_gate";
        MinecraftItemTypes2["AcaciaHangingSign"] = "minecraft:acacia_hanging_sign";
        MinecraftItemTypes2["AcaciaLeaves"] = "minecraft:acacia_leaves";
        MinecraftItemTypes2["AcaciaLog"] = "minecraft:acacia_log";
        MinecraftItemTypes2["AcaciaPlanks"] = "minecraft:acacia_planks";
        MinecraftItemTypes2["AcaciaPressurePlate"] = "minecraft:acacia_pressure_plate";
        MinecraftItemTypes2["AcaciaSapling"] = "minecraft:acacia_sapling";
        MinecraftItemTypes2["AcaciaSign"] = "minecraft:acacia_sign";
        MinecraftItemTypes2["AcaciaSlab"] = "minecraft:acacia_slab";
        MinecraftItemTypes2["AcaciaStairs"] = "minecraft:acacia_stairs";
        MinecraftItemTypes2["AcaciaTrapdoor"] = "minecraft:acacia_trapdoor";
        MinecraftItemTypes2["AcaciaWood"] = "minecraft:acacia_wood";
        MinecraftItemTypes2["ActivatorRail"] = "minecraft:activator_rail";
        MinecraftItemTypes2["Air"] = "minecraft:air";
        MinecraftItemTypes2["AllaySpawnEgg"] = "minecraft:allay_spawn_egg";
        MinecraftItemTypes2["Allium"] = "minecraft:allium";
        MinecraftItemTypes2["Allow"] = "minecraft:allow";
        MinecraftItemTypes2["AmethystBlock"] = "minecraft:amethyst_block";
        MinecraftItemTypes2["AmethystCluster"] = "minecraft:amethyst_cluster";
        MinecraftItemTypes2["AmethystShard"] = "minecraft:amethyst_shard";
        MinecraftItemTypes2["AncientDebris"] = "minecraft:ancient_debris";
        MinecraftItemTypes2["Andesite"] = "minecraft:andesite";
        MinecraftItemTypes2["AndesiteSlab"] = "minecraft:andesite_slab";
        MinecraftItemTypes2["AndesiteStairs"] = "minecraft:andesite_stairs";
        MinecraftItemTypes2["AnglerPotterySherd"] = "minecraft:angler_pottery_sherd";
        MinecraftItemTypes2["Anvil"] = "minecraft:anvil";
        MinecraftItemTypes2["Apple"] = "minecraft:apple";
        MinecraftItemTypes2["ArcherPotterySherd"] = "minecraft:archer_pottery_sherd";
        MinecraftItemTypes2["ArmadilloScute"] = "minecraft:armadillo_scute";
        MinecraftItemTypes2["ArmadilloSpawnEgg"] = "minecraft:armadillo_spawn_egg";
        MinecraftItemTypes2["ArmorStand"] = "minecraft:armor_stand";
        MinecraftItemTypes2["ArmsUpPotterySherd"] = "minecraft:arms_up_pottery_sherd";
        MinecraftItemTypes2["Arrow"] = "minecraft:arrow";
        MinecraftItemTypes2["AxolotlBucket"] = "minecraft:axolotl_bucket";
        MinecraftItemTypes2["AxolotlSpawnEgg"] = "minecraft:axolotl_spawn_egg";
        MinecraftItemTypes2["Azalea"] = "minecraft:azalea";
        MinecraftItemTypes2["AzaleaLeaves"] = "minecraft:azalea_leaves";
        MinecraftItemTypes2["AzaleaLeavesFlowered"] = "minecraft:azalea_leaves_flowered";
        MinecraftItemTypes2["AzureBluet"] = "minecraft:azure_bluet";
        MinecraftItemTypes2["BakedPotato"] = "minecraft:baked_potato";
        MinecraftItemTypes2["Bamboo"] = "minecraft:bamboo";
        MinecraftItemTypes2["BambooBlock"] = "minecraft:bamboo_block";
        MinecraftItemTypes2["BambooButton"] = "minecraft:bamboo_button";
        MinecraftItemTypes2["BambooChestRaft"] = "minecraft:bamboo_chest_raft";
        MinecraftItemTypes2["BambooDoor"] = "minecraft:bamboo_door";
        MinecraftItemTypes2["BambooFence"] = "minecraft:bamboo_fence";
        MinecraftItemTypes2["BambooFenceGate"] = "minecraft:bamboo_fence_gate";
        MinecraftItemTypes2["BambooHangingSign"] = "minecraft:bamboo_hanging_sign";
        MinecraftItemTypes2["BambooMosaic"] = "minecraft:bamboo_mosaic";
        MinecraftItemTypes2["BambooMosaicSlab"] = "minecraft:bamboo_mosaic_slab";
        MinecraftItemTypes2["BambooMosaicStairs"] = "minecraft:bamboo_mosaic_stairs";
        MinecraftItemTypes2["BambooPlanks"] = "minecraft:bamboo_planks";
        MinecraftItemTypes2["BambooPressurePlate"] = "minecraft:bamboo_pressure_plate";
        MinecraftItemTypes2["BambooRaft"] = "minecraft:bamboo_raft";
        MinecraftItemTypes2["BambooSign"] = "minecraft:bamboo_sign";
        MinecraftItemTypes2["BambooSlab"] = "minecraft:bamboo_slab";
        MinecraftItemTypes2["BambooStairs"] = "minecraft:bamboo_stairs";
        MinecraftItemTypes2["BambooTrapdoor"] = "minecraft:bamboo_trapdoor";
        MinecraftItemTypes2["Banner"] = "minecraft:banner";
        MinecraftItemTypes2["Barrel"] = "minecraft:barrel";
        MinecraftItemTypes2["Barrier"] = "minecraft:barrier";
        MinecraftItemTypes2["Basalt"] = "minecraft:basalt";
        MinecraftItemTypes2["BatSpawnEgg"] = "minecraft:bat_spawn_egg";
        MinecraftItemTypes2["Beacon"] = "minecraft:beacon";
        MinecraftItemTypes2["Bed"] = "minecraft:bed";
        MinecraftItemTypes2["Bedrock"] = "minecraft:bedrock";
        MinecraftItemTypes2["BeeNest"] = "minecraft:bee_nest";
        MinecraftItemTypes2["BeeSpawnEgg"] = "minecraft:bee_spawn_egg";
        MinecraftItemTypes2["Beef"] = "minecraft:beef";
        MinecraftItemTypes2["Beehive"] = "minecraft:beehive";
        MinecraftItemTypes2["Beetroot"] = "minecraft:beetroot";
        MinecraftItemTypes2["BeetrootSeeds"] = "minecraft:beetroot_seeds";
        MinecraftItemTypes2["BeetrootSoup"] = "minecraft:beetroot_soup";
        MinecraftItemTypes2["Bell"] = "minecraft:bell";
        MinecraftItemTypes2["BigDripleaf"] = "minecraft:big_dripleaf";
        MinecraftItemTypes2["BirchBoat"] = "minecraft:birch_boat";
        MinecraftItemTypes2["BirchButton"] = "minecraft:birch_button";
        MinecraftItemTypes2["BirchChestBoat"] = "minecraft:birch_chest_boat";
        MinecraftItemTypes2["BirchDoor"] = "minecraft:birch_door";
        MinecraftItemTypes2["BirchFence"] = "minecraft:birch_fence";
        MinecraftItemTypes2["BirchFenceGate"] = "minecraft:birch_fence_gate";
        MinecraftItemTypes2["BirchHangingSign"] = "minecraft:birch_hanging_sign";
        MinecraftItemTypes2["BirchLeaves"] = "minecraft:birch_leaves";
        MinecraftItemTypes2["BirchLog"] = "minecraft:birch_log";
        MinecraftItemTypes2["BirchPlanks"] = "minecraft:birch_planks";
        MinecraftItemTypes2["BirchPressurePlate"] = "minecraft:birch_pressure_plate";
        MinecraftItemTypes2["BirchSapling"] = "minecraft:birch_sapling";
        MinecraftItemTypes2["BirchSign"] = "minecraft:birch_sign";
        MinecraftItemTypes2["BirchSlab"] = "minecraft:birch_slab";
        MinecraftItemTypes2["BirchStairs"] = "minecraft:birch_stairs";
        MinecraftItemTypes2["BirchTrapdoor"] = "minecraft:birch_trapdoor";
        MinecraftItemTypes2["BirchWood"] = "minecraft:birch_wood";
        MinecraftItemTypes2["BlackCandle"] = "minecraft:black_candle";
        MinecraftItemTypes2["BlackCarpet"] = "minecraft:black_carpet";
        MinecraftItemTypes2["BlackConcrete"] = "minecraft:black_concrete";
        MinecraftItemTypes2["BlackConcretePowder"] = "minecraft:black_concrete_powder";
        MinecraftItemTypes2["BlackDye"] = "minecraft:black_dye";
        MinecraftItemTypes2["BlackGlazedTerracotta"] = "minecraft:black_glazed_terracotta";
        MinecraftItemTypes2["BlackShulkerBox"] = "minecraft:black_shulker_box";
        MinecraftItemTypes2["BlackStainedGlass"] = "minecraft:black_stained_glass";
        MinecraftItemTypes2["BlackStainedGlassPane"] = "minecraft:black_stained_glass_pane";
        MinecraftItemTypes2["BlackTerracotta"] = "minecraft:black_terracotta";
        MinecraftItemTypes2["BlackWool"] = "minecraft:black_wool";
        MinecraftItemTypes2["Blackstone"] = "minecraft:blackstone";
        MinecraftItemTypes2["BlackstoneSlab"] = "minecraft:blackstone_slab";
        MinecraftItemTypes2["BlackstoneStairs"] = "minecraft:blackstone_stairs";
        MinecraftItemTypes2["BlackstoneWall"] = "minecraft:blackstone_wall";
        MinecraftItemTypes2["BladePotterySherd"] = "minecraft:blade_pottery_sherd";
        MinecraftItemTypes2["BlastFurnace"] = "minecraft:blast_furnace";
        MinecraftItemTypes2["BlazePowder"] = "minecraft:blaze_powder";
        MinecraftItemTypes2["BlazeRod"] = "minecraft:blaze_rod";
        MinecraftItemTypes2["BlazeSpawnEgg"] = "minecraft:blaze_spawn_egg";
        MinecraftItemTypes2["BlueCandle"] = "minecraft:blue_candle";
        MinecraftItemTypes2["BlueCarpet"] = "minecraft:blue_carpet";
        MinecraftItemTypes2["BlueConcrete"] = "minecraft:blue_concrete";
        MinecraftItemTypes2["BlueConcretePowder"] = "minecraft:blue_concrete_powder";
        MinecraftItemTypes2["BlueDye"] = "minecraft:blue_dye";
        MinecraftItemTypes2["BlueGlazedTerracotta"] = "minecraft:blue_glazed_terracotta";
        MinecraftItemTypes2["BlueIce"] = "minecraft:blue_ice";
        MinecraftItemTypes2["BlueOrchid"] = "minecraft:blue_orchid";
        MinecraftItemTypes2["BlueShulkerBox"] = "minecraft:blue_shulker_box";
        MinecraftItemTypes2["BlueStainedGlass"] = "minecraft:blue_stained_glass";
        MinecraftItemTypes2["BlueStainedGlassPane"] = "minecraft:blue_stained_glass_pane";
        MinecraftItemTypes2["BlueTerracotta"] = "minecraft:blue_terracotta";
        MinecraftItemTypes2["BlueWool"] = "minecraft:blue_wool";
        MinecraftItemTypes2["BoggedSpawnEgg"] = "minecraft:bogged_spawn_egg";
        MinecraftItemTypes2["BoltArmorTrimSmithingTemplate"] = "minecraft:bolt_armor_trim_smithing_template";
        MinecraftItemTypes2["Bone"] = "minecraft:bone";
        MinecraftItemTypes2["BoneBlock"] = "minecraft:bone_block";
        MinecraftItemTypes2["BoneMeal"] = "minecraft:bone_meal";
        MinecraftItemTypes2["Book"] = "minecraft:book";
        MinecraftItemTypes2["Bookshelf"] = "minecraft:bookshelf";
        MinecraftItemTypes2["BorderBlock"] = "minecraft:border_block";
        MinecraftItemTypes2["BordureIndentedBannerPattern"] = "minecraft:bordure_indented_banner_pattern";
        MinecraftItemTypes2["Bow"] = "minecraft:bow";
        MinecraftItemTypes2["Bowl"] = "minecraft:bowl";
        MinecraftItemTypes2["BrainCoral"] = "minecraft:brain_coral";
        MinecraftItemTypes2["BrainCoralBlock"] = "minecraft:brain_coral_block";
        MinecraftItemTypes2["BrainCoralFan"] = "minecraft:brain_coral_fan";
        MinecraftItemTypes2["Bread"] = "minecraft:bread";
        MinecraftItemTypes2["BreezeRod"] = "minecraft:breeze_rod";
        MinecraftItemTypes2["BreezeSpawnEgg"] = "minecraft:breeze_spawn_egg";
        MinecraftItemTypes2["BrewerPotterySherd"] = "minecraft:brewer_pottery_sherd";
        MinecraftItemTypes2["BrewingStand"] = "minecraft:brewing_stand";
        MinecraftItemTypes2["Brick"] = "minecraft:brick";
        MinecraftItemTypes2["BrickBlock"] = "minecraft:brick_block";
        MinecraftItemTypes2["BrickSlab"] = "minecraft:brick_slab";
        MinecraftItemTypes2["BrickStairs"] = "minecraft:brick_stairs";
        MinecraftItemTypes2["BrownCandle"] = "minecraft:brown_candle";
        MinecraftItemTypes2["BrownCarpet"] = "minecraft:brown_carpet";
        MinecraftItemTypes2["BrownConcrete"] = "minecraft:brown_concrete";
        MinecraftItemTypes2["BrownConcretePowder"] = "minecraft:brown_concrete_powder";
        MinecraftItemTypes2["BrownDye"] = "minecraft:brown_dye";
        MinecraftItemTypes2["BrownGlazedTerracotta"] = "minecraft:brown_glazed_terracotta";
        MinecraftItemTypes2["BrownMushroom"] = "minecraft:brown_mushroom";
        MinecraftItemTypes2["BrownMushroomBlock"] = "minecraft:brown_mushroom_block";
        MinecraftItemTypes2["BrownShulkerBox"] = "minecraft:brown_shulker_box";
        MinecraftItemTypes2["BrownStainedGlass"] = "minecraft:brown_stained_glass";
        MinecraftItemTypes2["BrownStainedGlassPane"] = "minecraft:brown_stained_glass_pane";
        MinecraftItemTypes2["BrownTerracotta"] = "minecraft:brown_terracotta";
        MinecraftItemTypes2["BrownWool"] = "minecraft:brown_wool";
        MinecraftItemTypes2["Brush"] = "minecraft:brush";
        MinecraftItemTypes2["BubbleCoral"] = "minecraft:bubble_coral";
        MinecraftItemTypes2["BubbleCoralBlock"] = "minecraft:bubble_coral_block";
        MinecraftItemTypes2["BubbleCoralFan"] = "minecraft:bubble_coral_fan";
        MinecraftItemTypes2["Bucket"] = "minecraft:bucket";
        MinecraftItemTypes2["BuddingAmethyst"] = "minecraft:budding_amethyst";
        MinecraftItemTypes2["BurnPotterySherd"] = "minecraft:burn_pottery_sherd";
        MinecraftItemTypes2["Cactus"] = "minecraft:cactus";
        MinecraftItemTypes2["Cake"] = "minecraft:cake";
        MinecraftItemTypes2["Calcite"] = "minecraft:calcite";
        MinecraftItemTypes2["CalibratedSculkSensor"] = "minecraft:calibrated_sculk_sensor";
        MinecraftItemTypes2["CamelSpawnEgg"] = "minecraft:camel_spawn_egg";
        MinecraftItemTypes2["Campfire"] = "minecraft:campfire";
        MinecraftItemTypes2["Candle"] = "minecraft:candle";
        MinecraftItemTypes2["Carrot"] = "minecraft:carrot";
        MinecraftItemTypes2["CarrotOnAStick"] = "minecraft:carrot_on_a_stick";
        MinecraftItemTypes2["CartographyTable"] = "minecraft:cartography_table";
        MinecraftItemTypes2["CarvedPumpkin"] = "minecraft:carved_pumpkin";
        MinecraftItemTypes2["CatSpawnEgg"] = "minecraft:cat_spawn_egg";
        MinecraftItemTypes2["Cauldron"] = "minecraft:cauldron";
        MinecraftItemTypes2["CaveSpiderSpawnEgg"] = "minecraft:cave_spider_spawn_egg";
        MinecraftItemTypes2["Chain"] = "minecraft:chain";
        MinecraftItemTypes2["ChainCommandBlock"] = "minecraft:chain_command_block";
        MinecraftItemTypes2["ChainmailBoots"] = "minecraft:chainmail_boots";
        MinecraftItemTypes2["ChainmailChestplate"] = "minecraft:chainmail_chestplate";
        MinecraftItemTypes2["ChainmailHelmet"] = "minecraft:chainmail_helmet";
        MinecraftItemTypes2["ChainmailLeggings"] = "minecraft:chainmail_leggings";
        MinecraftItemTypes2["Charcoal"] = "minecraft:charcoal";
        MinecraftItemTypes2["CherryBoat"] = "minecraft:cherry_boat";
        MinecraftItemTypes2["CherryButton"] = "minecraft:cherry_button";
        MinecraftItemTypes2["CherryChestBoat"] = "minecraft:cherry_chest_boat";
        MinecraftItemTypes2["CherryDoor"] = "minecraft:cherry_door";
        MinecraftItemTypes2["CherryFence"] = "minecraft:cherry_fence";
        MinecraftItemTypes2["CherryFenceGate"] = "minecraft:cherry_fence_gate";
        MinecraftItemTypes2["CherryHangingSign"] = "minecraft:cherry_hanging_sign";
        MinecraftItemTypes2["CherryLeaves"] = "minecraft:cherry_leaves";
        MinecraftItemTypes2["CherryLog"] = "minecraft:cherry_log";
        MinecraftItemTypes2["CherryPlanks"] = "minecraft:cherry_planks";
        MinecraftItemTypes2["CherryPressurePlate"] = "minecraft:cherry_pressure_plate";
        MinecraftItemTypes2["CherrySapling"] = "minecraft:cherry_sapling";
        MinecraftItemTypes2["CherrySign"] = "minecraft:cherry_sign";
        MinecraftItemTypes2["CherrySlab"] = "minecraft:cherry_slab";
        MinecraftItemTypes2["CherryStairs"] = "minecraft:cherry_stairs";
        MinecraftItemTypes2["CherryTrapdoor"] = "minecraft:cherry_trapdoor";
        MinecraftItemTypes2["CherryWood"] = "minecraft:cherry_wood";
        MinecraftItemTypes2["Chest"] = "minecraft:chest";
        MinecraftItemTypes2["ChestMinecart"] = "minecraft:chest_minecart";
        MinecraftItemTypes2["Chicken"] = "minecraft:chicken";
        MinecraftItemTypes2["ChickenSpawnEgg"] = "minecraft:chicken_spawn_egg";
        MinecraftItemTypes2["ChippedAnvil"] = "minecraft:chipped_anvil";
        MinecraftItemTypes2["ChiseledBookshelf"] = "minecraft:chiseled_bookshelf";
        MinecraftItemTypes2["ChiseledCopper"] = "minecraft:chiseled_copper";
        MinecraftItemTypes2["ChiseledDeepslate"] = "minecraft:chiseled_deepslate";
        MinecraftItemTypes2["ChiseledNetherBricks"] = "minecraft:chiseled_nether_bricks";
        MinecraftItemTypes2["ChiseledPolishedBlackstone"] = "minecraft:chiseled_polished_blackstone";
        MinecraftItemTypes2["ChiseledQuartzBlock"] = "minecraft:chiseled_quartz_block";
        MinecraftItemTypes2["ChiseledRedSandstone"] = "minecraft:chiseled_red_sandstone";
        MinecraftItemTypes2["ChiseledSandstone"] = "minecraft:chiseled_sandstone";
        MinecraftItemTypes2["ChiseledStoneBricks"] = "minecraft:chiseled_stone_bricks";
        MinecraftItemTypes2["ChiseledTuff"] = "minecraft:chiseled_tuff";
        MinecraftItemTypes2["ChiseledTuffBricks"] = "minecraft:chiseled_tuff_bricks";
        MinecraftItemTypes2["ChorusFlower"] = "minecraft:chorus_flower";
        MinecraftItemTypes2["ChorusFruit"] = "minecraft:chorus_fruit";
        MinecraftItemTypes2["ChorusPlant"] = "minecraft:chorus_plant";
        MinecraftItemTypes2["Clay"] = "minecraft:clay";
        MinecraftItemTypes2["ClayBall"] = "minecraft:clay_ball";
        MinecraftItemTypes2["Clock"] = "minecraft:clock";
        MinecraftItemTypes2["Coal"] = "minecraft:coal";
        MinecraftItemTypes2["CoalBlock"] = "minecraft:coal_block";
        MinecraftItemTypes2["CoalOre"] = "minecraft:coal_ore";
        MinecraftItemTypes2["CoarseDirt"] = "minecraft:coarse_dirt";
        MinecraftItemTypes2["CoastArmorTrimSmithingTemplate"] = "minecraft:coast_armor_trim_smithing_template";
        MinecraftItemTypes2["CobbledDeepslate"] = "minecraft:cobbled_deepslate";
        MinecraftItemTypes2["CobbledDeepslateSlab"] = "minecraft:cobbled_deepslate_slab";
        MinecraftItemTypes2["CobbledDeepslateStairs"] = "minecraft:cobbled_deepslate_stairs";
        MinecraftItemTypes2["CobbledDeepslateWall"] = "minecraft:cobbled_deepslate_wall";
        MinecraftItemTypes2["Cobblestone"] = "minecraft:cobblestone";
        MinecraftItemTypes2["CobblestoneSlab"] = "minecraft:cobblestone_slab";
        MinecraftItemTypes2["CobblestoneWall"] = "minecraft:cobblestone_wall";
        MinecraftItemTypes2["CocoaBeans"] = "minecraft:cocoa_beans";
        MinecraftItemTypes2["Cod"] = "minecraft:cod";
        MinecraftItemTypes2["CodBucket"] = "minecraft:cod_bucket";
        MinecraftItemTypes2["CodSpawnEgg"] = "minecraft:cod_spawn_egg";
        MinecraftItemTypes2["CommandBlock"] = "minecraft:command_block";
        MinecraftItemTypes2["CommandBlockMinecart"] = "minecraft:command_block_minecart";
        MinecraftItemTypes2["Comparator"] = "minecraft:comparator";
        MinecraftItemTypes2["Compass"] = "minecraft:compass";
        MinecraftItemTypes2["Composter"] = "minecraft:composter";
        MinecraftItemTypes2["Conduit"] = "minecraft:conduit";
        MinecraftItemTypes2["CookedBeef"] = "minecraft:cooked_beef";
        MinecraftItemTypes2["CookedChicken"] = "minecraft:cooked_chicken";
        MinecraftItemTypes2["CookedCod"] = "minecraft:cooked_cod";
        MinecraftItemTypes2["CookedMutton"] = "minecraft:cooked_mutton";
        MinecraftItemTypes2["CookedPorkchop"] = "minecraft:cooked_porkchop";
        MinecraftItemTypes2["CookedRabbit"] = "minecraft:cooked_rabbit";
        MinecraftItemTypes2["CookedSalmon"] = "minecraft:cooked_salmon";
        MinecraftItemTypes2["Cookie"] = "minecraft:cookie";
        MinecraftItemTypes2["CopperBlock"] = "minecraft:copper_block";
        MinecraftItemTypes2["CopperBulb"] = "minecraft:copper_bulb";
        MinecraftItemTypes2["CopperDoor"] = "minecraft:copper_door";
        MinecraftItemTypes2["CopperGrate"] = "minecraft:copper_grate";
        MinecraftItemTypes2["CopperIngot"] = "minecraft:copper_ingot";
        MinecraftItemTypes2["CopperOre"] = "minecraft:copper_ore";
        MinecraftItemTypes2["CopperTrapdoor"] = "minecraft:copper_trapdoor";
        MinecraftItemTypes2["Cornflower"] = "minecraft:cornflower";
        MinecraftItemTypes2["CowSpawnEgg"] = "minecraft:cow_spawn_egg";
        MinecraftItemTypes2["CrackedDeepslateBricks"] = "minecraft:cracked_deepslate_bricks";
        MinecraftItemTypes2["CrackedDeepslateTiles"] = "minecraft:cracked_deepslate_tiles";
        MinecraftItemTypes2["CrackedNetherBricks"] = "minecraft:cracked_nether_bricks";
        MinecraftItemTypes2["CrackedPolishedBlackstoneBricks"] = "minecraft:cracked_polished_blackstone_bricks";
        MinecraftItemTypes2["CrackedStoneBricks"] = "minecraft:cracked_stone_bricks";
        MinecraftItemTypes2["Crafter"] = "minecraft:crafter";
        MinecraftItemTypes2["CraftingTable"] = "minecraft:crafting_table";
        MinecraftItemTypes2["CreeperBannerPattern"] = "minecraft:creeper_banner_pattern";
        MinecraftItemTypes2["CreeperSpawnEgg"] = "minecraft:creeper_spawn_egg";
        MinecraftItemTypes2["CrimsonButton"] = "minecraft:crimson_button";
        MinecraftItemTypes2["CrimsonDoor"] = "minecraft:crimson_door";
        MinecraftItemTypes2["CrimsonFence"] = "minecraft:crimson_fence";
        MinecraftItemTypes2["CrimsonFenceGate"] = "minecraft:crimson_fence_gate";
        MinecraftItemTypes2["CrimsonFungus"] = "minecraft:crimson_fungus";
        MinecraftItemTypes2["CrimsonHangingSign"] = "minecraft:crimson_hanging_sign";
        MinecraftItemTypes2["CrimsonHyphae"] = "minecraft:crimson_hyphae";
        MinecraftItemTypes2["CrimsonNylium"] = "minecraft:crimson_nylium";
        MinecraftItemTypes2["CrimsonPlanks"] = "minecraft:crimson_planks";
        MinecraftItemTypes2["CrimsonPressurePlate"] = "minecraft:crimson_pressure_plate";
        MinecraftItemTypes2["CrimsonRoots"] = "minecraft:crimson_roots";
        MinecraftItemTypes2["CrimsonSign"] = "minecraft:crimson_sign";
        MinecraftItemTypes2["CrimsonSlab"] = "minecraft:crimson_slab";
        MinecraftItemTypes2["CrimsonStairs"] = "minecraft:crimson_stairs";
        MinecraftItemTypes2["CrimsonStem"] = "minecraft:crimson_stem";
        MinecraftItemTypes2["CrimsonTrapdoor"] = "minecraft:crimson_trapdoor";
        MinecraftItemTypes2["Crossbow"] = "minecraft:crossbow";
        MinecraftItemTypes2["CryingObsidian"] = "minecraft:crying_obsidian";
        MinecraftItemTypes2["CutCopper"] = "minecraft:cut_copper";
        MinecraftItemTypes2["CutCopperSlab"] = "minecraft:cut_copper_slab";
        MinecraftItemTypes2["CutCopperStairs"] = "minecraft:cut_copper_stairs";
        MinecraftItemTypes2["CutRedSandstone"] = "minecraft:cut_red_sandstone";
        MinecraftItemTypes2["CutRedSandstoneSlab"] = "minecraft:cut_red_sandstone_slab";
        MinecraftItemTypes2["CutSandstone"] = "minecraft:cut_sandstone";
        MinecraftItemTypes2["CutSandstoneSlab"] = "minecraft:cut_sandstone_slab";
        MinecraftItemTypes2["CyanCandle"] = "minecraft:cyan_candle";
        MinecraftItemTypes2["CyanCarpet"] = "minecraft:cyan_carpet";
        MinecraftItemTypes2["CyanConcrete"] = "minecraft:cyan_concrete";
        MinecraftItemTypes2["CyanConcretePowder"] = "minecraft:cyan_concrete_powder";
        MinecraftItemTypes2["CyanDye"] = "minecraft:cyan_dye";
        MinecraftItemTypes2["CyanGlazedTerracotta"] = "minecraft:cyan_glazed_terracotta";
        MinecraftItemTypes2["CyanShulkerBox"] = "minecraft:cyan_shulker_box";
        MinecraftItemTypes2["CyanStainedGlass"] = "minecraft:cyan_stained_glass";
        MinecraftItemTypes2["CyanStainedGlassPane"] = "minecraft:cyan_stained_glass_pane";
        MinecraftItemTypes2["CyanTerracotta"] = "minecraft:cyan_terracotta";
        MinecraftItemTypes2["CyanWool"] = "minecraft:cyan_wool";
        MinecraftItemTypes2["DamagedAnvil"] = "minecraft:damaged_anvil";
        MinecraftItemTypes2["Dandelion"] = "minecraft:dandelion";
        MinecraftItemTypes2["DangerPotterySherd"] = "minecraft:danger_pottery_sherd";
        MinecraftItemTypes2["DarkOakBoat"] = "minecraft:dark_oak_boat";
        MinecraftItemTypes2["DarkOakButton"] = "minecraft:dark_oak_button";
        MinecraftItemTypes2["DarkOakChestBoat"] = "minecraft:dark_oak_chest_boat";
        MinecraftItemTypes2["DarkOakDoor"] = "minecraft:dark_oak_door";
        MinecraftItemTypes2["DarkOakFence"] = "minecraft:dark_oak_fence";
        MinecraftItemTypes2["DarkOakFenceGate"] = "minecraft:dark_oak_fence_gate";
        MinecraftItemTypes2["DarkOakHangingSign"] = "minecraft:dark_oak_hanging_sign";
        MinecraftItemTypes2["DarkOakLeaves"] = "minecraft:dark_oak_leaves";
        MinecraftItemTypes2["DarkOakLog"] = "minecraft:dark_oak_log";
        MinecraftItemTypes2["DarkOakPlanks"] = "minecraft:dark_oak_planks";
        MinecraftItemTypes2["DarkOakPressurePlate"] = "minecraft:dark_oak_pressure_plate";
        MinecraftItemTypes2["DarkOakSapling"] = "minecraft:dark_oak_sapling";
        MinecraftItemTypes2["DarkOakSign"] = "minecraft:dark_oak_sign";
        MinecraftItemTypes2["DarkOakSlab"] = "minecraft:dark_oak_slab";
        MinecraftItemTypes2["DarkOakStairs"] = "minecraft:dark_oak_stairs";
        MinecraftItemTypes2["DarkOakTrapdoor"] = "minecraft:dark_oak_trapdoor";
        MinecraftItemTypes2["DarkOakWood"] = "minecraft:dark_oak_wood";
        MinecraftItemTypes2["DarkPrismarine"] = "minecraft:dark_prismarine";
        MinecraftItemTypes2["DarkPrismarineSlab"] = "minecraft:dark_prismarine_slab";
        MinecraftItemTypes2["DarkPrismarineStairs"] = "minecraft:dark_prismarine_stairs";
        MinecraftItemTypes2["DaylightDetector"] = "minecraft:daylight_detector";
        MinecraftItemTypes2["DeadBrainCoral"] = "minecraft:dead_brain_coral";
        MinecraftItemTypes2["DeadBrainCoralBlock"] = "minecraft:dead_brain_coral_block";
        MinecraftItemTypes2["DeadBrainCoralFan"] = "minecraft:dead_brain_coral_fan";
        MinecraftItemTypes2["DeadBubbleCoral"] = "minecraft:dead_bubble_coral";
        MinecraftItemTypes2["DeadBubbleCoralBlock"] = "minecraft:dead_bubble_coral_block";
        MinecraftItemTypes2["DeadBubbleCoralFan"] = "minecraft:dead_bubble_coral_fan";
        MinecraftItemTypes2["DeadFireCoral"] = "minecraft:dead_fire_coral";
        MinecraftItemTypes2["DeadFireCoralBlock"] = "minecraft:dead_fire_coral_block";
        MinecraftItemTypes2["DeadFireCoralFan"] = "minecraft:dead_fire_coral_fan";
        MinecraftItemTypes2["DeadHornCoral"] = "minecraft:dead_horn_coral";
        MinecraftItemTypes2["DeadHornCoralBlock"] = "minecraft:dead_horn_coral_block";
        MinecraftItemTypes2["DeadHornCoralFan"] = "minecraft:dead_horn_coral_fan";
        MinecraftItemTypes2["DeadTubeCoral"] = "minecraft:dead_tube_coral";
        MinecraftItemTypes2["DeadTubeCoralBlock"] = "minecraft:dead_tube_coral_block";
        MinecraftItemTypes2["DeadTubeCoralFan"] = "minecraft:dead_tube_coral_fan";
        MinecraftItemTypes2["Deadbush"] = "minecraft:deadbush";
        MinecraftItemTypes2["DebugStick"] = "minecraft:debug_stick";
        MinecraftItemTypes2["DecoratedPot"] = "minecraft:decorated_pot";
        MinecraftItemTypes2["Deepslate"] = "minecraft:deepslate";
        MinecraftItemTypes2["DeepslateBrickSlab"] = "minecraft:deepslate_brick_slab";
        MinecraftItemTypes2["DeepslateBrickStairs"] = "minecraft:deepslate_brick_stairs";
        MinecraftItemTypes2["DeepslateBrickWall"] = "minecraft:deepslate_brick_wall";
        MinecraftItemTypes2["DeepslateBricks"] = "minecraft:deepslate_bricks";
        MinecraftItemTypes2["DeepslateCoalOre"] = "minecraft:deepslate_coal_ore";
        MinecraftItemTypes2["DeepslateCopperOre"] = "minecraft:deepslate_copper_ore";
        MinecraftItemTypes2["DeepslateDiamondOre"] = "minecraft:deepslate_diamond_ore";
        MinecraftItemTypes2["DeepslateEmeraldOre"] = "minecraft:deepslate_emerald_ore";
        MinecraftItemTypes2["DeepslateGoldOre"] = "minecraft:deepslate_gold_ore";
        MinecraftItemTypes2["DeepslateIronOre"] = "minecraft:deepslate_iron_ore";
        MinecraftItemTypes2["DeepslateLapisOre"] = "minecraft:deepslate_lapis_ore";
        MinecraftItemTypes2["DeepslateRedstoneOre"] = "minecraft:deepslate_redstone_ore";
        MinecraftItemTypes2["DeepslateTileSlab"] = "minecraft:deepslate_tile_slab";
        MinecraftItemTypes2["DeepslateTileStairs"] = "minecraft:deepslate_tile_stairs";
        MinecraftItemTypes2["DeepslateTileWall"] = "minecraft:deepslate_tile_wall";
        MinecraftItemTypes2["DeepslateTiles"] = "minecraft:deepslate_tiles";
        MinecraftItemTypes2["Deny"] = "minecraft:deny";
        MinecraftItemTypes2["DetectorRail"] = "minecraft:detector_rail";
        MinecraftItemTypes2["Diamond"] = "minecraft:diamond";
        MinecraftItemTypes2["DiamondAxe"] = "minecraft:diamond_axe";
        MinecraftItemTypes2["DiamondBlock"] = "minecraft:diamond_block";
        MinecraftItemTypes2["DiamondBoots"] = "minecraft:diamond_boots";
        MinecraftItemTypes2["DiamondChestplate"] = "minecraft:diamond_chestplate";
        MinecraftItemTypes2["DiamondHelmet"] = "minecraft:diamond_helmet";
        MinecraftItemTypes2["DiamondHoe"] = "minecraft:diamond_hoe";
        MinecraftItemTypes2["DiamondHorseArmor"] = "minecraft:diamond_horse_armor";
        MinecraftItemTypes2["DiamondLeggings"] = "minecraft:diamond_leggings";
        MinecraftItemTypes2["DiamondOre"] = "minecraft:diamond_ore";
        MinecraftItemTypes2["DiamondPickaxe"] = "minecraft:diamond_pickaxe";
        MinecraftItemTypes2["DiamondShovel"] = "minecraft:diamond_shovel";
        MinecraftItemTypes2["DiamondSword"] = "minecraft:diamond_sword";
        MinecraftItemTypes2["Diorite"] = "minecraft:diorite";
        MinecraftItemTypes2["DioriteSlab"] = "minecraft:diorite_slab";
        MinecraftItemTypes2["DioriteStairs"] = "minecraft:diorite_stairs";
        MinecraftItemTypes2["Dirt"] = "minecraft:dirt";
        MinecraftItemTypes2["DirtWithRoots"] = "minecraft:dirt_with_roots";
        MinecraftItemTypes2["DiscFragment5"] = "minecraft:disc_fragment_5";
        MinecraftItemTypes2["Dispenser"] = "minecraft:dispenser";
        MinecraftItemTypes2["DolphinSpawnEgg"] = "minecraft:dolphin_spawn_egg";
        MinecraftItemTypes2["DonkeySpawnEgg"] = "minecraft:donkey_spawn_egg";
        MinecraftItemTypes2["DragonBreath"] = "minecraft:dragon_breath";
        MinecraftItemTypes2["DragonEgg"] = "minecraft:dragon_egg";
        MinecraftItemTypes2["DriedKelp"] = "minecraft:dried_kelp";
        MinecraftItemTypes2["DriedKelpBlock"] = "minecraft:dried_kelp_block";
        MinecraftItemTypes2["DripstoneBlock"] = "minecraft:dripstone_block";
        MinecraftItemTypes2["Dropper"] = "minecraft:dropper";
        MinecraftItemTypes2["DrownedSpawnEgg"] = "minecraft:drowned_spawn_egg";
        MinecraftItemTypes2["DuneArmorTrimSmithingTemplate"] = "minecraft:dune_armor_trim_smithing_template";
        MinecraftItemTypes2["EchoShard"] = "minecraft:echo_shard";
        MinecraftItemTypes2["Egg"] = "minecraft:egg";
        MinecraftItemTypes2["ElderGuardianSpawnEgg"] = "minecraft:elder_guardian_spawn_egg";
        MinecraftItemTypes2["Elytra"] = "minecraft:elytra";
        MinecraftItemTypes2["Emerald"] = "minecraft:emerald";
        MinecraftItemTypes2["EmeraldBlock"] = "minecraft:emerald_block";
        MinecraftItemTypes2["EmeraldOre"] = "minecraft:emerald_ore";
        MinecraftItemTypes2["EmptyMap"] = "minecraft:empty_map";
        MinecraftItemTypes2["EnchantedBook"] = "minecraft:enchanted_book";
        MinecraftItemTypes2["EnchantedGoldenApple"] = "minecraft:enchanted_golden_apple";
        MinecraftItemTypes2["EnchantingTable"] = "minecraft:enchanting_table";
        MinecraftItemTypes2["EndBrickStairs"] = "minecraft:end_brick_stairs";
        MinecraftItemTypes2["EndBricks"] = "minecraft:end_bricks";
        MinecraftItemTypes2["EndCrystal"] = "minecraft:end_crystal";
        MinecraftItemTypes2["EndPortalFrame"] = "minecraft:end_portal_frame";
        MinecraftItemTypes2["EndRod"] = "minecraft:end_rod";
        MinecraftItemTypes2["EndStone"] = "minecraft:end_stone";
        MinecraftItemTypes2["EndStoneBrickSlab"] = "minecraft:end_stone_brick_slab";
        MinecraftItemTypes2["EnderChest"] = "minecraft:ender_chest";
        MinecraftItemTypes2["EnderDragonSpawnEgg"] = "minecraft:ender_dragon_spawn_egg";
        MinecraftItemTypes2["EnderEye"] = "minecraft:ender_eye";
        MinecraftItemTypes2["EnderPearl"] = "minecraft:ender_pearl";
        MinecraftItemTypes2["EndermanSpawnEgg"] = "minecraft:enderman_spawn_egg";
        MinecraftItemTypes2["EndermiteSpawnEgg"] = "minecraft:endermite_spawn_egg";
        MinecraftItemTypes2["EvokerSpawnEgg"] = "minecraft:evoker_spawn_egg";
        MinecraftItemTypes2["ExperienceBottle"] = "minecraft:experience_bottle";
        MinecraftItemTypes2["ExplorerPotterySherd"] = "minecraft:explorer_pottery_sherd";
        MinecraftItemTypes2["ExposedChiseledCopper"] = "minecraft:exposed_chiseled_copper";
        MinecraftItemTypes2["ExposedCopper"] = "minecraft:exposed_copper";
        MinecraftItemTypes2["ExposedCopperBulb"] = "minecraft:exposed_copper_bulb";
        MinecraftItemTypes2["ExposedCopperDoor"] = "minecraft:exposed_copper_door";
        MinecraftItemTypes2["ExposedCopperGrate"] = "minecraft:exposed_copper_grate";
        MinecraftItemTypes2["ExposedCopperTrapdoor"] = "minecraft:exposed_copper_trapdoor";
        MinecraftItemTypes2["ExposedCutCopper"] = "minecraft:exposed_cut_copper";
        MinecraftItemTypes2["ExposedCutCopperSlab"] = "minecraft:exposed_cut_copper_slab";
        MinecraftItemTypes2["ExposedCutCopperStairs"] = "minecraft:exposed_cut_copper_stairs";
        MinecraftItemTypes2["EyeArmorTrimSmithingTemplate"] = "minecraft:eye_armor_trim_smithing_template";
        MinecraftItemTypes2["Farmland"] = "minecraft:farmland";
        MinecraftItemTypes2["Feather"] = "minecraft:feather";
        MinecraftItemTypes2["FenceGate"] = "minecraft:fence_gate";
        MinecraftItemTypes2["FermentedSpiderEye"] = "minecraft:fermented_spider_eye";
        MinecraftItemTypes2["Fern"] = "minecraft:fern";
        MinecraftItemTypes2["FieldMasonedBannerPattern"] = "minecraft:field_masoned_banner_pattern";
        MinecraftItemTypes2["FilledMap"] = "minecraft:filled_map";
        MinecraftItemTypes2["FireCharge"] = "minecraft:fire_charge";
        MinecraftItemTypes2["FireCoral"] = "minecraft:fire_coral";
        MinecraftItemTypes2["FireCoralBlock"] = "minecraft:fire_coral_block";
        MinecraftItemTypes2["FireCoralFan"] = "minecraft:fire_coral_fan";
        MinecraftItemTypes2["FireworkRocket"] = "minecraft:firework_rocket";
        MinecraftItemTypes2["FireworkStar"] = "minecraft:firework_star";
        MinecraftItemTypes2["FishingRod"] = "minecraft:fishing_rod";
        MinecraftItemTypes2["FletchingTable"] = "minecraft:fletching_table";
        MinecraftItemTypes2["Flint"] = "minecraft:flint";
        MinecraftItemTypes2["FlintAndSteel"] = "minecraft:flint_and_steel";
        MinecraftItemTypes2["FlowArmorTrimSmithingTemplate"] = "minecraft:flow_armor_trim_smithing_template";
        MinecraftItemTypes2["FlowBannerPattern"] = "minecraft:flow_banner_pattern";
        MinecraftItemTypes2["FlowPotterySherd"] = "minecraft:flow_pottery_sherd";
        MinecraftItemTypes2["FlowerBannerPattern"] = "minecraft:flower_banner_pattern";
        MinecraftItemTypes2["FlowerPot"] = "minecraft:flower_pot";
        MinecraftItemTypes2["FloweringAzalea"] = "minecraft:flowering_azalea";
        MinecraftItemTypes2["FoxSpawnEgg"] = "minecraft:fox_spawn_egg";
        MinecraftItemTypes2["Frame"] = "minecraft:frame";
        MinecraftItemTypes2["FriendPotterySherd"] = "minecraft:friend_pottery_sherd";
        MinecraftItemTypes2["FrogSpawn"] = "minecraft:frog_spawn";
        MinecraftItemTypes2["FrogSpawnEgg"] = "minecraft:frog_spawn_egg";
        MinecraftItemTypes2["FrostedIce"] = "minecraft:frosted_ice";
        MinecraftItemTypes2["Furnace"] = "minecraft:furnace";
        MinecraftItemTypes2["GhastSpawnEgg"] = "minecraft:ghast_spawn_egg";
        MinecraftItemTypes2["GhastTear"] = "minecraft:ghast_tear";
        MinecraftItemTypes2["GildedBlackstone"] = "minecraft:gilded_blackstone";
        MinecraftItemTypes2["Glass"] = "minecraft:glass";
        MinecraftItemTypes2["GlassBottle"] = "minecraft:glass_bottle";
        MinecraftItemTypes2["GlassPane"] = "minecraft:glass_pane";
        MinecraftItemTypes2["GlisteringMelonSlice"] = "minecraft:glistering_melon_slice";
        MinecraftItemTypes2["GlobeBannerPattern"] = "minecraft:globe_banner_pattern";
        MinecraftItemTypes2["GlowBerries"] = "minecraft:glow_berries";
        MinecraftItemTypes2["GlowFrame"] = "minecraft:glow_frame";
        MinecraftItemTypes2["GlowInkSac"] = "minecraft:glow_ink_sac";
        MinecraftItemTypes2["GlowLichen"] = "minecraft:glow_lichen";
        MinecraftItemTypes2["GlowSquidSpawnEgg"] = "minecraft:glow_squid_spawn_egg";
        MinecraftItemTypes2["Glowstone"] = "minecraft:glowstone";
        MinecraftItemTypes2["GlowstoneDust"] = "minecraft:glowstone_dust";
        MinecraftItemTypes2["GoatHorn"] = "minecraft:goat_horn";
        MinecraftItemTypes2["GoatSpawnEgg"] = "minecraft:goat_spawn_egg";
        MinecraftItemTypes2["GoldBlock"] = "minecraft:gold_block";
        MinecraftItemTypes2["GoldIngot"] = "minecraft:gold_ingot";
        MinecraftItemTypes2["GoldNugget"] = "minecraft:gold_nugget";
        MinecraftItemTypes2["GoldOre"] = "minecraft:gold_ore";
        MinecraftItemTypes2["GoldenApple"] = "minecraft:golden_apple";
        MinecraftItemTypes2["GoldenAxe"] = "minecraft:golden_axe";
        MinecraftItemTypes2["GoldenBoots"] = "minecraft:golden_boots";
        MinecraftItemTypes2["GoldenCarrot"] = "minecraft:golden_carrot";
        MinecraftItemTypes2["GoldenChestplate"] = "minecraft:golden_chestplate";
        MinecraftItemTypes2["GoldenHelmet"] = "minecraft:golden_helmet";
        MinecraftItemTypes2["GoldenHoe"] = "minecraft:golden_hoe";
        MinecraftItemTypes2["GoldenHorseArmor"] = "minecraft:golden_horse_armor";
        MinecraftItemTypes2["GoldenLeggings"] = "minecraft:golden_leggings";
        MinecraftItemTypes2["GoldenPickaxe"] = "minecraft:golden_pickaxe";
        MinecraftItemTypes2["GoldenRail"] = "minecraft:golden_rail";
        MinecraftItemTypes2["GoldenShovel"] = "minecraft:golden_shovel";
        MinecraftItemTypes2["GoldenSword"] = "minecraft:golden_sword";
        MinecraftItemTypes2["Granite"] = "minecraft:granite";
        MinecraftItemTypes2["GraniteSlab"] = "minecraft:granite_slab";
        MinecraftItemTypes2["GraniteStairs"] = "minecraft:granite_stairs";
        MinecraftItemTypes2["GrassBlock"] = "minecraft:grass_block";
        MinecraftItemTypes2["GrassPath"] = "minecraft:grass_path";
        MinecraftItemTypes2["Gravel"] = "minecraft:gravel";
        MinecraftItemTypes2["GrayCandle"] = "minecraft:gray_candle";
        MinecraftItemTypes2["GrayCarpet"] = "minecraft:gray_carpet";
        MinecraftItemTypes2["GrayConcrete"] = "minecraft:gray_concrete";
        MinecraftItemTypes2["GrayConcretePowder"] = "minecraft:gray_concrete_powder";
        MinecraftItemTypes2["GrayDye"] = "minecraft:gray_dye";
        MinecraftItemTypes2["GrayGlazedTerracotta"] = "minecraft:gray_glazed_terracotta";
        MinecraftItemTypes2["GrayShulkerBox"] = "minecraft:gray_shulker_box";
        MinecraftItemTypes2["GrayStainedGlass"] = "minecraft:gray_stained_glass";
        MinecraftItemTypes2["GrayStainedGlassPane"] = "minecraft:gray_stained_glass_pane";
        MinecraftItemTypes2["GrayTerracotta"] = "minecraft:gray_terracotta";
        MinecraftItemTypes2["GrayWool"] = "minecraft:gray_wool";
        MinecraftItemTypes2["GreenCandle"] = "minecraft:green_candle";
        MinecraftItemTypes2["GreenCarpet"] = "minecraft:green_carpet";
        MinecraftItemTypes2["GreenConcrete"] = "minecraft:green_concrete";
        MinecraftItemTypes2["GreenConcretePowder"] = "minecraft:green_concrete_powder";
        MinecraftItemTypes2["GreenDye"] = "minecraft:green_dye";
        MinecraftItemTypes2["GreenGlazedTerracotta"] = "minecraft:green_glazed_terracotta";
        MinecraftItemTypes2["GreenShulkerBox"] = "minecraft:green_shulker_box";
        MinecraftItemTypes2["GreenStainedGlass"] = "minecraft:green_stained_glass";
        MinecraftItemTypes2["GreenStainedGlassPane"] = "minecraft:green_stained_glass_pane";
        MinecraftItemTypes2["GreenTerracotta"] = "minecraft:green_terracotta";
        MinecraftItemTypes2["GreenWool"] = "minecraft:green_wool";
        MinecraftItemTypes2["Grindstone"] = "minecraft:grindstone";
        MinecraftItemTypes2["GuardianSpawnEgg"] = "minecraft:guardian_spawn_egg";
        MinecraftItemTypes2["Gunpowder"] = "minecraft:gunpowder";
        MinecraftItemTypes2["GusterBannerPattern"] = "minecraft:guster_banner_pattern";
        MinecraftItemTypes2["GusterPotterySherd"] = "minecraft:guster_pottery_sherd";
        MinecraftItemTypes2["HangingRoots"] = "minecraft:hanging_roots";
        MinecraftItemTypes2["HardenedClay"] = "minecraft:hardened_clay";
        MinecraftItemTypes2["HayBlock"] = "minecraft:hay_block";
        MinecraftItemTypes2["HeartOfTheSea"] = "minecraft:heart_of_the_sea";
        MinecraftItemTypes2["HeartPotterySherd"] = "minecraft:heart_pottery_sherd";
        MinecraftItemTypes2["HeartbreakPotterySherd"] = "minecraft:heartbreak_pottery_sherd";
        MinecraftItemTypes2["HeavyCore"] = "minecraft:heavy_core";
        MinecraftItemTypes2["HeavyWeightedPressurePlate"] = "minecraft:heavy_weighted_pressure_plate";
        MinecraftItemTypes2["HoglinSpawnEgg"] = "minecraft:hoglin_spawn_egg";
        MinecraftItemTypes2["HoneyBlock"] = "minecraft:honey_block";
        MinecraftItemTypes2["HoneyBottle"] = "minecraft:honey_bottle";
        MinecraftItemTypes2["Honeycomb"] = "minecraft:honeycomb";
        MinecraftItemTypes2["HoneycombBlock"] = "minecraft:honeycomb_block";
        MinecraftItemTypes2["Hopper"] = "minecraft:hopper";
        MinecraftItemTypes2["HopperMinecart"] = "minecraft:hopper_minecart";
        MinecraftItemTypes2["HornCoral"] = "minecraft:horn_coral";
        MinecraftItemTypes2["HornCoralBlock"] = "minecraft:horn_coral_block";
        MinecraftItemTypes2["HornCoralFan"] = "minecraft:horn_coral_fan";
        MinecraftItemTypes2["HorseSpawnEgg"] = "minecraft:horse_spawn_egg";
        MinecraftItemTypes2["HostArmorTrimSmithingTemplate"] = "minecraft:host_armor_trim_smithing_template";
        MinecraftItemTypes2["HowlPotterySherd"] = "minecraft:howl_pottery_sherd";
        MinecraftItemTypes2["HuskSpawnEgg"] = "minecraft:husk_spawn_egg";
        MinecraftItemTypes2["Ice"] = "minecraft:ice";
        MinecraftItemTypes2["InfestedChiseledStoneBricks"] = "minecraft:infested_chiseled_stone_bricks";
        MinecraftItemTypes2["InfestedCobblestone"] = "minecraft:infested_cobblestone";
        MinecraftItemTypes2["InfestedCrackedStoneBricks"] = "minecraft:infested_cracked_stone_bricks";
        MinecraftItemTypes2["InfestedDeepslate"] = "minecraft:infested_deepslate";
        MinecraftItemTypes2["InfestedMossyStoneBricks"] = "minecraft:infested_mossy_stone_bricks";
        MinecraftItemTypes2["InfestedStone"] = "minecraft:infested_stone";
        MinecraftItemTypes2["InfestedStoneBricks"] = "minecraft:infested_stone_bricks";
        MinecraftItemTypes2["InkSac"] = "minecraft:ink_sac";
        MinecraftItemTypes2["IronAxe"] = "minecraft:iron_axe";
        MinecraftItemTypes2["IronBars"] = "minecraft:iron_bars";
        MinecraftItemTypes2["IronBlock"] = "minecraft:iron_block";
        MinecraftItemTypes2["IronBoots"] = "minecraft:iron_boots";
        MinecraftItemTypes2["IronChestplate"] = "minecraft:iron_chestplate";
        MinecraftItemTypes2["IronDoor"] = "minecraft:iron_door";
        MinecraftItemTypes2["IronGolemSpawnEgg"] = "minecraft:iron_golem_spawn_egg";
        MinecraftItemTypes2["IronHelmet"] = "minecraft:iron_helmet";
        MinecraftItemTypes2["IronHoe"] = "minecraft:iron_hoe";
        MinecraftItemTypes2["IronHorseArmor"] = "minecraft:iron_horse_armor";
        MinecraftItemTypes2["IronIngot"] = "minecraft:iron_ingot";
        MinecraftItemTypes2["IronLeggings"] = "minecraft:iron_leggings";
        MinecraftItemTypes2["IronNugget"] = "minecraft:iron_nugget";
        MinecraftItemTypes2["IronOre"] = "minecraft:iron_ore";
        MinecraftItemTypes2["IronPickaxe"] = "minecraft:iron_pickaxe";
        MinecraftItemTypes2["IronShovel"] = "minecraft:iron_shovel";
        MinecraftItemTypes2["IronSword"] = "minecraft:iron_sword";
        MinecraftItemTypes2["IronTrapdoor"] = "minecraft:iron_trapdoor";
        MinecraftItemTypes2["Jigsaw"] = "minecraft:jigsaw";
        MinecraftItemTypes2["Jukebox"] = "minecraft:jukebox";
        MinecraftItemTypes2["JungleBoat"] = "minecraft:jungle_boat";
        MinecraftItemTypes2["JungleButton"] = "minecraft:jungle_button";
        MinecraftItemTypes2["JungleChestBoat"] = "minecraft:jungle_chest_boat";
        MinecraftItemTypes2["JungleDoor"] = "minecraft:jungle_door";
        MinecraftItemTypes2["JungleFence"] = "minecraft:jungle_fence";
        MinecraftItemTypes2["JungleFenceGate"] = "minecraft:jungle_fence_gate";
        MinecraftItemTypes2["JungleHangingSign"] = "minecraft:jungle_hanging_sign";
        MinecraftItemTypes2["JungleLeaves"] = "minecraft:jungle_leaves";
        MinecraftItemTypes2["JungleLog"] = "minecraft:jungle_log";
        MinecraftItemTypes2["JunglePlanks"] = "minecraft:jungle_planks";
        MinecraftItemTypes2["JunglePressurePlate"] = "minecraft:jungle_pressure_plate";
        MinecraftItemTypes2["JungleSapling"] = "minecraft:jungle_sapling";
        MinecraftItemTypes2["JungleSign"] = "minecraft:jungle_sign";
        MinecraftItemTypes2["JungleSlab"] = "minecraft:jungle_slab";
        MinecraftItemTypes2["JungleStairs"] = "minecraft:jungle_stairs";
        MinecraftItemTypes2["JungleTrapdoor"] = "minecraft:jungle_trapdoor";
        MinecraftItemTypes2["JungleWood"] = "minecraft:jungle_wood";
        MinecraftItemTypes2["Kelp"] = "minecraft:kelp";
        MinecraftItemTypes2["Ladder"] = "minecraft:ladder";
        MinecraftItemTypes2["Lantern"] = "minecraft:lantern";
        MinecraftItemTypes2["LapisBlock"] = "minecraft:lapis_block";
        MinecraftItemTypes2["LapisLazuli"] = "minecraft:lapis_lazuli";
        MinecraftItemTypes2["LapisOre"] = "minecraft:lapis_ore";
        MinecraftItemTypes2["LargeAmethystBud"] = "minecraft:large_amethyst_bud";
        MinecraftItemTypes2["LargeFern"] = "minecraft:large_fern";
        MinecraftItemTypes2["LavaBucket"] = "minecraft:lava_bucket";
        MinecraftItemTypes2["Lead"] = "minecraft:lead";
        MinecraftItemTypes2["Leather"] = "minecraft:leather";
        MinecraftItemTypes2["LeatherBoots"] = "minecraft:leather_boots";
        MinecraftItemTypes2["LeatherChestplate"] = "minecraft:leather_chestplate";
        MinecraftItemTypes2["LeatherHelmet"] = "minecraft:leather_helmet";
        MinecraftItemTypes2["LeatherHorseArmor"] = "minecraft:leather_horse_armor";
        MinecraftItemTypes2["LeatherLeggings"] = "minecraft:leather_leggings";
        MinecraftItemTypes2["Lectern"] = "minecraft:lectern";
        MinecraftItemTypes2["Lever"] = "minecraft:lever";
        MinecraftItemTypes2["LightBlock0"] = "minecraft:light_block_0";
        MinecraftItemTypes2["LightBlock1"] = "minecraft:light_block_1";
        MinecraftItemTypes2["LightBlock10"] = "minecraft:light_block_10";
        MinecraftItemTypes2["LightBlock11"] = "minecraft:light_block_11";
        MinecraftItemTypes2["LightBlock12"] = "minecraft:light_block_12";
        MinecraftItemTypes2["LightBlock13"] = "minecraft:light_block_13";
        MinecraftItemTypes2["LightBlock14"] = "minecraft:light_block_14";
        MinecraftItemTypes2["LightBlock15"] = "minecraft:light_block_15";
        MinecraftItemTypes2["LightBlock2"] = "minecraft:light_block_2";
        MinecraftItemTypes2["LightBlock3"] = "minecraft:light_block_3";
        MinecraftItemTypes2["LightBlock4"] = "minecraft:light_block_4";
        MinecraftItemTypes2["LightBlock5"] = "minecraft:light_block_5";
        MinecraftItemTypes2["LightBlock6"] = "minecraft:light_block_6";
        MinecraftItemTypes2["LightBlock7"] = "minecraft:light_block_7";
        MinecraftItemTypes2["LightBlock8"] = "minecraft:light_block_8";
        MinecraftItemTypes2["LightBlock9"] = "minecraft:light_block_9";
        MinecraftItemTypes2["LightBlueCandle"] = "minecraft:light_blue_candle";
        MinecraftItemTypes2["LightBlueCarpet"] = "minecraft:light_blue_carpet";
        MinecraftItemTypes2["LightBlueConcrete"] = "minecraft:light_blue_concrete";
        MinecraftItemTypes2["LightBlueConcretePowder"] = "minecraft:light_blue_concrete_powder";
        MinecraftItemTypes2["LightBlueDye"] = "minecraft:light_blue_dye";
        MinecraftItemTypes2["LightBlueGlazedTerracotta"] = "minecraft:light_blue_glazed_terracotta";
        MinecraftItemTypes2["LightBlueShulkerBox"] = "minecraft:light_blue_shulker_box";
        MinecraftItemTypes2["LightBlueStainedGlass"] = "minecraft:light_blue_stained_glass";
        MinecraftItemTypes2["LightBlueStainedGlassPane"] = "minecraft:light_blue_stained_glass_pane";
        MinecraftItemTypes2["LightBlueTerracotta"] = "minecraft:light_blue_terracotta";
        MinecraftItemTypes2["LightBlueWool"] = "minecraft:light_blue_wool";
        MinecraftItemTypes2["LightGrayCandle"] = "minecraft:light_gray_candle";
        MinecraftItemTypes2["LightGrayCarpet"] = "minecraft:light_gray_carpet";
        MinecraftItemTypes2["LightGrayConcrete"] = "minecraft:light_gray_concrete";
        MinecraftItemTypes2["LightGrayConcretePowder"] = "minecraft:light_gray_concrete_powder";
        MinecraftItemTypes2["LightGrayDye"] = "minecraft:light_gray_dye";
        MinecraftItemTypes2["LightGrayShulkerBox"] = "minecraft:light_gray_shulker_box";
        MinecraftItemTypes2["LightGrayStainedGlass"] = "minecraft:light_gray_stained_glass";
        MinecraftItemTypes2["LightGrayStainedGlassPane"] = "minecraft:light_gray_stained_glass_pane";
        MinecraftItemTypes2["LightGrayTerracotta"] = "minecraft:light_gray_terracotta";
        MinecraftItemTypes2["LightGrayWool"] = "minecraft:light_gray_wool";
        MinecraftItemTypes2["LightWeightedPressurePlate"] = "minecraft:light_weighted_pressure_plate";
        MinecraftItemTypes2["LightningRod"] = "minecraft:lightning_rod";
        MinecraftItemTypes2["Lilac"] = "minecraft:lilac";
        MinecraftItemTypes2["LilyOfTheValley"] = "minecraft:lily_of_the_valley";
        MinecraftItemTypes2["LimeCandle"] = "minecraft:lime_candle";
        MinecraftItemTypes2["LimeCarpet"] = "minecraft:lime_carpet";
        MinecraftItemTypes2["LimeConcrete"] = "minecraft:lime_concrete";
        MinecraftItemTypes2["LimeConcretePowder"] = "minecraft:lime_concrete_powder";
        MinecraftItemTypes2["LimeDye"] = "minecraft:lime_dye";
        MinecraftItemTypes2["LimeGlazedTerracotta"] = "minecraft:lime_glazed_terracotta";
        MinecraftItemTypes2["LimeShulkerBox"] = "minecraft:lime_shulker_box";
        MinecraftItemTypes2["LimeStainedGlass"] = "minecraft:lime_stained_glass";
        MinecraftItemTypes2["LimeStainedGlassPane"] = "minecraft:lime_stained_glass_pane";
        MinecraftItemTypes2["LimeTerracotta"] = "minecraft:lime_terracotta";
        MinecraftItemTypes2["LimeWool"] = "minecraft:lime_wool";
        MinecraftItemTypes2["LingeringPotion"] = "minecraft:lingering_potion";
        MinecraftItemTypes2["LitPumpkin"] = "minecraft:lit_pumpkin";
        MinecraftItemTypes2["LlamaSpawnEgg"] = "minecraft:llama_spawn_egg";
        MinecraftItemTypes2["Lodestone"] = "minecraft:lodestone";
        MinecraftItemTypes2["LodestoneCompass"] = "minecraft:lodestone_compass";
        MinecraftItemTypes2["Loom"] = "minecraft:loom";
        MinecraftItemTypes2["Mace"] = "minecraft:mace";
        MinecraftItemTypes2["MagentaCandle"] = "minecraft:magenta_candle";
        MinecraftItemTypes2["MagentaCarpet"] = "minecraft:magenta_carpet";
        MinecraftItemTypes2["MagentaConcrete"] = "minecraft:magenta_concrete";
        MinecraftItemTypes2["MagentaConcretePowder"] = "minecraft:magenta_concrete_powder";
        MinecraftItemTypes2["MagentaDye"] = "minecraft:magenta_dye";
        MinecraftItemTypes2["MagentaGlazedTerracotta"] = "minecraft:magenta_glazed_terracotta";
        MinecraftItemTypes2["MagentaShulkerBox"] = "minecraft:magenta_shulker_box";
        MinecraftItemTypes2["MagentaStainedGlass"] = "minecraft:magenta_stained_glass";
        MinecraftItemTypes2["MagentaStainedGlassPane"] = "minecraft:magenta_stained_glass_pane";
        MinecraftItemTypes2["MagentaTerracotta"] = "minecraft:magenta_terracotta";
        MinecraftItemTypes2["MagentaWool"] = "minecraft:magenta_wool";
        MinecraftItemTypes2["Magma"] = "minecraft:magma";
        MinecraftItemTypes2["MagmaCream"] = "minecraft:magma_cream";
        MinecraftItemTypes2["MagmaCubeSpawnEgg"] = "minecraft:magma_cube_spawn_egg";
        MinecraftItemTypes2["MangroveBoat"] = "minecraft:mangrove_boat";
        MinecraftItemTypes2["MangroveButton"] = "minecraft:mangrove_button";
        MinecraftItemTypes2["MangroveChestBoat"] = "minecraft:mangrove_chest_boat";
        MinecraftItemTypes2["MangroveDoor"] = "minecraft:mangrove_door";
        MinecraftItemTypes2["MangroveFence"] = "minecraft:mangrove_fence";
        MinecraftItemTypes2["MangroveFenceGate"] = "minecraft:mangrove_fence_gate";
        MinecraftItemTypes2["MangroveHangingSign"] = "minecraft:mangrove_hanging_sign";
        MinecraftItemTypes2["MangroveLeaves"] = "minecraft:mangrove_leaves";
        MinecraftItemTypes2["MangroveLog"] = "minecraft:mangrove_log";
        MinecraftItemTypes2["MangrovePlanks"] = "minecraft:mangrove_planks";
        MinecraftItemTypes2["MangrovePressurePlate"] = "minecraft:mangrove_pressure_plate";
        MinecraftItemTypes2["MangrovePropagule"] = "minecraft:mangrove_propagule";
        MinecraftItemTypes2["MangroveRoots"] = "minecraft:mangrove_roots";
        MinecraftItemTypes2["MangroveSign"] = "minecraft:mangrove_sign";
        MinecraftItemTypes2["MangroveSlab"] = "minecraft:mangrove_slab";
        MinecraftItemTypes2["MangroveStairs"] = "minecraft:mangrove_stairs";
        MinecraftItemTypes2["MangroveTrapdoor"] = "minecraft:mangrove_trapdoor";
        MinecraftItemTypes2["MangroveWood"] = "minecraft:mangrove_wood";
        MinecraftItemTypes2["MediumAmethystBud"] = "minecraft:medium_amethyst_bud";
        MinecraftItemTypes2["MelonBlock"] = "minecraft:melon_block";
        MinecraftItemTypes2["MelonSeeds"] = "minecraft:melon_seeds";
        MinecraftItemTypes2["MelonSlice"] = "minecraft:melon_slice";
        MinecraftItemTypes2["MilkBucket"] = "minecraft:milk_bucket";
        MinecraftItemTypes2["Minecart"] = "minecraft:minecart";
        MinecraftItemTypes2["MinerPotterySherd"] = "minecraft:miner_pottery_sherd";
        MinecraftItemTypes2["MobSpawner"] = "minecraft:mob_spawner";
        MinecraftItemTypes2["MojangBannerPattern"] = "minecraft:mojang_banner_pattern";
        MinecraftItemTypes2["MooshroomSpawnEgg"] = "minecraft:mooshroom_spawn_egg";
        MinecraftItemTypes2["MossBlock"] = "minecraft:moss_block";
        MinecraftItemTypes2["MossCarpet"] = "minecraft:moss_carpet";
        MinecraftItemTypes2["MossyCobblestone"] = "minecraft:mossy_cobblestone";
        MinecraftItemTypes2["MossyCobblestoneSlab"] = "minecraft:mossy_cobblestone_slab";
        MinecraftItemTypes2["MossyCobblestoneStairs"] = "minecraft:mossy_cobblestone_stairs";
        MinecraftItemTypes2["MossyStoneBrickSlab"] = "minecraft:mossy_stone_brick_slab";
        MinecraftItemTypes2["MossyStoneBrickStairs"] = "minecraft:mossy_stone_brick_stairs";
        MinecraftItemTypes2["MossyStoneBricks"] = "minecraft:mossy_stone_bricks";
        MinecraftItemTypes2["MournerPotterySherd"] = "minecraft:mourner_pottery_sherd";
        MinecraftItemTypes2["Mud"] = "minecraft:mud";
        MinecraftItemTypes2["MudBrickSlab"] = "minecraft:mud_brick_slab";
        MinecraftItemTypes2["MudBrickStairs"] = "minecraft:mud_brick_stairs";
        MinecraftItemTypes2["MudBrickWall"] = "minecraft:mud_brick_wall";
        MinecraftItemTypes2["MudBricks"] = "minecraft:mud_bricks";
        MinecraftItemTypes2["MuddyMangroveRoots"] = "minecraft:muddy_mangrove_roots";
        MinecraftItemTypes2["MuleSpawnEgg"] = "minecraft:mule_spawn_egg";
        MinecraftItemTypes2["MushroomStew"] = "minecraft:mushroom_stew";
        MinecraftItemTypes2["MusicDisc11"] = "minecraft:music_disc_11";
        MinecraftItemTypes2["MusicDisc13"] = "minecraft:music_disc_13";
        MinecraftItemTypes2["MusicDisc5"] = "minecraft:music_disc_5";
        MinecraftItemTypes2["MusicDiscBlocks"] = "minecraft:music_disc_blocks";
        MinecraftItemTypes2["MusicDiscCat"] = "minecraft:music_disc_cat";
        MinecraftItemTypes2["MusicDiscChirp"] = "minecraft:music_disc_chirp";
        MinecraftItemTypes2["MusicDiscCreator"] = "minecraft:music_disc_creator";
        MinecraftItemTypes2["MusicDiscCreatorMusicBox"] = "minecraft:music_disc_creator_music_box";
        MinecraftItemTypes2["MusicDiscFar"] = "minecraft:music_disc_far";
        MinecraftItemTypes2["MusicDiscMall"] = "minecraft:music_disc_mall";
        MinecraftItemTypes2["MusicDiscMellohi"] = "minecraft:music_disc_mellohi";
        MinecraftItemTypes2["MusicDiscOtherside"] = "minecraft:music_disc_otherside";
        MinecraftItemTypes2["MusicDiscPigstep"] = "minecraft:music_disc_pigstep";
        MinecraftItemTypes2["MusicDiscPrecipice"] = "minecraft:music_disc_precipice";
        MinecraftItemTypes2["MusicDiscRelic"] = "minecraft:music_disc_relic";
        MinecraftItemTypes2["MusicDiscStal"] = "minecraft:music_disc_stal";
        MinecraftItemTypes2["MusicDiscStrad"] = "minecraft:music_disc_strad";
        MinecraftItemTypes2["MusicDiscWait"] = "minecraft:music_disc_wait";
        MinecraftItemTypes2["MusicDiscWard"] = "minecraft:music_disc_ward";
        MinecraftItemTypes2["Mutton"] = "minecraft:mutton";
        MinecraftItemTypes2["Mycelium"] = "minecraft:mycelium";
        MinecraftItemTypes2["NameTag"] = "minecraft:name_tag";
        MinecraftItemTypes2["NautilusShell"] = "minecraft:nautilus_shell";
        MinecraftItemTypes2["NetherBrick"] = "minecraft:nether_brick";
        MinecraftItemTypes2["NetherBrickFence"] = "minecraft:nether_brick_fence";
        MinecraftItemTypes2["NetherBrickSlab"] = "minecraft:nether_brick_slab";
        MinecraftItemTypes2["NetherBrickStairs"] = "minecraft:nether_brick_stairs";
        MinecraftItemTypes2["NetherGoldOre"] = "minecraft:nether_gold_ore";
        MinecraftItemTypes2["NetherSprouts"] = "minecraft:nether_sprouts";
        MinecraftItemTypes2["NetherStar"] = "minecraft:nether_star";
        MinecraftItemTypes2["NetherWart"] = "minecraft:nether_wart";
        MinecraftItemTypes2["NetherWartBlock"] = "minecraft:nether_wart_block";
        MinecraftItemTypes2["Netherbrick"] = "minecraft:netherbrick";
        MinecraftItemTypes2["NetheriteAxe"] = "minecraft:netherite_axe";
        MinecraftItemTypes2["NetheriteBlock"] = "minecraft:netherite_block";
        MinecraftItemTypes2["NetheriteBoots"] = "minecraft:netherite_boots";
        MinecraftItemTypes2["NetheriteChestplate"] = "minecraft:netherite_chestplate";
        MinecraftItemTypes2["NetheriteHelmet"] = "minecraft:netherite_helmet";
        MinecraftItemTypes2["NetheriteHoe"] = "minecraft:netherite_hoe";
        MinecraftItemTypes2["NetheriteIngot"] = "minecraft:netherite_ingot";
        MinecraftItemTypes2["NetheriteLeggings"] = "minecraft:netherite_leggings";
        MinecraftItemTypes2["NetheritePickaxe"] = "minecraft:netherite_pickaxe";
        MinecraftItemTypes2["NetheriteScrap"] = "minecraft:netherite_scrap";
        MinecraftItemTypes2["NetheriteShovel"] = "minecraft:netherite_shovel";
        MinecraftItemTypes2["NetheriteSword"] = "minecraft:netherite_sword";
        MinecraftItemTypes2["NetheriteUpgradeSmithingTemplate"] = "minecraft:netherite_upgrade_smithing_template";
        MinecraftItemTypes2["Netherrack"] = "minecraft:netherrack";
        MinecraftItemTypes2["NormalStoneSlab"] = "minecraft:normal_stone_slab";
        MinecraftItemTypes2["NormalStoneStairs"] = "minecraft:normal_stone_stairs";
        MinecraftItemTypes2["Noteblock"] = "minecraft:noteblock";
        MinecraftItemTypes2["OakBoat"] = "minecraft:oak_boat";
        MinecraftItemTypes2["OakChestBoat"] = "minecraft:oak_chest_boat";
        MinecraftItemTypes2["OakFence"] = "minecraft:oak_fence";
        MinecraftItemTypes2["OakHangingSign"] = "minecraft:oak_hanging_sign";
        MinecraftItemTypes2["OakLeaves"] = "minecraft:oak_leaves";
        MinecraftItemTypes2["OakLog"] = "minecraft:oak_log";
        MinecraftItemTypes2["OakPlanks"] = "minecraft:oak_planks";
        MinecraftItemTypes2["OakSapling"] = "minecraft:oak_sapling";
        MinecraftItemTypes2["OakSign"] = "minecraft:oak_sign";
        MinecraftItemTypes2["OakSlab"] = "minecraft:oak_slab";
        MinecraftItemTypes2["OakStairs"] = "minecraft:oak_stairs";
        MinecraftItemTypes2["OakWood"] = "minecraft:oak_wood";
        MinecraftItemTypes2["Observer"] = "minecraft:observer";
        MinecraftItemTypes2["Obsidian"] = "minecraft:obsidian";
        MinecraftItemTypes2["OcelotSpawnEgg"] = "minecraft:ocelot_spawn_egg";
        MinecraftItemTypes2["OchreFroglight"] = "minecraft:ochre_froglight";
        MinecraftItemTypes2["OminousBottle"] = "minecraft:ominous_bottle";
        MinecraftItemTypes2["OminousTrialKey"] = "minecraft:ominous_trial_key";
        MinecraftItemTypes2["OrangeCandle"] = "minecraft:orange_candle";
        MinecraftItemTypes2["OrangeCarpet"] = "minecraft:orange_carpet";
        MinecraftItemTypes2["OrangeConcrete"] = "minecraft:orange_concrete";
        MinecraftItemTypes2["OrangeConcretePowder"] = "minecraft:orange_concrete_powder";
        MinecraftItemTypes2["OrangeDye"] = "minecraft:orange_dye";
        MinecraftItemTypes2["OrangeGlazedTerracotta"] = "minecraft:orange_glazed_terracotta";
        MinecraftItemTypes2["OrangeShulkerBox"] = "minecraft:orange_shulker_box";
        MinecraftItemTypes2["OrangeStainedGlass"] = "minecraft:orange_stained_glass";
        MinecraftItemTypes2["OrangeStainedGlassPane"] = "minecraft:orange_stained_glass_pane";
        MinecraftItemTypes2["OrangeTerracotta"] = "minecraft:orange_terracotta";
        MinecraftItemTypes2["OrangeTulip"] = "minecraft:orange_tulip";
        MinecraftItemTypes2["OrangeWool"] = "minecraft:orange_wool";
        MinecraftItemTypes2["OxeyeDaisy"] = "minecraft:oxeye_daisy";
        MinecraftItemTypes2["OxidizedChiseledCopper"] = "minecraft:oxidized_chiseled_copper";
        MinecraftItemTypes2["OxidizedCopper"] = "minecraft:oxidized_copper";
        MinecraftItemTypes2["OxidizedCopperBulb"] = "minecraft:oxidized_copper_bulb";
        MinecraftItemTypes2["OxidizedCopperDoor"] = "minecraft:oxidized_copper_door";
        MinecraftItemTypes2["OxidizedCopperGrate"] = "minecraft:oxidized_copper_grate";
        MinecraftItemTypes2["OxidizedCopperTrapdoor"] = "minecraft:oxidized_copper_trapdoor";
        MinecraftItemTypes2["OxidizedCutCopper"] = "minecraft:oxidized_cut_copper";
        MinecraftItemTypes2["OxidizedCutCopperSlab"] = "minecraft:oxidized_cut_copper_slab";
        MinecraftItemTypes2["OxidizedCutCopperStairs"] = "minecraft:oxidized_cut_copper_stairs";
        MinecraftItemTypes2["PackedIce"] = "minecraft:packed_ice";
        MinecraftItemTypes2["PackedMud"] = "minecraft:packed_mud";
        MinecraftItemTypes2["Painting"] = "minecraft:painting";
        MinecraftItemTypes2["PandaSpawnEgg"] = "minecraft:panda_spawn_egg";
        MinecraftItemTypes2["Paper"] = "minecraft:paper";
        MinecraftItemTypes2["ParrotSpawnEgg"] = "minecraft:parrot_spawn_egg";
        MinecraftItemTypes2["PearlescentFroglight"] = "minecraft:pearlescent_froglight";
        MinecraftItemTypes2["Peony"] = "minecraft:peony";
        MinecraftItemTypes2["PetrifiedOakSlab"] = "minecraft:petrified_oak_slab";
        MinecraftItemTypes2["PhantomMembrane"] = "minecraft:phantom_membrane";
        MinecraftItemTypes2["PhantomSpawnEgg"] = "minecraft:phantom_spawn_egg";
        MinecraftItemTypes2["PigSpawnEgg"] = "minecraft:pig_spawn_egg";
        MinecraftItemTypes2["PiglinBannerPattern"] = "minecraft:piglin_banner_pattern";
        MinecraftItemTypes2["PiglinBruteSpawnEgg"] = "minecraft:piglin_brute_spawn_egg";
        MinecraftItemTypes2["PiglinSpawnEgg"] = "minecraft:piglin_spawn_egg";
        MinecraftItemTypes2["PillagerSpawnEgg"] = "minecraft:pillager_spawn_egg";
        MinecraftItemTypes2["PinkCandle"] = "minecraft:pink_candle";
        MinecraftItemTypes2["PinkCarpet"] = "minecraft:pink_carpet";
        MinecraftItemTypes2["PinkConcrete"] = "minecraft:pink_concrete";
        MinecraftItemTypes2["PinkConcretePowder"] = "minecraft:pink_concrete_powder";
        MinecraftItemTypes2["PinkDye"] = "minecraft:pink_dye";
        MinecraftItemTypes2["PinkGlazedTerracotta"] = "minecraft:pink_glazed_terracotta";
        MinecraftItemTypes2["PinkPetals"] = "minecraft:pink_petals";
        MinecraftItemTypes2["PinkShulkerBox"] = "minecraft:pink_shulker_box";
        MinecraftItemTypes2["PinkStainedGlass"] = "minecraft:pink_stained_glass";
        MinecraftItemTypes2["PinkStainedGlassPane"] = "minecraft:pink_stained_glass_pane";
        MinecraftItemTypes2["PinkTerracotta"] = "minecraft:pink_terracotta";
        MinecraftItemTypes2["PinkTulip"] = "minecraft:pink_tulip";
        MinecraftItemTypes2["PinkWool"] = "minecraft:pink_wool";
        MinecraftItemTypes2["Piston"] = "minecraft:piston";
        MinecraftItemTypes2["PitcherPlant"] = "minecraft:pitcher_plant";
        MinecraftItemTypes2["PitcherPod"] = "minecraft:pitcher_pod";
        MinecraftItemTypes2["PlentyPotterySherd"] = "minecraft:plenty_pottery_sherd";
        MinecraftItemTypes2["Podzol"] = "minecraft:podzol";
        MinecraftItemTypes2["PointedDripstone"] = "minecraft:pointed_dripstone";
        MinecraftItemTypes2["PoisonousPotato"] = "minecraft:poisonous_potato";
        MinecraftItemTypes2["PolarBearSpawnEgg"] = "minecraft:polar_bear_spawn_egg";
        MinecraftItemTypes2["PolishedAndesite"] = "minecraft:polished_andesite";
        MinecraftItemTypes2["PolishedAndesiteSlab"] = "minecraft:polished_andesite_slab";
        MinecraftItemTypes2["PolishedAndesiteStairs"] = "minecraft:polished_andesite_stairs";
        MinecraftItemTypes2["PolishedBasalt"] = "minecraft:polished_basalt";
        MinecraftItemTypes2["PolishedBlackstone"] = "minecraft:polished_blackstone";
        MinecraftItemTypes2["PolishedBlackstoneBrickSlab"] = "minecraft:polished_blackstone_brick_slab";
        MinecraftItemTypes2["PolishedBlackstoneBrickStairs"] = "minecraft:polished_blackstone_brick_stairs";
        MinecraftItemTypes2["PolishedBlackstoneBrickWall"] = "minecraft:polished_blackstone_brick_wall";
        MinecraftItemTypes2["PolishedBlackstoneBricks"] = "minecraft:polished_blackstone_bricks";
        MinecraftItemTypes2["PolishedBlackstoneButton"] = "minecraft:polished_blackstone_button";
        MinecraftItemTypes2["PolishedBlackstonePressurePlate"] = "minecraft:polished_blackstone_pressure_plate";
        MinecraftItemTypes2["PolishedBlackstoneSlab"] = "minecraft:polished_blackstone_slab";
        MinecraftItemTypes2["PolishedBlackstoneStairs"] = "minecraft:polished_blackstone_stairs";
        MinecraftItemTypes2["PolishedBlackstoneWall"] = "minecraft:polished_blackstone_wall";
        MinecraftItemTypes2["PolishedDeepslate"] = "minecraft:polished_deepslate";
        MinecraftItemTypes2["PolishedDeepslateSlab"] = "minecraft:polished_deepslate_slab";
        MinecraftItemTypes2["PolishedDeepslateStairs"] = "minecraft:polished_deepslate_stairs";
        MinecraftItemTypes2["PolishedDeepslateWall"] = "minecraft:polished_deepslate_wall";
        MinecraftItemTypes2["PolishedDiorite"] = "minecraft:polished_diorite";
        MinecraftItemTypes2["PolishedDioriteSlab"] = "minecraft:polished_diorite_slab";
        MinecraftItemTypes2["PolishedDioriteStairs"] = "minecraft:polished_diorite_stairs";
        MinecraftItemTypes2["PolishedGranite"] = "minecraft:polished_granite";
        MinecraftItemTypes2["PolishedGraniteSlab"] = "minecraft:polished_granite_slab";
        MinecraftItemTypes2["PolishedGraniteStairs"] = "minecraft:polished_granite_stairs";
        MinecraftItemTypes2["PolishedTuff"] = "minecraft:polished_tuff";
        MinecraftItemTypes2["PolishedTuffSlab"] = "minecraft:polished_tuff_slab";
        MinecraftItemTypes2["PolishedTuffStairs"] = "minecraft:polished_tuff_stairs";
        MinecraftItemTypes2["PolishedTuffWall"] = "minecraft:polished_tuff_wall";
        MinecraftItemTypes2["PoppedChorusFruit"] = "minecraft:popped_chorus_fruit";
        MinecraftItemTypes2["Poppy"] = "minecraft:poppy";
        MinecraftItemTypes2["Porkchop"] = "minecraft:porkchop";
        MinecraftItemTypes2["Potato"] = "minecraft:potato";
        MinecraftItemTypes2["Potion"] = "minecraft:potion";
        MinecraftItemTypes2["PowderSnowBucket"] = "minecraft:powder_snow_bucket";
        MinecraftItemTypes2["Prismarine"] = "minecraft:prismarine";
        MinecraftItemTypes2["PrismarineBrickSlab"] = "minecraft:prismarine_brick_slab";
        MinecraftItemTypes2["PrismarineBricks"] = "minecraft:prismarine_bricks";
        MinecraftItemTypes2["PrismarineBricksStairs"] = "minecraft:prismarine_bricks_stairs";
        MinecraftItemTypes2["PrismarineCrystals"] = "minecraft:prismarine_crystals";
        MinecraftItemTypes2["PrismarineShard"] = "minecraft:prismarine_shard";
        MinecraftItemTypes2["PrismarineSlab"] = "minecraft:prismarine_slab";
        MinecraftItemTypes2["PrismarineStairs"] = "minecraft:prismarine_stairs";
        MinecraftItemTypes2["PrizePotterySherd"] = "minecraft:prize_pottery_sherd";
        MinecraftItemTypes2["Pufferfish"] = "minecraft:pufferfish";
        MinecraftItemTypes2["PufferfishBucket"] = "minecraft:pufferfish_bucket";
        MinecraftItemTypes2["PufferfishSpawnEgg"] = "minecraft:pufferfish_spawn_egg";
        MinecraftItemTypes2["Pumpkin"] = "minecraft:pumpkin";
        MinecraftItemTypes2["PumpkinPie"] = "minecraft:pumpkin_pie";
        MinecraftItemTypes2["PumpkinSeeds"] = "minecraft:pumpkin_seeds";
        MinecraftItemTypes2["PurpleCandle"] = "minecraft:purple_candle";
        MinecraftItemTypes2["PurpleCarpet"] = "minecraft:purple_carpet";
        MinecraftItemTypes2["PurpleConcrete"] = "minecraft:purple_concrete";
        MinecraftItemTypes2["PurpleConcretePowder"] = "minecraft:purple_concrete_powder";
        MinecraftItemTypes2["PurpleDye"] = "minecraft:purple_dye";
        MinecraftItemTypes2["PurpleGlazedTerracotta"] = "minecraft:purple_glazed_terracotta";
        MinecraftItemTypes2["PurpleShulkerBox"] = "minecraft:purple_shulker_box";
        MinecraftItemTypes2["PurpleStainedGlass"] = "minecraft:purple_stained_glass";
        MinecraftItemTypes2["PurpleStainedGlassPane"] = "minecraft:purple_stained_glass_pane";
        MinecraftItemTypes2["PurpleTerracotta"] = "minecraft:purple_terracotta";
        MinecraftItemTypes2["PurpleWool"] = "minecraft:purple_wool";
        MinecraftItemTypes2["PurpurBlock"] = "minecraft:purpur_block";
        MinecraftItemTypes2["PurpurSlab"] = "minecraft:purpur_slab";
        MinecraftItemTypes2["PurpurStairs"] = "minecraft:purpur_stairs";
        MinecraftItemTypes2["Quartz"] = "minecraft:quartz";
        MinecraftItemTypes2["QuartzBlock"] = "minecraft:quartz_block";
        MinecraftItemTypes2["QuartzBricks"] = "minecraft:quartz_bricks";
        MinecraftItemTypes2["QuartzOre"] = "minecraft:quartz_ore";
        MinecraftItemTypes2["QuartzPillar"] = "minecraft:quartz_pillar";
        MinecraftItemTypes2["QuartzSlab"] = "minecraft:quartz_slab";
        MinecraftItemTypes2["QuartzStairs"] = "minecraft:quartz_stairs";
        MinecraftItemTypes2["Rabbit"] = "minecraft:rabbit";
        MinecraftItemTypes2["RabbitFoot"] = "minecraft:rabbit_foot";
        MinecraftItemTypes2["RabbitHide"] = "minecraft:rabbit_hide";
        MinecraftItemTypes2["RabbitSpawnEgg"] = "minecraft:rabbit_spawn_egg";
        MinecraftItemTypes2["RabbitStew"] = "minecraft:rabbit_stew";
        MinecraftItemTypes2["Rail"] = "minecraft:rail";
        MinecraftItemTypes2["RaiserArmorTrimSmithingTemplate"] = "minecraft:raiser_armor_trim_smithing_template";
        MinecraftItemTypes2["RavagerSpawnEgg"] = "minecraft:ravager_spawn_egg";
        MinecraftItemTypes2["RawCopper"] = "minecraft:raw_copper";
        MinecraftItemTypes2["RawCopperBlock"] = "minecraft:raw_copper_block";
        MinecraftItemTypes2["RawGold"] = "minecraft:raw_gold";
        MinecraftItemTypes2["RawGoldBlock"] = "minecraft:raw_gold_block";
        MinecraftItemTypes2["RawIron"] = "minecraft:raw_iron";
        MinecraftItemTypes2["RawIronBlock"] = "minecraft:raw_iron_block";
        MinecraftItemTypes2["RecoveryCompass"] = "minecraft:recovery_compass";
        MinecraftItemTypes2["RedCandle"] = "minecraft:red_candle";
        MinecraftItemTypes2["RedCarpet"] = "minecraft:red_carpet";
        MinecraftItemTypes2["RedConcrete"] = "minecraft:red_concrete";
        MinecraftItemTypes2["RedConcretePowder"] = "minecraft:red_concrete_powder";
        MinecraftItemTypes2["RedDye"] = "minecraft:red_dye";
        MinecraftItemTypes2["RedGlazedTerracotta"] = "minecraft:red_glazed_terracotta";
        MinecraftItemTypes2["RedMushroom"] = "minecraft:red_mushroom";
        MinecraftItemTypes2["RedMushroomBlock"] = "minecraft:red_mushroom_block";
        MinecraftItemTypes2["RedNetherBrick"] = "minecraft:red_nether_brick";
        MinecraftItemTypes2["RedNetherBrickSlab"] = "minecraft:red_nether_brick_slab";
        MinecraftItemTypes2["RedNetherBrickStairs"] = "minecraft:red_nether_brick_stairs";
        MinecraftItemTypes2["RedSand"] = "minecraft:red_sand";
        MinecraftItemTypes2["RedSandstone"] = "minecraft:red_sandstone";
        MinecraftItemTypes2["RedSandstoneSlab"] = "minecraft:red_sandstone_slab";
        MinecraftItemTypes2["RedSandstoneStairs"] = "minecraft:red_sandstone_stairs";
        MinecraftItemTypes2["RedShulkerBox"] = "minecraft:red_shulker_box";
        MinecraftItemTypes2["RedStainedGlass"] = "minecraft:red_stained_glass";
        MinecraftItemTypes2["RedStainedGlassPane"] = "minecraft:red_stained_glass_pane";
        MinecraftItemTypes2["RedTerracotta"] = "minecraft:red_terracotta";
        MinecraftItemTypes2["RedTulip"] = "minecraft:red_tulip";
        MinecraftItemTypes2["RedWool"] = "minecraft:red_wool";
        MinecraftItemTypes2["Redstone"] = "minecraft:redstone";
        MinecraftItemTypes2["RedstoneBlock"] = "minecraft:redstone_block";
        MinecraftItemTypes2["RedstoneLamp"] = "minecraft:redstone_lamp";
        MinecraftItemTypes2["RedstoneOre"] = "minecraft:redstone_ore";
        MinecraftItemTypes2["RedstoneTorch"] = "minecraft:redstone_torch";
        MinecraftItemTypes2["ReinforcedDeepslate"] = "minecraft:reinforced_deepslate";
        MinecraftItemTypes2["Repeater"] = "minecraft:repeater";
        MinecraftItemTypes2["RepeatingCommandBlock"] = "minecraft:repeating_command_block";
        MinecraftItemTypes2["RespawnAnchor"] = "minecraft:respawn_anchor";
        MinecraftItemTypes2["RibArmorTrimSmithingTemplate"] = "minecraft:rib_armor_trim_smithing_template";
        MinecraftItemTypes2["RoseBush"] = "minecraft:rose_bush";
        MinecraftItemTypes2["RottenFlesh"] = "minecraft:rotten_flesh";
        MinecraftItemTypes2["Saddle"] = "minecraft:saddle";
        MinecraftItemTypes2["Salmon"] = "minecraft:salmon";
        MinecraftItemTypes2["SalmonBucket"] = "minecraft:salmon_bucket";
        MinecraftItemTypes2["SalmonSpawnEgg"] = "minecraft:salmon_spawn_egg";
        MinecraftItemTypes2["Sand"] = "minecraft:sand";
        MinecraftItemTypes2["Sandstone"] = "minecraft:sandstone";
        MinecraftItemTypes2["SandstoneSlab"] = "minecraft:sandstone_slab";
        MinecraftItemTypes2["SandstoneStairs"] = "minecraft:sandstone_stairs";
        MinecraftItemTypes2["Scaffolding"] = "minecraft:scaffolding";
        MinecraftItemTypes2["ScrapePotterySherd"] = "minecraft:scrape_pottery_sherd";
        MinecraftItemTypes2["Sculk"] = "minecraft:sculk";
        MinecraftItemTypes2["SculkCatalyst"] = "minecraft:sculk_catalyst";
        MinecraftItemTypes2["SculkSensor"] = "minecraft:sculk_sensor";
        MinecraftItemTypes2["SculkShrieker"] = "minecraft:sculk_shrieker";
        MinecraftItemTypes2["SculkVein"] = "minecraft:sculk_vein";
        MinecraftItemTypes2["SeaLantern"] = "minecraft:sea_lantern";
        MinecraftItemTypes2["SeaPickle"] = "minecraft:sea_pickle";
        MinecraftItemTypes2["Seagrass"] = "minecraft:seagrass";
        MinecraftItemTypes2["SentryArmorTrimSmithingTemplate"] = "minecraft:sentry_armor_trim_smithing_template";
        MinecraftItemTypes2["ShaperArmorTrimSmithingTemplate"] = "minecraft:shaper_armor_trim_smithing_template";
        MinecraftItemTypes2["SheafPotterySherd"] = "minecraft:sheaf_pottery_sherd";
        MinecraftItemTypes2["Shears"] = "minecraft:shears";
        MinecraftItemTypes2["SheepSpawnEgg"] = "minecraft:sheep_spawn_egg";
        MinecraftItemTypes2["ShelterPotterySherd"] = "minecraft:shelter_pottery_sherd";
        MinecraftItemTypes2["Shield"] = "minecraft:shield";
        MinecraftItemTypes2["ShortGrass"] = "minecraft:short_grass";
        MinecraftItemTypes2["Shroomlight"] = "minecraft:shroomlight";
        MinecraftItemTypes2["ShulkerShell"] = "minecraft:shulker_shell";
        MinecraftItemTypes2["ShulkerSpawnEgg"] = "minecraft:shulker_spawn_egg";
        MinecraftItemTypes2["SilenceArmorTrimSmithingTemplate"] = "minecraft:silence_armor_trim_smithing_template";
        MinecraftItemTypes2["SilverGlazedTerracotta"] = "minecraft:silver_glazed_terracotta";
        MinecraftItemTypes2["SilverfishSpawnEgg"] = "minecraft:silverfish_spawn_egg";
        MinecraftItemTypes2["SkeletonHorseSpawnEgg"] = "minecraft:skeleton_horse_spawn_egg";
        MinecraftItemTypes2["SkeletonSpawnEgg"] = "minecraft:skeleton_spawn_egg";
        MinecraftItemTypes2["Skull"] = "minecraft:skull";
        MinecraftItemTypes2["SkullBannerPattern"] = "minecraft:skull_banner_pattern";
        MinecraftItemTypes2["SkullPotterySherd"] = "minecraft:skull_pottery_sherd";
        MinecraftItemTypes2["Slime"] = "minecraft:slime";
        MinecraftItemTypes2["SlimeBall"] = "minecraft:slime_ball";
        MinecraftItemTypes2["SlimeSpawnEgg"] = "minecraft:slime_spawn_egg";
        MinecraftItemTypes2["SmallAmethystBud"] = "minecraft:small_amethyst_bud";
        MinecraftItemTypes2["SmallDripleafBlock"] = "minecraft:small_dripleaf_block";
        MinecraftItemTypes2["SmithingTable"] = "minecraft:smithing_table";
        MinecraftItemTypes2["Smoker"] = "minecraft:smoker";
        MinecraftItemTypes2["SmoothBasalt"] = "minecraft:smooth_basalt";
        MinecraftItemTypes2["SmoothQuartz"] = "minecraft:smooth_quartz";
        MinecraftItemTypes2["SmoothQuartzSlab"] = "minecraft:smooth_quartz_slab";
        MinecraftItemTypes2["SmoothQuartzStairs"] = "minecraft:smooth_quartz_stairs";
        MinecraftItemTypes2["SmoothRedSandstone"] = "minecraft:smooth_red_sandstone";
        MinecraftItemTypes2["SmoothRedSandstoneSlab"] = "minecraft:smooth_red_sandstone_slab";
        MinecraftItemTypes2["SmoothRedSandstoneStairs"] = "minecraft:smooth_red_sandstone_stairs";
        MinecraftItemTypes2["SmoothSandstone"] = "minecraft:smooth_sandstone";
        MinecraftItemTypes2["SmoothSandstoneSlab"] = "minecraft:smooth_sandstone_slab";
        MinecraftItemTypes2["SmoothSandstoneStairs"] = "minecraft:smooth_sandstone_stairs";
        MinecraftItemTypes2["SmoothStone"] = "minecraft:smooth_stone";
        MinecraftItemTypes2["SmoothStoneSlab"] = "minecraft:smooth_stone_slab";
        MinecraftItemTypes2["SnifferEgg"] = "minecraft:sniffer_egg";
        MinecraftItemTypes2["SnifferSpawnEgg"] = "minecraft:sniffer_spawn_egg";
        MinecraftItemTypes2["SnortPotterySherd"] = "minecraft:snort_pottery_sherd";
        MinecraftItemTypes2["SnoutArmorTrimSmithingTemplate"] = "minecraft:snout_armor_trim_smithing_template";
        MinecraftItemTypes2["Snow"] = "minecraft:snow";
        MinecraftItemTypes2["SnowGolemSpawnEgg"] = "minecraft:snow_golem_spawn_egg";
        MinecraftItemTypes2["SnowLayer"] = "minecraft:snow_layer";
        MinecraftItemTypes2["Snowball"] = "minecraft:snowball";
        MinecraftItemTypes2["SoulCampfire"] = "minecraft:soul_campfire";
        MinecraftItemTypes2["SoulLantern"] = "minecraft:soul_lantern";
        MinecraftItemTypes2["SoulSand"] = "minecraft:soul_sand";
        MinecraftItemTypes2["SoulSoil"] = "minecraft:soul_soil";
        MinecraftItemTypes2["SoulTorch"] = "minecraft:soul_torch";
        MinecraftItemTypes2["SpiderEye"] = "minecraft:spider_eye";
        MinecraftItemTypes2["SpiderSpawnEgg"] = "minecraft:spider_spawn_egg";
        MinecraftItemTypes2["SpireArmorTrimSmithingTemplate"] = "minecraft:spire_armor_trim_smithing_template";
        MinecraftItemTypes2["SplashPotion"] = "minecraft:splash_potion";
        MinecraftItemTypes2["Sponge"] = "minecraft:sponge";
        MinecraftItemTypes2["SporeBlossom"] = "minecraft:spore_blossom";
        MinecraftItemTypes2["SpruceBoat"] = "minecraft:spruce_boat";
        MinecraftItemTypes2["SpruceButton"] = "minecraft:spruce_button";
        MinecraftItemTypes2["SpruceChestBoat"] = "minecraft:spruce_chest_boat";
        MinecraftItemTypes2["SpruceDoor"] = "minecraft:spruce_door";
        MinecraftItemTypes2["SpruceFence"] = "minecraft:spruce_fence";
        MinecraftItemTypes2["SpruceFenceGate"] = "minecraft:spruce_fence_gate";
        MinecraftItemTypes2["SpruceHangingSign"] = "minecraft:spruce_hanging_sign";
        MinecraftItemTypes2["SpruceLeaves"] = "minecraft:spruce_leaves";
        MinecraftItemTypes2["SpruceLog"] = "minecraft:spruce_log";
        MinecraftItemTypes2["SprucePlanks"] = "minecraft:spruce_planks";
        MinecraftItemTypes2["SprucePressurePlate"] = "minecraft:spruce_pressure_plate";
        MinecraftItemTypes2["SpruceSapling"] = "minecraft:spruce_sapling";
        MinecraftItemTypes2["SpruceSign"] = "minecraft:spruce_sign";
        MinecraftItemTypes2["SpruceSlab"] = "minecraft:spruce_slab";
        MinecraftItemTypes2["SpruceStairs"] = "minecraft:spruce_stairs";
        MinecraftItemTypes2["SpruceTrapdoor"] = "minecraft:spruce_trapdoor";
        MinecraftItemTypes2["SpruceWood"] = "minecraft:spruce_wood";
        MinecraftItemTypes2["Spyglass"] = "minecraft:spyglass";
        MinecraftItemTypes2["SquidSpawnEgg"] = "minecraft:squid_spawn_egg";
        MinecraftItemTypes2["Stick"] = "minecraft:stick";
        MinecraftItemTypes2["StickyPiston"] = "minecraft:sticky_piston";
        MinecraftItemTypes2["Stone"] = "minecraft:stone";
        MinecraftItemTypes2["StoneAxe"] = "minecraft:stone_axe";
        MinecraftItemTypes2["StoneBrickSlab"] = "minecraft:stone_brick_slab";
        MinecraftItemTypes2["StoneBrickStairs"] = "minecraft:stone_brick_stairs";
        MinecraftItemTypes2["StoneBricks"] = "minecraft:stone_bricks";
        MinecraftItemTypes2["StoneButton"] = "minecraft:stone_button";
        MinecraftItemTypes2["StoneHoe"] = "minecraft:stone_hoe";
        MinecraftItemTypes2["StonePickaxe"] = "minecraft:stone_pickaxe";
        MinecraftItemTypes2["StonePressurePlate"] = "minecraft:stone_pressure_plate";
        MinecraftItemTypes2["StoneShovel"] = "minecraft:stone_shovel";
        MinecraftItemTypes2["StoneStairs"] = "minecraft:stone_stairs";
        MinecraftItemTypes2["StoneSword"] = "minecraft:stone_sword";
        MinecraftItemTypes2["StonecutterBlock"] = "minecraft:stonecutter_block";
        MinecraftItemTypes2["StraySpawnEgg"] = "minecraft:stray_spawn_egg";
        MinecraftItemTypes2["StriderSpawnEgg"] = "minecraft:strider_spawn_egg";
        MinecraftItemTypes2["String"] = "minecraft:string";
        MinecraftItemTypes2["StrippedAcaciaLog"] = "minecraft:stripped_acacia_log";
        MinecraftItemTypes2["StrippedAcaciaWood"] = "minecraft:stripped_acacia_wood";
        MinecraftItemTypes2["StrippedBambooBlock"] = "minecraft:stripped_bamboo_block";
        MinecraftItemTypes2["StrippedBirchLog"] = "minecraft:stripped_birch_log";
        MinecraftItemTypes2["StrippedBirchWood"] = "minecraft:stripped_birch_wood";
        MinecraftItemTypes2["StrippedCherryLog"] = "minecraft:stripped_cherry_log";
        MinecraftItemTypes2["StrippedCherryWood"] = "minecraft:stripped_cherry_wood";
        MinecraftItemTypes2["StrippedCrimsonHyphae"] = "minecraft:stripped_crimson_hyphae";
        MinecraftItemTypes2["StrippedCrimsonStem"] = "minecraft:stripped_crimson_stem";
        MinecraftItemTypes2["StrippedDarkOakLog"] = "minecraft:stripped_dark_oak_log";
        MinecraftItemTypes2["StrippedDarkOakWood"] = "minecraft:stripped_dark_oak_wood";
        MinecraftItemTypes2["StrippedJungleLog"] = "minecraft:stripped_jungle_log";
        MinecraftItemTypes2["StrippedJungleWood"] = "minecraft:stripped_jungle_wood";
        MinecraftItemTypes2["StrippedMangroveLog"] = "minecraft:stripped_mangrove_log";
        MinecraftItemTypes2["StrippedMangroveWood"] = "minecraft:stripped_mangrove_wood";
        MinecraftItemTypes2["StrippedOakLog"] = "minecraft:stripped_oak_log";
        MinecraftItemTypes2["StrippedOakWood"] = "minecraft:stripped_oak_wood";
        MinecraftItemTypes2["StrippedSpruceLog"] = "minecraft:stripped_spruce_log";
        MinecraftItemTypes2["StrippedSpruceWood"] = "minecraft:stripped_spruce_wood";
        MinecraftItemTypes2["StrippedWarpedHyphae"] = "minecraft:stripped_warped_hyphae";
        MinecraftItemTypes2["StrippedWarpedStem"] = "minecraft:stripped_warped_stem";
        MinecraftItemTypes2["StructureBlock"] = "minecraft:structure_block";
        MinecraftItemTypes2["StructureVoid"] = "minecraft:structure_void";
        MinecraftItemTypes2["Sugar"] = "minecraft:sugar";
        MinecraftItemTypes2["SugarCane"] = "minecraft:sugar_cane";
        MinecraftItemTypes2["Sunflower"] = "minecraft:sunflower";
        MinecraftItemTypes2["SuspiciousGravel"] = "minecraft:suspicious_gravel";
        MinecraftItemTypes2["SuspiciousSand"] = "minecraft:suspicious_sand";
        MinecraftItemTypes2["SuspiciousStew"] = "minecraft:suspicious_stew";
        MinecraftItemTypes2["SweetBerries"] = "minecraft:sweet_berries";
        MinecraftItemTypes2["TadpoleBucket"] = "minecraft:tadpole_bucket";
        MinecraftItemTypes2["TadpoleSpawnEgg"] = "minecraft:tadpole_spawn_egg";
        MinecraftItemTypes2["TallGrass"] = "minecraft:tall_grass";
        MinecraftItemTypes2["Target"] = "minecraft:target";
        MinecraftItemTypes2["TideArmorTrimSmithingTemplate"] = "minecraft:tide_armor_trim_smithing_template";
        MinecraftItemTypes2["TintedGlass"] = "minecraft:tinted_glass";
        MinecraftItemTypes2["Tnt"] = "minecraft:tnt";
        MinecraftItemTypes2["TntMinecart"] = "minecraft:tnt_minecart";
        MinecraftItemTypes2["Torch"] = "minecraft:torch";
        MinecraftItemTypes2["Torchflower"] = "minecraft:torchflower";
        MinecraftItemTypes2["TorchflowerSeeds"] = "minecraft:torchflower_seeds";
        MinecraftItemTypes2["TotemOfUndying"] = "minecraft:totem_of_undying";
        MinecraftItemTypes2["TraderLlamaSpawnEgg"] = "minecraft:trader_llama_spawn_egg";
        MinecraftItemTypes2["Trapdoor"] = "minecraft:trapdoor";
        MinecraftItemTypes2["TrappedChest"] = "minecraft:trapped_chest";
        MinecraftItemTypes2["TrialKey"] = "minecraft:trial_key";
        MinecraftItemTypes2["TrialSpawner"] = "minecraft:trial_spawner";
        MinecraftItemTypes2["Trident"] = "minecraft:trident";
        MinecraftItemTypes2["TripwireHook"] = "minecraft:tripwire_hook";
        MinecraftItemTypes2["TropicalFish"] = "minecraft:tropical_fish";
        MinecraftItemTypes2["TropicalFishBucket"] = "minecraft:tropical_fish_bucket";
        MinecraftItemTypes2["TropicalFishSpawnEgg"] = "minecraft:tropical_fish_spawn_egg";
        MinecraftItemTypes2["TubeCoral"] = "minecraft:tube_coral";
        MinecraftItemTypes2["TubeCoralBlock"] = "minecraft:tube_coral_block";
        MinecraftItemTypes2["TubeCoralFan"] = "minecraft:tube_coral_fan";
        MinecraftItemTypes2["Tuff"] = "minecraft:tuff";
        MinecraftItemTypes2["TuffBrickSlab"] = "minecraft:tuff_brick_slab";
        MinecraftItemTypes2["TuffBrickStairs"] = "minecraft:tuff_brick_stairs";
        MinecraftItemTypes2["TuffBrickWall"] = "minecraft:tuff_brick_wall";
        MinecraftItemTypes2["TuffBricks"] = "minecraft:tuff_bricks";
        MinecraftItemTypes2["TuffSlab"] = "minecraft:tuff_slab";
        MinecraftItemTypes2["TuffStairs"] = "minecraft:tuff_stairs";
        MinecraftItemTypes2["TuffWall"] = "minecraft:tuff_wall";
        MinecraftItemTypes2["TurtleEgg"] = "minecraft:turtle_egg";
        MinecraftItemTypes2["TurtleHelmet"] = "minecraft:turtle_helmet";
        MinecraftItemTypes2["TurtleScute"] = "minecraft:turtle_scute";
        MinecraftItemTypes2["TurtleSpawnEgg"] = "minecraft:turtle_spawn_egg";
        MinecraftItemTypes2["TwistingVines"] = "minecraft:twisting_vines";
        MinecraftItemTypes2["UndyedShulkerBox"] = "minecraft:undyed_shulker_box";
        MinecraftItemTypes2["Vault"] = "minecraft:vault";
        MinecraftItemTypes2["VerdantFroglight"] = "minecraft:verdant_froglight";
        MinecraftItemTypes2["VexArmorTrimSmithingTemplate"] = "minecraft:vex_armor_trim_smithing_template";
        MinecraftItemTypes2["VexSpawnEgg"] = "minecraft:vex_spawn_egg";
        MinecraftItemTypes2["VillagerSpawnEgg"] = "minecraft:villager_spawn_egg";
        MinecraftItemTypes2["VindicatorSpawnEgg"] = "minecraft:vindicator_spawn_egg";
        MinecraftItemTypes2["Vine"] = "minecraft:vine";
        MinecraftItemTypes2["WanderingTraderSpawnEgg"] = "minecraft:wandering_trader_spawn_egg";
        MinecraftItemTypes2["WardArmorTrimSmithingTemplate"] = "minecraft:ward_armor_trim_smithing_template";
        MinecraftItemTypes2["WardenSpawnEgg"] = "minecraft:warden_spawn_egg";
        MinecraftItemTypes2["WarpedButton"] = "minecraft:warped_button";
        MinecraftItemTypes2["WarpedDoor"] = "minecraft:warped_door";
        MinecraftItemTypes2["WarpedFence"] = "minecraft:warped_fence";
        MinecraftItemTypes2["WarpedFenceGate"] = "minecraft:warped_fence_gate";
        MinecraftItemTypes2["WarpedFungus"] = "minecraft:warped_fungus";
        MinecraftItemTypes2["WarpedFungusOnAStick"] = "minecraft:warped_fungus_on_a_stick";
        MinecraftItemTypes2["WarpedHangingSign"] = "minecraft:warped_hanging_sign";
        MinecraftItemTypes2["WarpedHyphae"] = "minecraft:warped_hyphae";
        MinecraftItemTypes2["WarpedNylium"] = "minecraft:warped_nylium";
        MinecraftItemTypes2["WarpedPlanks"] = "minecraft:warped_planks";
        MinecraftItemTypes2["WarpedPressurePlate"] = "minecraft:warped_pressure_plate";
        MinecraftItemTypes2["WarpedRoots"] = "minecraft:warped_roots";
        MinecraftItemTypes2["WarpedSign"] = "minecraft:warped_sign";
        MinecraftItemTypes2["WarpedSlab"] = "minecraft:warped_slab";
        MinecraftItemTypes2["WarpedStairs"] = "minecraft:warped_stairs";
        MinecraftItemTypes2["WarpedStem"] = "minecraft:warped_stem";
        MinecraftItemTypes2["WarpedTrapdoor"] = "minecraft:warped_trapdoor";
        MinecraftItemTypes2["WarpedWartBlock"] = "minecraft:warped_wart_block";
        MinecraftItemTypes2["WaterBucket"] = "minecraft:water_bucket";
        MinecraftItemTypes2["Waterlily"] = "minecraft:waterlily";
        MinecraftItemTypes2["WaxedChiseledCopper"] = "minecraft:waxed_chiseled_copper";
        MinecraftItemTypes2["WaxedCopper"] = "minecraft:waxed_copper";
        MinecraftItemTypes2["WaxedCopperBulb"] = "minecraft:waxed_copper_bulb";
        MinecraftItemTypes2["WaxedCopperDoor"] = "minecraft:waxed_copper_door";
        MinecraftItemTypes2["WaxedCopperGrate"] = "minecraft:waxed_copper_grate";
        MinecraftItemTypes2["WaxedCopperTrapdoor"] = "minecraft:waxed_copper_trapdoor";
        MinecraftItemTypes2["WaxedCutCopper"] = "minecraft:waxed_cut_copper";
        MinecraftItemTypes2["WaxedCutCopperSlab"] = "minecraft:waxed_cut_copper_slab";
        MinecraftItemTypes2["WaxedCutCopperStairs"] = "minecraft:waxed_cut_copper_stairs";
        MinecraftItemTypes2["WaxedExposedChiseledCopper"] = "minecraft:waxed_exposed_chiseled_copper";
        MinecraftItemTypes2["WaxedExposedCopper"] = "minecraft:waxed_exposed_copper";
        MinecraftItemTypes2["WaxedExposedCopperBulb"] = "minecraft:waxed_exposed_copper_bulb";
        MinecraftItemTypes2["WaxedExposedCopperDoor"] = "minecraft:waxed_exposed_copper_door";
        MinecraftItemTypes2["WaxedExposedCopperGrate"] = "minecraft:waxed_exposed_copper_grate";
        MinecraftItemTypes2["WaxedExposedCopperTrapdoor"] = "minecraft:waxed_exposed_copper_trapdoor";
        MinecraftItemTypes2["WaxedExposedCutCopper"] = "minecraft:waxed_exposed_cut_copper";
        MinecraftItemTypes2["WaxedExposedCutCopperSlab"] = "minecraft:waxed_exposed_cut_copper_slab";
        MinecraftItemTypes2["WaxedExposedCutCopperStairs"] = "minecraft:waxed_exposed_cut_copper_stairs";
        MinecraftItemTypes2["WaxedOxidizedChiseledCopper"] = "minecraft:waxed_oxidized_chiseled_copper";
        MinecraftItemTypes2["WaxedOxidizedCopper"] = "minecraft:waxed_oxidized_copper";
        MinecraftItemTypes2["WaxedOxidizedCopperBulb"] = "minecraft:waxed_oxidized_copper_bulb";
        MinecraftItemTypes2["WaxedOxidizedCopperDoor"] = "minecraft:waxed_oxidized_copper_door";
        MinecraftItemTypes2["WaxedOxidizedCopperGrate"] = "minecraft:waxed_oxidized_copper_grate";
        MinecraftItemTypes2["WaxedOxidizedCopperTrapdoor"] = "minecraft:waxed_oxidized_copper_trapdoor";
        MinecraftItemTypes2["WaxedOxidizedCutCopper"] = "minecraft:waxed_oxidized_cut_copper";
        MinecraftItemTypes2["WaxedOxidizedCutCopperSlab"] = "minecraft:waxed_oxidized_cut_copper_slab";
        MinecraftItemTypes2["WaxedOxidizedCutCopperStairs"] = "minecraft:waxed_oxidized_cut_copper_stairs";
        MinecraftItemTypes2["WaxedWeatheredChiseledCopper"] = "minecraft:waxed_weathered_chiseled_copper";
        MinecraftItemTypes2["WaxedWeatheredCopper"] = "minecraft:waxed_weathered_copper";
        MinecraftItemTypes2["WaxedWeatheredCopperBulb"] = "minecraft:waxed_weathered_copper_bulb";
        MinecraftItemTypes2["WaxedWeatheredCopperDoor"] = "minecraft:waxed_weathered_copper_door";
        MinecraftItemTypes2["WaxedWeatheredCopperGrate"] = "minecraft:waxed_weathered_copper_grate";
        MinecraftItemTypes2["WaxedWeatheredCopperTrapdoor"] = "minecraft:waxed_weathered_copper_trapdoor";
        MinecraftItemTypes2["WaxedWeatheredCutCopper"] = "minecraft:waxed_weathered_cut_copper";
        MinecraftItemTypes2["WaxedWeatheredCutCopperSlab"] = "minecraft:waxed_weathered_cut_copper_slab";
        MinecraftItemTypes2["WaxedWeatheredCutCopperStairs"] = "minecraft:waxed_weathered_cut_copper_stairs";
        MinecraftItemTypes2["WayfinderArmorTrimSmithingTemplate"] = "minecraft:wayfinder_armor_trim_smithing_template";
        MinecraftItemTypes2["WeatheredChiseledCopper"] = "minecraft:weathered_chiseled_copper";
        MinecraftItemTypes2["WeatheredCopper"] = "minecraft:weathered_copper";
        MinecraftItemTypes2["WeatheredCopperBulb"] = "minecraft:weathered_copper_bulb";
        MinecraftItemTypes2["WeatheredCopperDoor"] = "minecraft:weathered_copper_door";
        MinecraftItemTypes2["WeatheredCopperGrate"] = "minecraft:weathered_copper_grate";
        MinecraftItemTypes2["WeatheredCopperTrapdoor"] = "minecraft:weathered_copper_trapdoor";
        MinecraftItemTypes2["WeatheredCutCopper"] = "minecraft:weathered_cut_copper";
        MinecraftItemTypes2["WeatheredCutCopperSlab"] = "minecraft:weathered_cut_copper_slab";
        MinecraftItemTypes2["WeatheredCutCopperStairs"] = "minecraft:weathered_cut_copper_stairs";
        MinecraftItemTypes2["Web"] = "minecraft:web";
        MinecraftItemTypes2["WeepingVines"] = "minecraft:weeping_vines";
        MinecraftItemTypes2["Wheat"] = "minecraft:wheat";
        MinecraftItemTypes2["WheatSeeds"] = "minecraft:wheat_seeds";
        MinecraftItemTypes2["WhiteCandle"] = "minecraft:white_candle";
        MinecraftItemTypes2["WhiteCarpet"] = "minecraft:white_carpet";
        MinecraftItemTypes2["WhiteConcrete"] = "minecraft:white_concrete";
        MinecraftItemTypes2["WhiteConcretePowder"] = "minecraft:white_concrete_powder";
        MinecraftItemTypes2["WhiteDye"] = "minecraft:white_dye";
        MinecraftItemTypes2["WhiteGlazedTerracotta"] = "minecraft:white_glazed_terracotta";
        MinecraftItemTypes2["WhiteShulkerBox"] = "minecraft:white_shulker_box";
        MinecraftItemTypes2["WhiteStainedGlass"] = "minecraft:white_stained_glass";
        MinecraftItemTypes2["WhiteStainedGlassPane"] = "minecraft:white_stained_glass_pane";
        MinecraftItemTypes2["WhiteTerracotta"] = "minecraft:white_terracotta";
        MinecraftItemTypes2["WhiteTulip"] = "minecraft:white_tulip";
        MinecraftItemTypes2["WhiteWool"] = "minecraft:white_wool";
        MinecraftItemTypes2["WildArmorTrimSmithingTemplate"] = "minecraft:wild_armor_trim_smithing_template";
        MinecraftItemTypes2["WindCharge"] = "minecraft:wind_charge";
        MinecraftItemTypes2["WitchSpawnEgg"] = "minecraft:witch_spawn_egg";
        MinecraftItemTypes2["WitherRose"] = "minecraft:wither_rose";
        MinecraftItemTypes2["WitherSkeletonSpawnEgg"] = "minecraft:wither_skeleton_spawn_egg";
        MinecraftItemTypes2["WitherSpawnEgg"] = "minecraft:wither_spawn_egg";
        MinecraftItemTypes2["WolfArmor"] = "minecraft:wolf_armor";
        MinecraftItemTypes2["WolfSpawnEgg"] = "minecraft:wolf_spawn_egg";
        MinecraftItemTypes2["WoodenAxe"] = "minecraft:wooden_axe";
        MinecraftItemTypes2["WoodenButton"] = "minecraft:wooden_button";
        MinecraftItemTypes2["WoodenDoor"] = "minecraft:wooden_door";
        MinecraftItemTypes2["WoodenHoe"] = "minecraft:wooden_hoe";
        MinecraftItemTypes2["WoodenPickaxe"] = "minecraft:wooden_pickaxe";
        MinecraftItemTypes2["WoodenPressurePlate"] = "minecraft:wooden_pressure_plate";
        MinecraftItemTypes2["WoodenShovel"] = "minecraft:wooden_shovel";
        MinecraftItemTypes2["WoodenSword"] = "minecraft:wooden_sword";
        MinecraftItemTypes2["WritableBook"] = "minecraft:writable_book";
        MinecraftItemTypes2["YellowCandle"] = "minecraft:yellow_candle";
        MinecraftItemTypes2["YellowCarpet"] = "minecraft:yellow_carpet";
        MinecraftItemTypes2["YellowConcrete"] = "minecraft:yellow_concrete";
        MinecraftItemTypes2["YellowConcretePowder"] = "minecraft:yellow_concrete_powder";
        MinecraftItemTypes2["YellowDye"] = "minecraft:yellow_dye";
        MinecraftItemTypes2["YellowGlazedTerracotta"] = "minecraft:yellow_glazed_terracotta";
        MinecraftItemTypes2["YellowShulkerBox"] = "minecraft:yellow_shulker_box";
        MinecraftItemTypes2["YellowStainedGlass"] = "minecraft:yellow_stained_glass";
        MinecraftItemTypes2["YellowStainedGlassPane"] = "minecraft:yellow_stained_glass_pane";
        MinecraftItemTypes2["YellowTerracotta"] = "minecraft:yellow_terracotta";
        MinecraftItemTypes2["YellowWool"] = "minecraft:yellow_wool";
        MinecraftItemTypes2["ZoglinSpawnEgg"] = "minecraft:zoglin_spawn_egg";
        MinecraftItemTypes2["ZombieHorseSpawnEgg"] = "minecraft:zombie_horse_spawn_egg";
        MinecraftItemTypes2["ZombiePigmanSpawnEgg"] = "minecraft:zombie_pigman_spawn_egg";
        MinecraftItemTypes2["ZombieSpawnEgg"] = "minecraft:zombie_spawn_egg";
        MinecraftItemTypes2["ZombieVillagerSpawnEgg"] = "minecraft:zombie_villager_spawn_egg";
        return MinecraftItemTypes2;
    })(MinecraftItemTypes || {});
    var MinecraftPotionEffectTypes = (MinecraftPotionEffectTypes2 => {
        MinecraftPotionEffectTypes2["FireResistance"] = "FireResistance";
        MinecraftPotionEffectTypes2["Harming"] = "Harming";
        MinecraftPotionEffectTypes2["Healing"] = "Healing";
        MinecraftPotionEffectTypes2["Infested"] = "Infested";
        MinecraftPotionEffectTypes2["Invisibility"] = "Invisibility";
        MinecraftPotionEffectTypes2["Leaping"] = "Leaping";
        MinecraftPotionEffectTypes2["NightVision"] = "NightVision";
        MinecraftPotionEffectTypes2["None"] = "None";
        MinecraftPotionEffectTypes2["Oozing"] = "Oozing";
        MinecraftPotionEffectTypes2["Poison"] = "Poison";
        MinecraftPotionEffectTypes2["SlowFalling"] = "SlowFalling";
        MinecraftPotionEffectTypes2["Slowing"] = "Slowing";
        MinecraftPotionEffectTypes2["Strength"] = "Strength";
        MinecraftPotionEffectTypes2["Swiftness"] = "Swiftness";
        MinecraftPotionEffectTypes2["TurtleMaster"] = "TurtleMaster";
        MinecraftPotionEffectTypes2["WaterBreath"] = "WaterBreath";
        MinecraftPotionEffectTypes2["Weakness"] = "Weakness";
        MinecraftPotionEffectTypes2["Weaving"] = "Weaving";
        MinecraftPotionEffectTypes2["WindCharged"] = "WindCharged";
        MinecraftPotionEffectTypes2["Wither"] = "Wither";
        return MinecraftPotionEffectTypes2;
    })(MinecraftPotionEffectTypes || {});
    var MinecraftPotionLiquidTypes = (MinecraftPotionLiquidTypes2 => {
        MinecraftPotionLiquidTypes2["Lingering"] = "Lingering";
        MinecraftPotionLiquidTypes2["Regular"] = "Regular";
        MinecraftPotionLiquidTypes2["Splash"] = "Splash";
        return MinecraftPotionLiquidTypes2;
    })(MinecraftPotionLiquidTypes || {});
    var MinecraftPotionModifierTypes = (MinecraftPotionModifierTypes2 => {
        MinecraftPotionModifierTypes2["Long"] = "Long";
        MinecraftPotionModifierTypes2["Normal"] = "Normal";
        MinecraftPotionModifierTypes2["Strong"] = "Strong";
        return MinecraftPotionModifierTypes2;
    })(MinecraftPotionModifierTypes || {});
    async function deleteOperation(uiSession) {
        if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
            uiSession.log.warning("Selection volume is empty - nothing to clear");
            return;
        }
        const player = uiSession.extensionContext.player;
        const dimension = player.dimension;
        const selectionToBeUsed = uiSession.extensionContext.selectionManager.create();
        selectionToBeUsed.set(uiSession.extensionContext.selectionManager.selection);
        const operation = blockLocation => {
            const block = dimension.getBlock(blockLocation);
            if (block) {
                block.setWaterlogged(false);
                block.setType(MinecraftBlockTypes.Air);
            }
        };
        const onError = e => {
            uiSession.log.error(e.message);
        };
        await executeLargeOperationWithTransactionAndTicking(uiSession.extensionContext, selectionToBeUsed, "Delete", operation).catch(onError);
    }
    const MAX_OFFSET = new lib.Vector3Builder(31, 31, 31);
    const MIN_OFFSET = new lib.Vector3Builder(-31, -31, -31);
    const rotationOrder = [ server_namespaceObject.StructureRotation.None, server_namespaceObject.StructureRotation.Rotate90, server_namespaceObject.StructureRotation.Rotate180, server_namespaceObject.StructureRotation.Rotate270 ];
    function convertMirrorAxisPairToEnum(mirrorX, mirrorZ) {
        if (mirrorX && mirrorZ) {
            return server_namespaceObject.StructureMirrorAxis.XZ;
        } else if (mirrorX) {
            return server_namespaceObject.StructureMirrorAxis.X;
        } else if (mirrorZ) {
            return server_namespaceObject.StructureMirrorAxis.Z;
        }
        return server_namespaceObject.StructureMirrorAxis.None;
    }
    class PastePreviewBehavior {
        constructor(session, fallbackToolId) {
            this._isPastePreviewActive = false;
            this._fillVolume = async (dimension, volume, fillBlockType) => {
                const operation = blockLocation => {
                    const block = dimension.getBlock(blockLocation);
                    if (block) {
                        block.setType(fillBlockType);
                    }
                };
                await executeLargeOperationFromIteratorWithTransactionAndTicking(this._session.extensionContext, volume.getBoundingBox(), volume.getBlockLocationIterator(), "Inverse Paste", operation);
            };
            this._session = session;
            this._fallbackToolId = fallbackToolId;
            this._preservedCursorProperties = this._session.extensionContext.cursor.getProperties();
            this._currentCursorProperties = {
                ...this._preservedCursorProperties
            };
            const activatePastePreviewAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this._session.toolRail.setSelectedOptionId(this._tool.id, true);
                    this.activatePastePreview();
                }
            });
            this._tool = this._session.toolRail.addTool({
                title: "resourcePack.editor.pastepreview.tool.title",
                icon: "pack://textures/editor/Paste.png?filtering=point",
                tooltip: "resourcePack.editor.pastepreview.tool.tip",
                inputContextId: "editor:pastePreview",
                inputContextLabel: "resourcePack.editor.pastepreview.tool.title"
            }, activatePastePreviewAction);
            this._tool.onModalToolActivation.subscribe((eventData => {
                eventData.isActiveTool ? this.onActivateTool() : this.onDeactivateTool();
            }));
            this._pane = this._session.createPropertyPane({
                title: "resourcePack.editor.pastepreview.pane.root.title"
            });
            this._session.extensionContext.afterEvents.clipboardChange.subscribe((() => {
                this._log("Clipboard contents have changed");
                this.onClipboardItemContentsChanged();
            }));
            const clipboardItem = this._session.extensionContext.clipboardManager.clipboard;
            const itemOrigin = this.calculateCenterOfClipboardItemBase(clipboardItem);
            const initialBindingData = {
                size: clipboardItem.getSize(),
                origin: itemOrigin,
                offset: new lib.Vector3Builder(0, 0, 0),
                rotationIndex: 0,
                mirrorX: false,
                mirrorZ: false,
                mouseControlMode: this._preservedCursorProperties.controlMode ?? server_editor_namespaceObject.CursorControlMode.KeyboardAndMouse,
                cursorTargetMode: this._preservedCursorProperties.targetMode ?? server_editor_namespaceObject.CursorTargetMode.Block,
                boundsVisible: true
            };
            this._uiPaneBindingData = (0, server_editor_namespaceObject.bindDataSource)(this._pane, initialBindingData);
            this._pane.addVector3_deprecated(this._uiPaneBindingData, "size", {
                title: "resourcePack.editor.pastepreview.pane.root.size",
                enable: false
            });
            this._panePlacement = this._pane.createPropertyPane({
                title: "resourcePack.editor.pastepreview.pane.placement.title"
            });
            this._originVec3Control = this._panePlacement.addVector3_deprecated(this._uiPaneBindingData, "origin", {
                title: "resourcePack.editor.pastepreview.pane.placement.origin",
                minX: 0,
                minY: 0,
                minZ: 0,
                maxX: MAX_OFFSET.x,
                maxY: MAX_OFFSET.y,
                maxZ: MAX_OFFSET.z,
                onChange: (_obj, _property, _oldValue, _newValue) => {
                    const maxSize = lib.Vector3Utils.subtract(this._uiPaneBindingData.size, lib.VECTOR3_ONE);
                    const updated = lib.Vector3Utils.clamp(this._uiPaneBindingData.origin, {
                        min: lib.VECTOR3_ZERO,
                        max: maxSize
                    });
                    this._uiPaneBindingData.origin = updated;
                    this._session.extensionContext.cursor.setAttachmentProperties({
                        origin: updated
                    });
                }
            });
            this._panePlacement.addVector3_deprecated(this._uiPaneBindingData, "offset", {
                title: "resourcePack.editor.pastepreview.pane.placement.offset",
                minX: MIN_OFFSET.x,
                minY: MIN_OFFSET.y,
                minZ: MIN_OFFSET.z,
                maxX: MAX_OFFSET.x,
                maxY: MAX_OFFSET.y,
                maxZ: MAX_OFFSET.z,
                onChange: (_obj, _property, _oldValue, _newValue) => {
                    const updated = lib.Vector3Utils.clamp(this._uiPaneBindingData.offset, {
                        min: MIN_OFFSET,
                        max: MAX_OFFSET
                    });
                    this._uiPaneBindingData.offset = updated;
                    this._session.extensionContext.cursor.setAttachmentProperties({
                        offset: updated
                    });
                }
            });
            this._panePlacement.addDropdown(this._uiPaneBindingData, "rotationIndex", {
                title: "resourcePack.editor.pastepreview.pane.placement.rotation",
                dropdownItems: [ {
                    label: "0°",
                    value: 0
                }, {
                    label: "90°",
                    value: 1
                }, {
                    label: "180°",
                    value: 2
                }, {
                    label: "270°",
                    value: 3
                } ],
                onChange: (_obj, _property, _oldValue, _newValue) => {
                    this._session.extensionContext.cursor.setAttachmentProperties({
                        rotation: rotationOrder[this._uiPaneBindingData.rotationIndex]
                    });
                }
            });
            this._panePlacement.addBool_deprecated(this._uiPaneBindingData, "mirrorX", {
                title: "resourcePack.editor.pastepreview.pane.placement.mirrorX",
                onChange: (_obj, _property, _oldValue, _newValue) => {
                    const mirror = convertMirrorAxisPairToEnum(this._uiPaneBindingData.mirrorX, this._uiPaneBindingData.mirrorZ);
                    this._session.extensionContext.cursor.setAttachmentProperties({
                        mirror
                    });
                }
            });
            this._panePlacement.addBool_deprecated(this._uiPaneBindingData, "mirrorZ", {
                title: "resourcePack.editor.pastepreview.pane.placement.mirrorZ",
                onChange: (_obj, _property, _oldValue, _newValue) => {
                    const mirror = convertMirrorAxisPairToEnum(this._uiPaneBindingData.mirrorX, this._uiPaneBindingData.mirrorZ);
                    this._session.extensionContext.cursor.setAttachmentProperties({
                        mirror
                    });
                }
            });
            const pasteAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const pasteToCursorOnly = this._isPastePreviewActive;
                    this.pasteClipboardTo(pasteToCursorOnly);
                }
            });
            this._pane.addButton(pasteAction, {
                title: "resourcePack.editor.pastepreview.pane.placement.pastebutton"
            });
            this._paneControls = this._pane.createPropertyPane({
                title: "resourcePack.editor.pastepreview.pane.controls.title"
            });
            this._paneControls.addDropdown(this._uiPaneBindingData, "mouseControlMode", {
                title: "resourcePack.editor.pastepreview.pane.controls.cursor",
                dropdownItems: [ {
                    label: "resourcePack.editor.pastepreview.pane.controls.cursor.keyboard",
                    value: 0
                }, {
                    label: "resourcePack.editor.pastepreview.pane.controls.cursor.mouseandkeys",
                    value: 2
                }, {
                    label: "resourcePack.editor.pastepreview.pane.controls.cursor.fixed",
                    value: 3
                } ],
                onChange: (_obj, _property, _oldValue, _newValue) => {
                    this._session.extensionContext.cursor.setProperties({
                        controlMode: this._uiPaneBindingData.mouseControlMode
                    });
                    this._currentCursorProperties.controlMode = this._uiPaneBindingData.mouseControlMode;
                }
            });
            this._paneControls.addDropdown(this._uiPaneBindingData, "cursorTargetMode", {
                title: "resourcePack.editor.pastepreview.pane.controls.cursor.target.title",
                dropdownItems: [ {
                    label: "resourcePack.editor.pastepreview.pane.controls.cursor.target.block",
                    value: 0
                }, {
                    label: "resourcePack.editor.pastepreview.pane.controls.cursor.target.face",
                    value: 1
                } ],
                onChange: (_obj, _property, _oldValue, _newValue) => {
                    this._session.extensionContext.cursor.setProperties({
                        targetMode: this._uiPaneBindingData.cursorTargetMode
                    });
                }
            });
            this._paneDebug = this._pane.createPropertyPane({
                title: "Debug"
            });
            this._paneDebug.addBool_deprecated(this._uiPaneBindingData, "boundsVisible", {
                title: "Bounding Box",
                onChange: (_obj, _property, _oldValue, _newValue) => {
                    this._session.extensionContext.cursor.setAttachmentProperties({
                        boundsVisible: this._uiPaneBindingData.boundsVisible
                    });
                },
                displayAsToggleSwitch: true
            });
            this._tool.bindPropertyPane(this._pane);
            this._session.inputManager.registerKeyBinding(server_editor_namespaceObject.EditorInputContext.GlobalToolMode, this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: async () => {
                    await this.copySelectionToClipboard();
                }
            }), {
                key: server_editor_namespaceObject.KeyboardKey.KEY_C,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, {
                uniqueId: "editor:toolModeKeyBinding:copySelection",
                label: "resourcePack.editor.pastepreview.keyBinding.copy"
            });
            this._session.inputManager.registerKeyBinding(server_editor_namespaceObject.EditorInputContext.GlobalToolMode, this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: async () => {
                    await this.copySelectionToClipboard();
                    deleteOperation(this._session).catch((e => this._session.log.error(e.message)));
                }
            }), {
                key: server_editor_namespaceObject.KeyboardKey.KEY_X,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, {
                uniqueId: "editor:toolModeKeyBinding:cutSelection",
                label: "resourcePack.editor.pastepreview.keyBinding.cut"
            });
            this._session.inputManager.registerKeyBinding(server_editor_namespaceObject.EditorInputContext.GlobalToolMode, pasteAction, {
                key: server_editor_namespaceObject.KeyboardKey.KEY_V,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, {
                uniqueId: "editor:toolModeKeyBinding:quickPaste",
                label: "resourcePack.editor.pastepreview.keyBinding.quickPaste"
            });
            this._session.inputManager.registerKeyBinding(server_editor_namespaceObject.EditorInputContext.GlobalToolMode, activatePastePreviewAction, {
                key: server_editor_namespaceObject.KeyboardKey.KEY_V,
                modifier: server_editor_namespaceObject.InputModifier.Control | server_editor_namespaceObject.InputModifier.Shift
            }, {
                uniqueId: "editor:toolModeKeyBinding:paste",
                label: "resourcePack.editor.pastepreview.keyBinding.paste"
            });
            const deactivatePreviewAndFallbackAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.deactivatePastePreview();
                    this.activateFallbackTool();
                }
            });
            this._registerToolKeyBinding(deactivatePreviewAndFallbackAction, {
                key: server_editor_namespaceObject.KeyboardKey.KEY_D,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, "clearPreview");
            this._tool.registerKeyBinding(deactivatePreviewAndFallbackAction, {
                key: server_editor_namespaceObject.KeyboardKey.ESCAPE
            });
            const keyUpAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.nudgeCursor(lib.VECTOR3_UP);
                }
            });
            const keyDownAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.nudgeCursor(lib.VECTOR3_DOWN);
                }
            });
            const keyLeftAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(Direction.Left);
                    this.nudgeCursor(nudgeVector);
                }
            });
            const keyRightAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(Direction.Right);
                    this.nudgeCursor(nudgeVector);
                }
            });
            const keyForwardAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(Direction.Forward);
                    this.nudgeCursor(nudgeVector);
                }
            });
            const keyBackAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(Direction.Back);
                    this.nudgeCursor(nudgeVector);
                }
            });
            this._registerToolKeyBinding(keyForwardAction, {
                key: server_editor_namespaceObject.KeyboardKey.UP
            }, "moveForward");
            this._registerToolKeyBinding(keyBackAction, {
                key: server_editor_namespaceObject.KeyboardKey.DOWN
            }, "moveBack");
            this._registerToolKeyBinding(keyLeftAction, {
                key: server_editor_namespaceObject.KeyboardKey.LEFT
            }, "moveLeft");
            this._registerToolKeyBinding(keyRightAction, {
                key: server_editor_namespaceObject.KeyboardKey.RIGHT
            }, "moveRight");
            this._registerToolKeyBinding(keyUpAction, {
                key: server_editor_namespaceObject.KeyboardKey.PAGE_UP
            }, "moveUp");
            this._registerToolKeyBinding(keyDownAction, {
                key: server_editor_namespaceObject.KeyboardKey.PAGE_DOWN
            }, "moveDown");
            const keyOffsetUpAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.nudgeOffset(lib.VECTOR3_UP);
                }
            });
            const keyOffsetDownAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.nudgeOffset(lib.VECTOR3_DOWN);
                }
            });
            const keyOffsetLeftAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(Direction.Left);
                    this.nudgeOffset(nudgeVector);
                }
            });
            const keyOffsetRightAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(Direction.Right);
                    this.nudgeOffset(nudgeVector);
                }
            });
            const keyOffsetForwardAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(Direction.Forward);
                    this.nudgeOffset(nudgeVector);
                }
            });
            const keyOffsetBackAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(Direction.Back);
                    this.nudgeOffset(nudgeVector);
                }
            });
            this._registerToolKeyBinding(keyOffsetForwardAction, {
                key: server_editor_namespaceObject.KeyboardKey.UP,
                modifier: server_editor_namespaceObject.InputModifier.Control | server_editor_namespaceObject.InputModifier.Shift
            }, "moveOffsetForward");
            this._registerToolKeyBinding(keyOffsetBackAction, {
                key: server_editor_namespaceObject.KeyboardKey.DOWN,
                modifier: server_editor_namespaceObject.InputModifier.Control | server_editor_namespaceObject.InputModifier.Shift
            }, "moveOffsetBack");
            this._registerToolKeyBinding(keyOffsetLeftAction, {
                key: server_editor_namespaceObject.KeyboardKey.LEFT,
                modifier: server_editor_namespaceObject.InputModifier.Control | server_editor_namespaceObject.InputModifier.Shift
            }, "moveOffsetLeft");
            this._registerToolKeyBinding(keyOffsetRightAction, {
                key: server_editor_namespaceObject.KeyboardKey.RIGHT,
                modifier: server_editor_namespaceObject.InputModifier.Control | server_editor_namespaceObject.InputModifier.Shift
            }, "moveOffsetRight");
            this._registerToolKeyBinding(keyOffsetUpAction, {
                key: server_editor_namespaceObject.KeyboardKey.PAGE_UP,
                modifier: server_editor_namespaceObject.InputModifier.Control | server_editor_namespaceObject.InputModifier.Shift
            }, "moveOffsetUp");
            this._registerToolKeyBinding(keyOffsetDownAction, {
                key: server_editor_namespaceObject.KeyboardKey.PAGE_DOWN,
                modifier: server_editor_namespaceObject.InputModifier.Control | server_editor_namespaceObject.InputModifier.Shift
            }, "moveOffsetDown");
            const keyOriginUpAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.nudgeOrigin(lib.VECTOR3_UP);
                }
            });
            const keyOriginDownAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.nudgeOrigin(lib.VECTOR3_DOWN);
                }
            });
            const keyOriginLeftAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(Direction.Left);
                    this.nudgeOrigin(nudgeVector);
                }
            });
            const keyOriginRightAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(Direction.Right);
                    this.nudgeOrigin(nudgeVector);
                }
            });
            const keyOriginForwardAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(Direction.Forward);
                    this.nudgeOrigin(nudgeVector);
                }
            });
            const keyOriginBackAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(Direction.Back);
                    this.nudgeOrigin(nudgeVector);
                }
            });
            this._registerToolKeyBinding(keyOriginForwardAction, {
                key: server_editor_namespaceObject.KeyboardKey.UP,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, "moveOriginForward");
            this._registerToolKeyBinding(keyOriginBackAction, {
                key: server_editor_namespaceObject.KeyboardKey.DOWN,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, "moveOriginBack");
            this._registerToolKeyBinding(keyOriginLeftAction, {
                key: server_editor_namespaceObject.KeyboardKey.LEFT,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, "moveOriginLeft");
            this._registerToolKeyBinding(keyOriginRightAction, {
                key: server_editor_namespaceObject.KeyboardKey.RIGHT,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, "moveOriginRight");
            this._registerToolKeyBinding(keyOriginUpAction, {
                key: server_editor_namespaceObject.KeyboardKey.PAGE_UP,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, "moveOriginUp");
            this._registerToolKeyBinding(keyOriginDownAction, {
                key: server_editor_namespaceObject.KeyboardKey.PAGE_DOWN,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, "moveOriginDown");
            const pasteToCursorAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    if (this._isPastePreviewActive) {
                        this.pasteClipboardTo(true);
                    }
                }
            });
            this._tool.registerKeyBinding(pasteToCursorAction, {
                key: server_editor_namespaceObject.KeyboardKey.ENTER
            });
            this._registerToolKeyBinding(pasteToCursorAction, {
                key: server_editor_namespaceObject.KeyboardKey.KEY_F,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, "pasteAtCursor");
            const cursorTargetModeBlockAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    if (this._uiPaneBindingData.mouseControlMode === server_editor_namespaceObject.CursorControlMode.Fixed) {
                        return;
                    }
                    this._uiPaneBindingData.cursorTargetMode = server_editor_namespaceObject.CursorTargetMode.Block;
                    this._session.extensionContext.cursor.setProperties({
                        targetMode: server_editor_namespaceObject.CursorTargetMode.Block
                    });
                    this._currentCursorProperties.targetMode = server_editor_namespaceObject.CursorTargetMode.Block;
                }
            });
            this._registerToolKeyBinding(cursorTargetModeBlockAction, {
                key: server_editor_namespaceObject.KeyboardKey.KEY_B
            }, "toggleBlockTarget");
            const cursorTargetModeFaceAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    if (this._uiPaneBindingData.mouseControlMode === server_editor_namespaceObject.CursorControlMode.Fixed) {
                        return;
                    }
                    this._uiPaneBindingData.cursorTargetMode = server_editor_namespaceObject.CursorTargetMode.Face;
                    this._session.extensionContext.cursor.setProperties({
                        targetMode: server_editor_namespaceObject.CursorTargetMode.Face
                    });
                    this._currentCursorProperties.targetMode = server_editor_namespaceObject.CursorTargetMode.Face;
                }
            });
            this._registerToolKeyBinding(cursorTargetModeFaceAction, {
                key: server_editor_namespaceObject.KeyboardKey.KEY_F
            }, "toggleAdjacentTarget");
            const rotateClockwiseAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this._uiPaneBindingData.rotationIndex = (this._uiPaneBindingData.rotationIndex + 1) % rotationOrder.length;
                    this._session.extensionContext.cursor.setAttachmentProperties({
                        rotation: rotationOrder[this._uiPaneBindingData.rotationIndex]
                    });
                }
            });
            this._registerToolKeyBinding(rotateClockwiseAction, {
                key: server_editor_namespaceObject.KeyboardKey.KEY_R
            }, "rotateClockWise");
            const rotateAntiClockwiseAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this._uiPaneBindingData.rotationIndex = (this._uiPaneBindingData.rotationIndex - 1 + rotationOrder.length) % rotationOrder.length;
                    this._session.extensionContext.cursor.setAttachmentProperties({
                        rotation: rotationOrder[this._uiPaneBindingData.rotationIndex]
                    });
                }
            });
            this._registerToolKeyBinding(rotateAntiClockwiseAction, {
                key: server_editor_namespaceObject.KeyboardKey.KEY_R,
                modifier: server_editor_namespaceObject.InputModifier.Shift
            }, "rotateCounterClockWise");
            const mirrorXAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this._uiPaneBindingData.mirrorX = !this._uiPaneBindingData.mirrorX;
                    const mirror = convertMirrorAxisPairToEnum(this._uiPaneBindingData.mirrorX, this._uiPaneBindingData.mirrorZ);
                    this._session.extensionContext.cursor.setAttachmentProperties({
                        mirror
                    });
                }
            });
            this._registerToolKeyBinding(mirrorXAction, {
                key: server_editor_namespaceObject.KeyboardKey.KEY_X
            }, "toggleMirrorX");
            const mirrorZAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this._uiPaneBindingData.mirrorZ = !this._uiPaneBindingData.mirrorZ;
                    const mirror = convertMirrorAxisPairToEnum(this._uiPaneBindingData.mirrorX, this._uiPaneBindingData.mirrorZ);
                    this._session.extensionContext.cursor.setAttachmentProperties({
                        mirror
                    });
                }
            });
            this._registerToolKeyBinding(mirrorZAction, {
                key: server_editor_namespaceObject.KeyboardKey.KEY_Z
            }, "toggleMirrorZ");
            const toggleMouseTrackingAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    let controlMode = this._uiPaneBindingData.mouseControlMode;
                    controlMode = controlMode === server_editor_namespaceObject.CursorControlMode.KeyboardAndMouse ? server_editor_namespaceObject.CursorControlMode.Keyboard : server_editor_namespaceObject.CursorControlMode.KeyboardAndMouse;
                    this._session.extensionContext.cursor.setProperties({
                        controlMode
                    });
                    this._uiPaneBindingData.mouseControlMode = controlMode;
                    this._currentCursorProperties.controlMode = controlMode;
                }
            });
            this._registerToolKeyBinding(toggleMouseTrackingAction, {
                key: server_editor_namespaceObject.KeyboardKey.KEY_C
            }, "toggleMouseTracking");
            const toggleFixedDistanceAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    let controlMode = this._uiPaneBindingData.mouseControlMode;
                    if (controlMode === server_editor_namespaceObject.CursorControlMode.Fixed) {
                        return;
                    }
                    controlMode = server_editor_namespaceObject.CursorControlMode.Fixed;
                    this._session.extensionContext.cursor.setProperties({
                        controlMode
                    });
                    this._uiPaneBindingData.mouseControlMode = controlMode;
                    this._currentCursorProperties.controlMode = controlMode;
                }
            });
            this._registerToolKeyBinding(toggleFixedDistanceAction, {
                key: server_editor_namespaceObject.KeyboardKey.UNDEFINED
            }, "toggleFixedDistance");
            const mouseClickAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.MouseRayCastAction,
                onExecute: (_, mouseProps) => {
                    if (mouseProps.mouseAction === server_editor_namespaceObject.MouseActionType.LeftButton) {
                        if (mouseProps.inputType === server_editor_namespaceObject.MouseInputType.ButtonDown) {
                            if (this._isPastePreviewActive) {
                                if (mouseProps.modifiers.ctrl) {
                                    this.pasteClipboardInverseTo();
                                } else {
                                    this.pasteClipboardTo(true);
                                }
                            }
                        }
                    }
                }
            });
            this._tool.registerMouseButtonBinding(mouseClickAction);
            const mouseWheelAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.MouseRayCastAction,
                onExecute: (mouseRay, mouseProps) => {
                    if (mouseProps.inputType === server_editor_namespaceObject.MouseInputType.WheelOut) {
                        if (this._uiPaneBindingData.mouseControlMode === server_editor_namespaceObject.CursorControlMode.Fixed) {
                            this._session.extensionContext.cursor.moveBy(lib.VECTOR3_FORWARD);
                        }
                    } else if (mouseProps.inputType === server_editor_namespaceObject.MouseInputType.WheelIn) {
                        if (this._uiPaneBindingData.mouseControlMode === server_editor_namespaceObject.CursorControlMode.Fixed) {
                            this._session.extensionContext.cursor.moveBy(lib.VECTOR3_BACK);
                        }
                    }
                }
            });
            this._tool.registerMouseWheelBinding(mouseWheelAction);
        }
        calculateCenterOfClipboardItemBase(item) {
            const size = item.getSize();
            return new lib.Vector3Builder(Math.floor(size.x / 2), 0, Math.floor(size.z / 2));
        }
        nudgeCursor(nudgeVector) {
            this._session.extensionContext.cursor.moveBy(nudgeVector);
        }
        nudgeOrigin(nudgeVector) {
            let update = lib.Vector3Utils.add(this._uiPaneBindingData.origin, nudgeVector);
            const maxSize = lib.Vector3Utils.subtract(this._uiPaneBindingData.size, lib.VECTOR3_ONE);
            update = lib.Vector3Utils.clamp(update, {
                min: lib.VECTOR3_ZERO,
                max: maxSize
            });
            this._uiPaneBindingData.origin = update;
            this._session.extensionContext.cursor.setAttachmentProperties({
                origin: update
            });
        }
        nudgeOffset(nudgeVector) {
            let update = lib.Vector3Utils.add(this._uiPaneBindingData.offset, nudgeVector);
            update = lib.Vector3Utils.clamp(update, {
                min: MIN_OFFSET,
                max: MAX_OFFSET
            });
            this._uiPaneBindingData.offset = update;
            this._session.extensionContext.cursor.setAttachmentProperties({
                offset: update
            });
        }
        getRelativeNudgeDirection(direction) {
            const rotationY = this._session.extensionContext.player.getRotation().y;
            const rotationCorrectedVector = getRotationCorrectedDirectionVector(rotationY, direction);
            return rotationCorrectedVector;
        }
        onClipboardItemContentsChanged() {
            const clipboardItem = this._session.extensionContext.clipboardManager.clipboard;
            if (clipboardItem.isEmpty) {
                this._log("Clipboard is empty");
                this._session.extensionContext.cursor.clearAttachment();
                return;
            }
            this._uiPaneBindingData.size = clipboardItem.getSize();
            this._uiPaneBindingData.origin = this.calculateCenterOfClipboardItemBase(clipboardItem);
            this._originVec3Control.updateAxisLimits({
                maxX: this._uiPaneBindingData.size.x - 1,
                maxY: this._uiPaneBindingData.size.y - 1,
                maxZ: this._uiPaneBindingData.size.z - 1
            });
            if (this._isPastePreviewActive) {
                this._log("Preview is active - lets kill it and update it with a new one");
                this._session.extensionContext.cursor.clearAttachment();
                this._session.extensionContext.cursor.setAttachmentProperties({
                    rotation: rotationOrder[this._uiPaneBindingData.rotationIndex],
                    mirror: convertMirrorAxisPairToEnum(this._uiPaneBindingData.mirrorX, this._uiPaneBindingData.mirrorZ),
                    origin: this._uiPaneBindingData.origin,
                    offset: this._uiPaneBindingData.offset,
                    boundsVisible: this._uiPaneBindingData.boundsVisible
                });
                this._session.extensionContext.cursor.attachClipboardItem(clipboardItem);
            }
        }
        activateFallbackTool() {
            this._log("Activating fallback tool");
            this._session.toolRail.setSelectedOptionId(this._fallbackToolId, true);
        }
        activatePastePreview() {
            const clipboardItem = this._session.extensionContext.clipboardManager.clipboard;
            if (clipboardItem.isEmpty) {
                this._log("Clipboard is empty");
                return;
            }
            if (this._isPastePreviewActive) {
                return;
            }
            this._isPastePreviewActive = true;
            this._uiPaneBindingData.rotationIndex = 0;
            this._uiPaneBindingData.mirrorX = false;
            this._uiPaneBindingData.mirrorZ = false;
            this._preservedCursorProperties = this._session.extensionContext.cursor.getProperties();
            this._session.extensionContext.cursor.setProperties(this._currentCursorProperties);
            this.onClipboardItemContentsChanged();
        }
        deactivatePastePreview() {
            this._isPastePreviewActive = false;
            this._session.extensionContext.cursor.clearAttachment();
            this._session.extensionContext.cursor.setProperties(this._preservedCursorProperties);
        }
        pasteClipboardTo(cursorOnly = false) {
            cursorOnly = true;
            const selection = this._session.extensionContext.selectionManager.selection;
            const clipboardItem = this._session.extensionContext.clipboardManager.clipboard;
            if (clipboardItem.isEmpty) {
                this._log("Clipboard is empty");
                return;
            }
            const vector3_half = new lib.Vector3Builder(.5, .5, .5);
            const clipboardTarget = selection.isEmpty || cursorOnly ? lib.Vector3Utils.add(this._session.extensionContext.cursor.getPosition(), vector3_half) : lib.Vector3Utils.add(selection.getBoundingBox().min, vector3_half);
            const transactionManager = this._session.extensionContext.transactionManager;
            transactionManager.openTransaction("Paste");
            const writeOptions = {
                anchor: calculateClipboardNormalizedAnchorValue(clipboardItem, this._uiPaneBindingData.origin),
                offset: this._uiPaneBindingData.offset,
                mirror: convertMirrorAxisPairToEnum(this._uiPaneBindingData.mirrorX, this._uiPaneBindingData.mirrorZ),
                rotation: rotationOrder[this._uiPaneBindingData.rotationIndex]
            };
            try {
                const wroteOK = clipboardItem.writeToWorld(clipboardTarget, writeOptions);
                if (!wroteOK) {
                    throw new Error("unknown error");
                }
                transactionManager.commitOpenTransaction();
            } catch (e) {
                transactionManager.discardOpenTransaction();
                this._session.log.error(`Failed to write clipboard to world (${(0, server_editor_namespaceObject.stringFromException)(e)})`);
            }
        }
        pasteClipboardInverseTo() {
            const clipboardItem = this._session.extensionContext.clipboardManager.clipboard;
            if (clipboardItem.isEmpty) {
                this._log("Clipboard is empty");
                return;
            }
            const vector3_half = new lib.Vector3Builder(.5, .5, .5);
            const cursorTarget = lib.Vector3Utils.add(this._session.extensionContext.cursor.getPosition(), vector3_half);
            const writeOptions = {
                anchor: calculateClipboardNormalizedAnchorValue(clipboardItem, this._uiPaneBindingData.origin),
                offset: this._uiPaneBindingData.offset,
                mirror: convertMirrorAxisPairToEnum(this._uiPaneBindingData.mirrorX, this._uiPaneBindingData.mirrorZ),
                rotation: rotationOrder[this._uiPaneBindingData.rotationIndex]
            };
            const writeVolume = clipboardItem.getPredictedWriteAsCompoundBlockVolume(cursorTarget, writeOptions);
            const fillBlockType = server_namespaceObject.BlockTypes.get(MinecraftBlockTypes.Air);
            this._fillVolume(this._session.extensionContext.player.dimension, writeVolume, fillBlockType).catch((e => this._session.log.error(e.message)));
        }
        async copySelectionToClipboard() {
            const selection = this._session.extensionContext.selectionManager.selection;
            if (!selection.isEmpty) {
                this._session.extensionContext.clipboardManager.clipboard.clear();
                await executeTickSafeOperation(this._session.extensionContext, selection.getBoundingBox(), "paste-preview", (() => {
                    this._session.extensionContext.clipboardManager.clipboard.readFromSelection(selection);
                }));
                this._session.extensionContext.cursor.clearAttachment();
            } else {
                this._log("Selection is empty");
            }
        }
        onDeactivateTool() {
            this.deactivatePastePreview();
        }
        onActivateTool() {
            this.activatePastePreview();
        }
        teardown() {}
        _registerToolKeyBinding(action, binding, tag) {
            this._tool.registerKeyBinding(action, binding, {
                uniqueId: `editor:pastePreviewToolKeyBinding:${tag}`,
                label: `resourcePack.editor.pastepreview.keyBinding.${tag}`
            });
        }
        _log(_message) {}
    }
    function stringFromException(e) {
        if (typeof e === "string") {
            return e;
        } else if (typeof e === "object" && e !== null && "message" in e) {
            return e.message;
        }
        return "Unknown exception";
    }
    var ExtrudeAxis;
    (function(ExtrudeAxis) {
        ExtrudeAxis["XAxis"] = "resourcePack.editor.brushShape.common.settings.xAxis";
        ExtrudeAxis["YAxis"] = "resourcePack.editor.brushShape.common.settings.yAxis";
        ExtrudeAxis["ZAxis"] = "resourcePack.editor.brushShape.common.settings.zAxis";
        ExtrudeAxis["XAxisNeg"] = "resourcePack.editor.brushShape.common.settings.xAxisNeg";
        ExtrudeAxis["YAxisNeg"] = "resourcePack.editor.brushShape.common.settings.yAxisNeg";
        ExtrudeAxis["ZAxisNeg"] = "resourcePack.editor.brushShape.common.settings.zAxisNeg";
    })(ExtrudeAxis || (ExtrudeAxis = {}));
    function flipToAxis(point, axis) {
        switch (axis) {
          case ExtrudeAxis.XAxis:
            {
                return {
                    x: point.y,
                    y: point.z,
                    z: point.x
                };
            }

          case ExtrudeAxis.YAxis:
            {
                break;
            }

          case ExtrudeAxis.ZAxis:
            {
                return {
                    x: point.x,
                    y: point.z,
                    z: point.y
                };
            }

          case ExtrudeAxis.XAxisNeg:
            {
                return {
                    x: -point.y,
                    y: point.z,
                    z: point.x
                };
            }

          case ExtrudeAxis.YAxisNeg:
            {
                return {
                    x: point.x,
                    y: -point.y,
                    z: point.z
                };
            }

          case ExtrudeAxis.ZAxisNeg:
            {
                return {
                    x: point.x,
                    y: point.z,
                    z: -point.y
                };
            }
        }
        return point;
    }
    function midpointLine(width, height) {
        let x0 = 0;
        let y0 = 0;
        const x1 = width - 1;
        const y1 = height - 1;
        const dx = x1 - x0;
        const dy = y0 - y1;
        let e1 = dx + dy;
        let e2 = 0;
        const heights = new Array(width);
        do {
            heights[x0] = y0;
            e2 = 2 * e1;
            if (e2 >= dy) {
                e1 += dy;
                x0 += 1;
            }
            if (e2 <= dx) {
                e1 += dx;
                y0 += 1;
            }
        } while (x0 <= x1 && y0 <= y1);
        return heights;
    }
    function midpointEllipse(width, height) {
        let x0 = 0;
        let y0 = 0;
        const x1 = width * 2;
        const y1 = height * 2;
        let a = x1 - x0;
        const b = y1 - y0;
        let b1 = b & 1;
        let dx = 4 * (1 - a) * b * b;
        let dy = 4 * (b1 + 1) * a * a;
        let e1 = dx + dy + b1 * a * a;
        let e2 = 0;
        y0 += Math.floor((b + 1) / 2);
        a *= 8 * a;
        b1 = 8 * b * b;
        const heights = new Array(width);
        do {
            heights[x0] = y0 - height;
            e2 = 2 * e1;
            if (e2 <= dy) {
                y0++;
                e1 += dy += a;
            }
            if (e2 >= dx || 2 * e1 > dy) {
                x0++;
                e1 += dx += b1;
            }
        } while (x0 < width);
        return heights;
    }
    const MAX_RADIUS = 20;
    const MAX_LENGTH = 40;
    function registerCylinderBrushShape(uiSession) {
        const settings = {
            uniform: true,
            radius: 4,
            width: 4,
            depth: 4,
            length: 8,
            axis: ExtrudeAxis.YAxis
        };
        uiSession.extensionContext.brushShapeManager.registerBrushShape("resourcePack.editor.brushShape.cylinder.name", "cylinder", (() => {
            const zs_of_x = settings.uniform ? midpointEllipse(settings.radius, settings.radius) : midpointEllipse(settings.width, settings.depth);
            const corners = [];
            for (let x = 0; x < zs_of_x.length; x++) {
                const x1 = x - (settings.uniform ? settings.radius : settings.width);
                const x2 = x + 1;
                const z1 = zs_of_x[x];
                const z2 = zs_of_x[zs_of_x.length - (x + 1)];
                corners.push({
                    x: x1,
                    y: 0,
                    z: z1
                });
                corners.push({
                    x: x1,
                    y: settings.length,
                    z: -z1
                });
                corners.push({
                    x: x2,
                    y: 0,
                    z: z2
                });
                corners.push({
                    x: x2,
                    y: settings.length,
                    z: -z2
                });
            }
            corners.push({
                x: 0,
                y: 0,
                z: zs_of_x[zs_of_x.length - 1]
            });
            corners.push({
                x: 0,
                y: settings.length,
                z: -zs_of_x[zs_of_x.length - 1]
            });
            const compoundBlockVolume = new server_namespaceObject.CompoundBlockVolume;
            for (let i = 0; i < corners.length; i += 2) {
                const start = flipToAxis(corners[i], settings.axis);
                const end = flipToAxis(corners[i + 1], settings.axis);
                compoundBlockVolume.pushVolume({
                    action: server_namespaceObject.CompoundBlockVolumeAction.Add,
                    locationRelativity: server_namespaceObject.CompoundBlockVolumePositionRelativity.Relative,
                    volume: new server_namespaceObject.BlockVolume(start, end)
                });
            }
            return compoundBlockVolume;
        }), (() => {
            const uiElements = [ new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.common.settings.uniform", settings.uniform, (arg => {
                if (arg !== undefined && typeof arg === "boolean") {
                    settings.uniform = arg;
                }
            }), {
                refreshOnChange: true
            }) ];
            if (settings.uniform) {
                uiElements.push(new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.common.settings.radius", settings.radius, (arg => {
                    if (arg !== undefined && typeof arg === "number") {
                        settings.radius = arg;
                    }
                }), {
                    min: 1,
                    max: MAX_RADIUS
                }));
            } else {
                uiElements.push(new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.cylinder.settings.width", settings.width, (arg => {
                    if (arg !== undefined && typeof arg === "number") {
                        settings.width = arg;
                    }
                }), {
                    min: 1,
                    max: MAX_RADIUS
                }), new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.cylinder.settings.depth", settings.depth, (arg => {
                    if (arg !== undefined && typeof arg === "number") {
                        settings.depth = arg;
                    }
                }), {
                    min: 1,
                    max: MAX_RADIUS
                }));
            }
            uiElements.push(new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.common.settings.length", settings.length, (arg => {
                if (arg !== undefined && typeof arg === "number") {
                    settings.length = arg;
                }
            }), {
                min: 1,
                max: MAX_LENGTH
            }), new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.common.settings.axis", settings.axis, (arg => {
                if (arg !== undefined && typeof arg === "string") {
                    settings.axis = arg;
                }
            }), {
                dropdownItems: [ ExtrudeAxis.XAxis, ExtrudeAxis.YAxis, ExtrudeAxis.ZAxis ]
            }));
            return uiElements;
        }));
    }
    const cuboidBrushShape_MAX_LENGTH = 20;
    function registerCuboidBrushShape(uiSession) {
        const settings = {
            uniform: true,
            length: 8,
            x_length: 8,
            y_length: 8,
            z_length: 8
        };
        uiSession.extensionContext.brushShapeManager.registerBrushShape("resourcePack.editor.brushShape.cuboid.name", "cuboid", (() => {
            const compoundBlockVolume = new server_namespaceObject.CompoundBlockVolume;
            if (settings.uniform) {
                const side = Math.floor(settings.length / 2);
                compoundBlockVolume.pushVolume({
                    action: server_namespaceObject.CompoundBlockVolumeAction.Add,
                    locationRelativity: server_namespaceObject.CompoundBlockVolumePositionRelativity.Relative,
                    volume: new server_namespaceObject.BlockVolume({
                        x: -side,
                        y: 0,
                        z: -side
                    }, {
                        x: side,
                        y: side * 2,
                        z: side
                    })
                });
            } else {
                const xSide = Math.floor(settings.x_length / 2);
                const zSide = Math.floor(settings.z_length / 2);
                compoundBlockVolume.pushVolume({
                    action: server_namespaceObject.CompoundBlockVolumeAction.Add,
                    locationRelativity: server_namespaceObject.CompoundBlockVolumePositionRelativity.Relative,
                    volume: new server_namespaceObject.BlockVolume({
                        x: -xSide,
                        y: 0,
                        z: -zSide
                    }, {
                        x: xSide,
                        y: settings.y_length,
                        z: zSide
                    })
                });
            }
            return compoundBlockVolume;
        }), (() => {
            const uiElements = [ new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.common.settings.uniform", settings.uniform, (arg => {
                if (arg !== undefined && typeof arg === "boolean") {
                    settings.uniform = arg;
                }
            }), {
                refreshOnChange: true
            }) ];
            if (settings.uniform) {
                uiElements.push(new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.common.settings.length", settings.length, (arg => {
                    if (arg !== undefined && typeof arg === "number") {
                        settings.length = arg;
                    }
                }), {
                    min: 1,
                    max: cuboidBrushShape_MAX_LENGTH
                }));
            } else {
                uiElements.push(new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.cuboid.settings.x_length", settings.x_length, (arg => {
                    if (arg !== undefined && typeof arg === "number") {
                        settings.x_length = arg;
                    }
                }), {
                    min: 1,
                    max: cuboidBrushShape_MAX_LENGTH
                }), new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.cuboid.settings.y_length", settings.y_length, (arg => {
                    if (arg !== undefined && typeof arg === "number") {
                        settings.y_length = arg;
                    }
                }), {
                    min: 1,
                    max: cuboidBrushShape_MAX_LENGTH
                }), new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.cuboid.settings.z_length", settings.z_length, (arg => {
                    if (arg !== undefined && typeof arg === "number") {
                        settings.z_length = arg;
                    }
                }), {
                    min: 1,
                    max: cuboidBrushShape_MAX_LENGTH
                }));
            }
            return uiElements;
        }));
    }
    const ellipsoidBrushShape_MAX_RADIUS = 20;
    function registerEllipsoidBrushShape(uiSession) {
        const settings = {
            uniform: true,
            radius: 4,
            x_radius: 4,
            y_radius: 4,
            z_radius: 4
        };
        uiSession.extensionContext.brushShapeManager.registerBrushShape("resourcePack.editor.brushShape.ellipsoid.name", "ellipsoid", (() => {
            const compoundBlockVolume = new server_namespaceObject.CompoundBlockVolume;
            let points = [];
            if (settings.uniform && settings.radius === 1 || !settings.uniform && settings.x_radius === 1 && settings.y_radius === 1 && settings.z_radius === 1) {
                points.push({
                    x: 0,
                    y: 0,
                    z: 0
                }, {
                    x: 0,
                    y: 0,
                    z: 0
                });
            } else if (settings.uniform && settings.radius === 2 || !settings.uniform && settings.x_radius === 2 && settings.y_radius === 2 && settings.z_radius === 2) {
                points = [ {
                    x: -1,
                    y: 0,
                    z: 0
                }, {
                    x: -1,
                    y: 0,
                    z: 0
                }, {
                    x: 0,
                    y: 0,
                    z: -1
                }, {
                    x: 0,
                    y: 0,
                    z: 1
                }, {
                    x: 1,
                    y: 0,
                    z: 0
                }, {
                    x: 1,
                    y: 0,
                    z: 0
                }, {
                    x: 0,
                    y: -1,
                    z: 0
                }, {
                    x: 0,
                    y: -1,
                    z: 0
                }, {
                    x: 0,
                    y: 1,
                    z: 0
                }, {
                    x: 0,
                    y: 1,
                    z: 0
                } ];
            } else {
                try {
                    const xSide = settings.uniform ? settings.radius : settings.x_radius;
                    const ySide = settings.uniform ? settings.radius : settings.y_radius;
                    const zSide = settings.uniform ? settings.radius : settings.z_radius;
                    const xs_of_y = midpointEllipse(ySide, xSide);
                    const zs_of_y = midpointEllipse(ySide, zSide);
                    const heights = new Array(xSide * 2 + 1);
                    for (let i = 0; i < heights.length; i++) {
                        heights[i] = new Array(zSide * 2 + 1);
                    }
                    const setBuf = (x, z, y) => {
                        for (let i = zSide - z; i <= zSide + z; i++) {
                            heights[x][i] = y;
                            heights[2 * xSide - x][i] = y;
                        }
                    };
                    for (let y = 0; y < xs_of_y.length; y++) {
                        const y2 = xs_of_y.length - (y + 1);
                        const corner_x = xs_of_y[y2];
                        const corner_z = zs_of_y[y2];
                        const zs_of_x = midpointEllipse(corner_x, corner_z);
                        for (let x = 0; x < zs_of_x.length; x++) {
                            const z = zs_of_x[x];
                            setBuf(x + (xSide - corner_x), z, y);
                        }
                    }
                    for (let z = 0; z < heights[0].length; z++) {
                        heights[xSide][z] = heights[xSide - 1][z];
                    }
                    for (let i = 0; i < heights.length; i++) {
                        const col = heights[i];
                        const x = i - xSide;
                        for (let j = 0; j < col.length; j++) {
                            const z = j - zSide;
                            const y = col[j];
                            if (y > 0) {
                                points.push({
                                    x,
                                    y: ySide - y,
                                    z
                                });
                                points.push({
                                    x,
                                    y: ySide + y,
                                    z
                                });
                            }
                        }
                    }
                } catch (reason) {
                    uiSession.log.error(`Error computing ellipsoid: ${stringFromException(reason)}`);
                    points = [ {
                        x: 0,
                        y: 0,
                        z: 0
                    }, {
                        x: 0,
                        y: 0,
                        z: 0
                    } ];
                }
            }
            for (let i = 0; i < points.length; i += 2) {
                const start = points[i];
                const end = points[i + 1];
                compoundBlockVolume.pushVolume({
                    action: server_namespaceObject.CompoundBlockVolumeAction.Add,
                    locationRelativity: server_namespaceObject.CompoundBlockVolumePositionRelativity.Relative,
                    volume: new server_namespaceObject.BlockVolume(start, end)
                });
            }
            return compoundBlockVolume;
        }), (() => {
            const uiElements = [ new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.common.settings.uniform", settings.uniform, (arg => {
                if (arg !== undefined && typeof arg === "boolean") {
                    settings.uniform = arg;
                }
            }), {
                refreshOnChange: true
            }) ];
            if (settings.uniform) {
                uiElements.push(new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.common.settings.radius", settings.radius, (arg => {
                    if (arg !== undefined && typeof arg === "number") {
                        settings.radius = arg;
                    }
                }), {
                    min: 1,
                    max: ellipsoidBrushShape_MAX_RADIUS
                }));
            } else {
                uiElements.push(new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.ellipsoid.settings.x_radius", settings.x_radius, (arg => {
                    if (arg !== undefined && typeof arg === "number") {
                        settings.x_radius = arg;
                    }
                }), {
                    min: 1,
                    max: ellipsoidBrushShape_MAX_RADIUS
                }), new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.ellipsoid.settings.y_radius", settings.y_radius, (arg => {
                    if (arg !== undefined && typeof arg === "number") {
                        settings.y_radius = arg;
                    }
                }), {
                    min: 1,
                    max: ellipsoidBrushShape_MAX_RADIUS
                }), new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.ellipsoid.settings.z_radius", settings.z_radius, (arg => {
                    if (arg !== undefined && typeof arg === "number") {
                        settings.z_radius = arg;
                    }
                }), {
                    min: 1,
                    max: ellipsoidBrushShape_MAX_RADIUS
                }));
            }
            return uiElements;
        }));
    }
    const MAX_SIDE = 20;
    function registerPyramidBrushShape(uiSession) {
        const settings = {
            uniform: true,
            width: 8,
            height: 8,
            depth: 8,
            axis: ExtrudeAxis.YAxis
        };
        uiSession.extensionContext.brushShapeManager.registerBrushShape("resourcePack.editor.brushShape.pyramid.name", "pyramid", (() => {
            const xSide = Math.ceil(settings.width / 2);
            const zSide = Math.ceil(settings.uniform ? settings.width / 2 : settings.depth / 2);
            const xs_of_y = midpointLine(settings.height, xSide);
            const zs_of_y = midpointLine(settings.height, zSide);
            const compoundBlockVolume = new server_namespaceObject.CompoundBlockVolume;
            for (let i = 0; i < xs_of_y.length; i++) {
                const y = xs_of_y.length - (i + 1);
                const x = xs_of_y[i];
                const z = zs_of_y[i];
                const start = flipToAxis({
                    x: -x,
                    y,
                    z: -z
                }, settings.axis);
                const end = flipToAxis({
                    x,
                    y,
                    z
                }, settings.axis);
                compoundBlockVolume.pushVolume({
                    action: server_namespaceObject.CompoundBlockVolumeAction.Add,
                    locationRelativity: server_namespaceObject.CompoundBlockVolumePositionRelativity.Relative,
                    volume: new server_namespaceObject.BlockVolume(start, end)
                });
            }
            return compoundBlockVolume;
        }), (() => {
            const uiElements = [ new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.common.settings.uniform", settings.uniform, (arg => {
                if (arg !== undefined && typeof arg === "boolean") {
                    settings.uniform = arg;
                }
            }), {
                refreshOnChange: true
            }), new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.pyramid.settings.width", settings.width, (arg => {
                if (arg !== undefined && typeof arg === "number") {
                    settings.width = arg;
                }
            }), {
                min: 1,
                max: MAX_SIDE
            }) ];
            if (!settings.uniform) {
                uiElements.push(new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.pyramid.settings.depth", settings.depth, (arg => {
                    if (arg !== undefined && typeof arg === "number") {
                        settings.depth = arg;
                    }
                }), {
                    min: 1,
                    max: MAX_SIDE
                }));
            }
            uiElements.push(new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.pyramid.settings.height", settings.height, (arg => {
                if (arg !== undefined && typeof arg === "number") {
                    settings.height = arg;
                }
            }), {
                min: 1,
                max: MAX_SIDE
            }), new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.common.settings.axis", settings.axis, (arg => {
                if (arg !== undefined && typeof arg === "string") {
                    settings.axis = arg;
                }
            }), {
                dropdownItems: [ ExtrudeAxis.XAxis, ExtrudeAxis.XAxisNeg, ExtrudeAxis.YAxis, ExtrudeAxis.YAxisNeg, ExtrudeAxis.ZAxis, ExtrudeAxis.ZAxisNeg ]
            }));
            return uiElements;
        }));
    }
    const coneBrushShape_MAX_RADIUS = 20;
    const coneBrushShape_MAX_LENGTH = 40;
    function registerConeBrushShape(uiSession) {
        const settings = {
            uniform: true,
            radius: 4,
            width: 4,
            depth: 4,
            length: 8,
            axis: ExtrudeAxis.YAxis
        };
        uiSession.extensionContext.brushShapeManager.registerBrushShape("resourcePack.editor.brushShape.cone.name", "cone", (() => {
            const xSide = settings.uniform ? settings.radius : settings.width;
            const zSide = settings.uniform ? settings.radius : settings.depth;
            const xs_of_y = midpointLine(settings.length, xSide);
            const zs_of_y = midpointLine(settings.length, zSide);
            const heights = new Array(xSide * 2 + 1);
            for (let i = 0; i < heights.length; i++) {
                heights[i] = new Array(zSide * 2 + 1);
            }
            function setBuf(x, z, y) {
                for (let i = -z; i <= z; i++) {
                    heights[x + xSide][i + zSide] = y;
                    heights[-x + xSide][i + zSide] = y;
                }
            }
            for (let y = 0; y < xs_of_y.length; y++) {
                const corner_x = xs_of_y[xs_of_y.length - (y + 1)];
                const corner_z = zs_of_y[xs_of_y.length - (y + 1)];
                const zs_of_x = midpointEllipse(corner_x, corner_z);
                for (let x = 0; x < zs_of_x.length; x++) {
                    const z = zs_of_x[x];
                    setBuf(x - corner_x, z + 1, y);
                }
            }
            for (let z = 0; z < heights[0].length; z++) {
                heights[xSide][z] = heights[xSide - 1][z];
            }
            heights[xSide][zSide] = settings.length - 1;
            const points = [];
            for (let i = 0; i < heights.length; i++) {
                const col = heights[i];
                const x = i - xSide;
                for (let j = 0; j < col.length; j++) {
                    const z = j - zSide;
                    const y = col[j];
                    if (y > 0) {
                        points.push({
                            x,
                            y: 0,
                            z
                        });
                        points.push({
                            x,
                            y,
                            z
                        });
                    }
                }
            }
            const compoundBlockVolume = new server_namespaceObject.CompoundBlockVolume;
            for (let i = 0; i < points.length; i += 2) {
                const start = flipToAxis(points[i], settings.axis);
                const end = flipToAxis(points[i + 1], settings.axis);
                compoundBlockVolume.pushVolume({
                    action: server_namespaceObject.CompoundBlockVolumeAction.Add,
                    locationRelativity: server_namespaceObject.CompoundBlockVolumePositionRelativity.Relative,
                    volume: new server_namespaceObject.BlockVolume(start, end)
                });
            }
            return compoundBlockVolume;
        }), (() => {
            const uiElements = [ new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.common.settings.uniform", settings.uniform, (arg => {
                if (arg !== undefined && typeof arg === "boolean") {
                    settings.uniform = arg;
                }
            }), {
                refreshOnChange: true
            }) ];
            if (settings.uniform) {
                uiElements.push(new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.common.settings.radius", settings.radius, (arg => {
                    if (arg !== undefined && typeof arg === "number") {
                        settings.radius = arg;
                    }
                }), {
                    min: 1,
                    max: coneBrushShape_MAX_RADIUS
                }));
            } else {
                uiElements.push(new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.cone.settings.width", settings.width, (arg => {
                    if (arg !== undefined && typeof arg === "number") {
                        settings.width = arg;
                    }
                }), {
                    min: 1,
                    max: coneBrushShape_MAX_RADIUS
                }), new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.cone.settings.depth", settings.depth, (arg => {
                    if (arg !== undefined && typeof arg === "number") {
                        settings.depth = arg;
                    }
                }), {
                    min: 1,
                    max: coneBrushShape_MAX_RADIUS
                }));
            }
            uiElements.push(new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.common.settings.length", settings.length, (arg => {
                if (arg !== undefined && typeof arg === "number") {
                    settings.length = arg;
                }
            }), {
                min: 1,
                max: coneBrushShape_MAX_LENGTH
            }), new server_editor_namespaceObject.SettingsUIElement("resourcePack.editor.brushShape.common.settings.axis", settings.axis, (arg => {
                if (arg !== undefined && typeof arg === "string") {
                    settings.axis = arg;
                }
            }), {
                dropdownItems: [ ExtrudeAxis.XAxis, ExtrudeAxis.YAxis, ExtrudeAxis.ZAxis ]
            }));
            return uiElements;
        }));
    }
    class CrossModuleBrushBehavior {
        constructor(uiSession) {
            this.uiSession = uiSession;
            this.settingsPane = undefined;
            this.settingsPaneInitialized = false;
            this.settingsSubPane = undefined;
            this.editorMode = server_editor_namespaceObject.EditorMode.Tool;
            this.paintingBrush = false;
            this.fillingBrush = false;
            this.needsSettingsRefresh = false;
            this.updatingSettingsPane = false;
            this.runningUpdateOperation = false;
            this.updateSettingsOperations = [];
            this.updateVisualizationHandle = undefined;
            this.previousCursorPos = undefined;
            this.activeBrushVolume = undefined;
            this.currentCursorLocations = new Set;
            uiSession.log.debug(`Initializing ${CrossModuleBrushBehavior.BEHAVIOR_NAME}`);
            this.cursorProperties = uiSession.extensionContext.cursor.getProperties();
            this.cursorProperties.outlineColor = {
                red: 0,
                green: .5,
                blue: .5,
                alpha: .2
            };
            this.cursorProperties.controlMode = server_editor_namespaceObject.CursorControlMode.KeyboardAndMouse;
            this.cursorProperties.targetMode = server_editor_namespaceObject.CursorTargetMode.Block;
            this.cursorProperties.visible = false;
            this.previewSelection = uiSession.extensionContext.selectionManager.create();
            this.previewSelection.visible = false;
            this.previewSelection.setOutlineColor({
                red: 0,
                green: .5,
                blue: .5,
                alpha: .2
            });
            this.previewSelection.setFillColor({
                red: 0,
                green: 0,
                blue: .5,
                alpha: .1
            });
            this.tool = this.addTool();
            this.addSettingsPane();
            this.registerMouseUpDownAction();
            this.editorMode;
            this.uiSession.extensionContext.afterEvents.modeChange.subscribe((event => {
                this.editorMode = event.mode;
                if (event.mode === server_editor_namespaceObject.EditorMode.Crosshair) {
                    this.previewSelection.visible = false;
                } else {
                    this.previewSelection.visible = true;
                }
            }));
            registerCylinderBrushShape(uiSession);
            registerCuboidBrushShape(uiSession);
            registerEllipsoidBrushShape(uiSession);
            registerPyramidBrushShape(uiSession);
            registerConeBrushShape(uiSession);
        }
        teardown() {
            this.uiSession.log.debug(`Shutting down ${CrossModuleBrushBehavior.BEHAVIOR_NAME}`);
            this.stopVisualization();
        }
        addTool() {
            const tool = this.uiSession.toolRail.addTool({
                title: "resourcePack.editor.toolRail.crossModuleBrushTool.title",
                icon: "pack://textures/editor/Cube.png?filtering=point",
                tooltip: "resourcePack.editor.toolRail.crossModuleBrushTool.description"
            });
            tool.onModalToolActivation.subscribe((data => {
                if (data.isActiveTool) {
                    if (!this.settingsPaneInitialized && this.settingsPane) {
                        const brushShapeNames = this.uiSession.extensionContext.brushShapeManager.brushShapeNames;
                        if (brushShapeNames.length > 0) {
                            const settingsPaneSettings = {
                                brush: 0,
                                faceMode: false
                            };
                            const settings = (0, server_editor_namespaceObject.bindDataSource)(this.settingsPane, settingsPaneSettings);
                            const dropdownItems = brushShapeNames.map(((key, index) => {
                                const item = {
                                    label: key,
                                    value: index
                                };
                                return item;
                            }));
                            this.settingsPane.addDropdown(settings, "brush", {
                                title: "resourcePack.editor.toolRail.crossModuleBrushSettings.brush",
                                dropdownItems,
                                onChange: (_obj, _property, oldValue, newValue) => {
                                    if (oldValue !== newValue && typeof newValue === "number") {
                                        this.activateBrush(brushShapeNames[newValue]);
                                    }
                                }
                            });
                            this.settingsPane.addBool_deprecated(settings, "faceMode", {
                                title: "resourcePack.editor.toolRail.crossModuleBrushSettings.faceMode",
                                onChange: (_obj, _property, oldValue, newValue) => {
                                    if (oldValue !== newValue && typeof newValue === "boolean") {
                                        this.cursorProperties.targetMode = newValue ? server_editor_namespaceObject.CursorTargetMode.Face : server_editor_namespaceObject.CursorTargetMode.Block;
                                        this.uiSession.extensionContext.cursor.setProperties(this.cursorProperties);
                                    }
                                }
                            });
                            this.settingsPaneInitialized = true;
                            this.activateBrush(brushShapeNames[settingsPaneSettings.brush]);
                        }
                    }
                    this.uiSession.extensionContext.cursor.setProperties(this.cursorProperties);
                    this.startVisualization();
                } else {
                    this.stopVisualization();
                }
            }));
            return tool;
        }
        addSettingsPane() {
            this.settingsPane = this.uiSession.createPropertyPane({
                title: "resourcePack.editor.toolRail.crossModuleBrushSettings.pane"
            });
            this.tool.bindPropertyPane(this.settingsPane);
        }
        registerMouseUpDownAction() {
            const action = this.uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.MouseRayCastAction,
                onExecute: async (_mouseRay, mouseProps) => {
                    if (this.fillingBrush) {
                        return;
                    }
                    if (mouseProps.mouseAction === server_editor_namespaceObject.MouseActionType.LeftButton) {
                        if (mouseProps.inputType === server_editor_namespaceObject.MouseInputType.ButtonDown) {
                            this.paintingBrush = true;
                        } else if (mouseProps.inputType === server_editor_namespaceObject.MouseInputType.ButtonUp) {
                            this.currentCursorLocations.clear();
                            if (this.paintingBrush) {
                                this.paintingBrush = false;
                                await this.fillSelection();
                            }
                        }
                    }
                }
            });
            this.tool.registerMouseButtonBinding(action);
        }
        async fillSelection() {
            if (this.fillingBrush) {
                return;
            }
            const extensionContext = this.uiSession.extensionContext;
            const selection = extensionContext.selectionManager.create();
            selection.set(this.previewSelection);
            const player = this.uiSession.extensionContext.player;
            const blockType = this.uiSession.extensionContext.blockPalette.getSelectedBlockType();
            const operation = blockLocation => {
                this.fillingBrush = true;
                const block = player.dimension.getBlock(blockLocation);
                if (block) {
                    block.setWaterlogged(false);
                    block.setType(blockType);
                }
            };
            const onError = e => {
                server_editor_namespaceObject.editor.log.error(e.message, {
                    player: this.uiSession.extensionContext.player,
                    tags: [ "Editor", "Brush" ]
                });
            };
            const onFinally = () => {
                this.previewSelection.clear();
                this.currentCursorLocations.clear();
                this.fillingBrush = false;
            };
            await executeLargeOperationWithTransactionAndTicking(extensionContext, selection, "Fill", operation).catch(onError).finally(onFinally);
        }
        activateBrush(brushShapeName) {
            if (this.pendingBrush === brushShapeName) {
                return;
            }
            this.pendingBrush = brushShapeName;
            const activateAndGetUISettings = new Promise(((resolve, reject) => {
                try {
                    this.uiSession.extensionContext.brushShapeManager.activateBrushShape(brushShapeName);
                    resolve(true);
                } catch (e) {
                    this.pendingBrush = undefined;
                    reject(stringFromException(e));
                }
            })).then((() => this.uiSession.extensionContext.brushShapeManager.getSettingsUIElements(brushShapeName)), (reason => {
                server_editor_namespaceObject.editor.log.error(`Unable to activate brush ${brushShapeName}: ${stringFromException(reason)}`, {
                    player: this.uiSession.extensionContext.player,
                    tags: [ "Editor", "Brush" ]
                });
                return [];
            }));
            let timer;
            const timeout = new Promise(((_resolve, reject) => {
                timer = server_namespaceObject.system.runTimeout((() => {
                    reject(`Activating brush '${brushShapeName}' took too long!`);
                }), CrossModuleBrushBehavior.ACTIVATE_TIMEOUT_MS);
            }));
            Promise.race([ activateAndGetUISettings, timeout ]).then((settingsUIElements => {
                if (this.pendingBrush === brushShapeName) {
                    this.updateSettingsSubPane(brushShapeName, settingsUIElements);
                    this.activeBrushVolume = this.uiSession.extensionContext.brushShapeManager.activeBrushVolume;
                } else {
                    this.uiSession.log.debug(`Canceling brush activation for '${brushShapeName}'; it's too old.`);
                }
            }), (reason => {
                this.updateSettingsSubPane("Error", []);
                server_editor_namespaceObject.editor.log.error(`Unable to activate brush '${brushShapeName}': ${stringFromException(reason)}`, {
                    player: this.uiSession.extensionContext.player,
                    tags: [ "Editor", "Brush" ]
                });
            })).finally((() => {
                server_namespaceObject.system.clearRun(timer);
                this.pendingBrush = undefined;
            }));
        }
        refreshSettings() {
            const brushShapeName = this.uiSession.extensionContext.brushShapeManager.activeBrushShape?.name;
            if (!brushShapeName) {
                this.pendingBrush = undefined;
                this.needsSettingsRefresh = false;
                return;
            }
            this.pendingBrush = brushShapeName;
            const getUISettings = new Promise(((resolve, reject) => {
                try {
                    resolve(this.uiSession.extensionContext.brushShapeManager.getSettingsUIElements(brushShapeName));
                } catch (e) {
                    this.pendingBrush = brushShapeName;
                    reject(stringFromException(e));
                }
            }));
            let timer;
            const timeout = new Promise(((_resolve, reject) => {
                timer = server_namespaceObject.system.runTimeout((() => {
                    reject(`Refreshing UI elements for brush '${brushShapeName}' took too long!`);
                }), CrossModuleBrushBehavior.ACTIVATE_TIMEOUT_MS);
            }));
            Promise.race([ getUISettings, timeout ]).then((settingsUIElements => {
                if (this.pendingBrush === brushShapeName) {
                    this.updateSettingsSubPane(brushShapeName, settingsUIElements);
                } else {
                    this.uiSession.log.debug(`Canceling settings UI update for '${brushShapeName}'; it is too old.`);
                }
            }), (reason => {
                this.updateSettingsSubPane("Error", []);
                server_editor_namespaceObject.editor.log.error(`Unable to refresh UI settings for '${brushShapeName}': ${stringFromException(reason)}`, {
                    player: this.uiSession.extensionContext.player,
                    tags: [ "Editor", "Brush" ]
                });
            })).finally((() => {
                server_namespaceObject.system.clearRun(timer);
                this.pendingBrush = undefined;
                this.needsSettingsRefresh = false;
                this.updateVisualization(true);
            }));
        }
        updateSettingsSubPane(brushShapeName, uiElements) {
            if (!this.settingsPane) {
                this.uiSession.log.debug(`No settings pane`);
                return;
            }
            if (this.settingsSubPane) {
                this.settingsPane.removePropertyPane(this.settingsSubPane);
                this.settingsPane.hide();
            }
            if (uiElements.length === 0) {
                return;
            }
            this.updatingSettingsPane = true;
            this.settingsSubPane = this.settingsPane.createPropertyPane({
                title: brushShapeName
            });
            const subSettingsBag = {};
            const subSettings = (0, server_editor_namespaceObject.bindDataSource)(this.settingsSubPane, subSettingsBag);
            const brushShapeManager = this.uiSession.extensionContext.brushShapeManager;
            let usedDropdown = false;
            for (let i = 0; i < uiElements.length; i++) {
                const element = uiElements[i];
                if (!element) {
                    continue;
                }
                const elementName = element.name;
                if (elementName.length === 0) {
                    continue;
                }
                if (typeof element.initialValue === "number") {
                    subSettings[`number_${elementName}`] = element.initialValue;
                    let item = undefined;
                    item = this.settingsSubPane.addNumber(subSettings, `number_${elementName}`, {
                        title: elementName,
                        min: Number(element.options.min ?? CrossModuleBrushBehavior.DEFAULT_NUMBER_MIN),
                        max: Number(element.options.max ?? CrossModuleBrushBehavior.DEFAULT_NUMBER_MAX),
                        showSlider: true,
                        enable: true,
                        visible: true,
                        onChange: (_obj, _property, oldValue, newValue) => {
                            if (oldValue !== newValue && typeof newValue === "number") {
                                if (element.options.refreshOnChange === true) {
                                    if (item !== undefined) {
                                        item.visible = false;
                                    }
                                    if (this.settingsSubPane !== undefined) {
                                        this.settingsSubPane.hide();
                                    }
                                }
                                this.enqueueUpdateOperation((() => brushShapeManager.uiSettingValueChanged(elementName, newValue)));
                            }
                        }
                    });
                } else if (typeof element.initialValue === "boolean") {
                    subSettings[`boolean_${elementName}`] = element.initialValue;
                    let item = undefined;
                    item = this.settingsSubPane.addBool_deprecated(subSettings, `boolean_${elementName}`, {
                        title: elementName,
                        enable: true,
                        visible: true,
                        onChange: (_obj, _property, oldValue, newValue) => {
                            if (oldValue !== newValue && typeof newValue === "boolean") {
                                if (element.options.refreshOnChange === true) {
                                    if (item !== undefined) {
                                        item.visible = false;
                                    }
                                    if (this.settingsSubPane !== undefined) {
                                        this.settingsSubPane.hide();
                                    }
                                }
                                this.enqueueUpdateOperation((() => brushShapeManager.uiSettingValueChanged(elementName, newValue)));
                            }
                        }
                    });
                } else if (typeof element.initialValue === "string") {
                    if (element.options.dropdownItems) {
                        const dropdownOptions = element.options.dropdownItems;
                        if (!usedDropdown) {
                            let initialIndex = 0;
                            for (let i = 0; i < dropdownOptions.length; i++) {
                                if (element.initialValue === dropdownOptions[i]) {
                                    initialIndex = i;
                                    break;
                                }
                            }
                            subSettings[`dropdown_${elementName}`] = initialIndex;
                            const dropdownItems = dropdownOptions.map(((key, index) => {
                                const item = {
                                    label: key,
                                    value: index
                                };
                                return item;
                            }));
                            let item = undefined;
                            item = this.settingsSubPane.addDropdown(subSettings, `dropdown_${elementName}`, {
                                title: elementName,
                                dropdownItems,
                                onChange: (_obj, _property, oldValue, newValue) => {
                                    if (oldValue !== newValue && typeof newValue === "number") {
                                        if (element.options.refreshOnChange === true) {
                                            if (item !== undefined) {
                                                item.visible = false;
                                            }
                                            if (this.settingsSubPane !== undefined) {
                                                this.settingsSubPane.hide();
                                            }
                                        }
                                        this.enqueueUpdateOperation((() => brushShapeManager.uiSettingValueChanged(elementName, dropdownOptions[newValue])));
                                    }
                                }
                            });
                            usedDropdown = true;
                        }
                    } else {
                        subSettings[`string_${elementName}`] = element.initialValue;
                        let item = undefined;
                        item = this.settingsSubPane.addString(subSettings, `string_${elementName}`, {
                            title: elementName,
                            enable: true,
                            visible: true,
                            onChange: (_obj, _property, oldValue, newValue) => {
                                if (oldValue !== newValue && typeof newValue === "string") {
                                    if (element.options.refreshOnChange === true) {
                                        if (item !== undefined) {
                                            item.visible = false;
                                        }
                                        if (this.settingsSubPane !== undefined) {
                                            this.settingsSubPane.hide();
                                        }
                                    }
                                    this.enqueueUpdateOperation((() => brushShapeManager.uiSettingValueChanged(elementName, newValue)));
                                }
                            }
                        });
                    }
                } else {
                    subSettings[`vector3_${elementName}`] = element.initialValue;
                    let item = undefined;
                    item = this.settingsSubPane.addVector3_deprecated(subSettings, `vector3_${elementName}`, {
                        title: elementName,
                        enable: true,
                        visible: true,
                        onChange: (_obj, _property, oldValue, newValue) => {
                            const ov = oldValue;
                            const nvv = newValue;
                            if (ov.x !== undefined && nvv.x !== undefined && !lib.Vector3Utils.equals(ov, nvv)) {
                                if (element.options.refreshOnChange === true) {
                                    if (item !== undefined) {
                                        item.visible = false;
                                    }
                                    if (this.settingsSubPane !== undefined) {
                                        this.settingsSubPane.hide();
                                    }
                                }
                                this.enqueueUpdateOperation((() => brushShapeManager.uiSettingValueChanged(elementName, nvv)));
                            }
                        }
                    });
                }
            }
            this.settingsPane.show();
            this.updatingSettingsPane = false;
            this.needsSettingsRefresh = false;
        }
        enqueueUpdateOperation(f) {
            this.updateSettingsOperations.push(f);
        }
        runUpdateOperation() {
            if (this.updateSettingsOperations.length > 0 && this.pendingBrush === undefined && !this.fillingBrush && !this.paintingBrush && !this.updatingSettingsPane && !this.runningUpdateOperation) {
                const f = this.updateSettingsOperations.shift();
                if (f !== undefined) {
                    this.runningUpdateOperation = true;
                    const update = new Promise(((resolve, reject) => {
                        try {
                            resolve(f());
                        } catch (e) {
                            reject(e);
                        }
                    }));
                    update.then((needsSettingsRefresh => {
                        this.needsSettingsRefresh = this.needsSettingsRefresh || needsSettingsRefresh;
                    }), (reason => {
                        server_editor_namespaceObject.editor.log.error(`Error updating settings: ${stringFromException(reason)}`, {
                            player: this.uiSession.extensionContext.player,
                            tags: [ "Editor", "Brush" ]
                        });
                    })).finally((() => {
                        if (this.updateSettingsOperations.length === 0) {
                            if (this.needsSettingsRefresh) {
                                this.refreshSettings();
                            } else {
                                this.updateVisualization(true);
                            }
                            this.activeBrushVolume = undefined;
                        }
                        this.runningUpdateOperation = false;
                    }));
                }
            }
        }
        startVisualization() {
            if (!this.updateVisualizationHandle) {
                let first = true;
                this.previewSelection.visible = true;
                this.updateVisualizationHandle = server_namespaceObject.system.runInterval((() => {
                    if (this.editorMode === server_editor_namespaceObject.EditorMode.Crosshair) {
                        return;
                    }
                    const updated = !this.updateVisualization(first);
                    if (first) {
                        first = !updated;
                    }
                    if (this.updateSettingsOperations.length > 0) {
                        this.runUpdateOperation();
                    }
                }), 1);
            }
        }
        stopVisualization() {
            if (this.updateVisualizationHandle) {
                this.previewSelection.visible = false;
                server_namespaceObject.system.clearRun(this.updateVisualizationHandle);
                this.updateVisualizationHandle = undefined;
            }
        }
        updateVisualization(force) {
            try {
                if (this.fillingBrush) {
                    return false;
                }
                const cursorPos = this.uiSession.extensionContext.cursor.getPosition();
                if (!force && this.previousCursorPos && lib.Vector3Utils.equals(this.previousCursorPos, cursorPos)) {
                    return false;
                }
                this.previousCursorPos = cursorPos;
                if (this.paintingBrush) {
                    const cursorPosString = lib.Vector3Utils.toString(cursorPos);
                    if (this.currentCursorLocations.has(cursorPosString)) {
                        return false;
                    } else {
                        this.currentCursorLocations.add(cursorPosString);
                    }
                }
                const targetBlock = this.uiSession.extensionContext.player.dimension.getBlock(cursorPos);
                if (targetBlock) {
                    if (!this.activeBrushVolume) {
                        this.activeBrushVolume = this.uiSession.extensionContext.brushShapeManager.activeBrushVolume;
                    }
                    const currentVolume = this.activeBrushVolume;
                    if (currentVolume) {
                        currentVolume.setOrigin(targetBlock.location);
                        if (this.paintingBrush) {
                            const items = currentVolume.itemsAbsolute;
                            for (let i = 0; i < items.length; i++) {
                                this.previewSelection.pushVolume(items[i]);
                            }
                        } else {
                            this.previewSelection.set(currentVolume);
                        }
                        return true;
                    }
                }
                return false;
            } catch (err) {
                server_editor_namespaceObject.editor.log.error(stringFromException(err), {
                    player: this.uiSession.extensionContext.player,
                    tags: [ "Editor", "Brush" ]
                });
                return false;
            }
        }
    }
    CrossModuleBrushBehavior.BEHAVIOR_NAME = "Cross-Module Brush";
    CrossModuleBrushBehavior.ACTIVATE_TIMEOUT_MS = 2e3;
    CrossModuleBrushBehavior.DEFAULT_NUMBER_MIN = 1;
    CrossModuleBrushBehavior.DEFAULT_NUMBER_MAX = 6;
    class DeleteBehavior {
        constructor(uiSession, coreMenuItems) {
            const deleteAction = uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    deleteOperation(uiSession).catch((e => uiSession.log.error(e.message)));
                }
            });
            coreMenuItems.edit.addItem({
                label: "resourcePack.editor.menuBar.edit.delete"
            }, deleteAction);
            uiSession.inputManager.registerKeyBinding(server_editor_namespaceObject.EditorInputContext.GlobalEditor, deleteAction, {
                key: server_editor_namespaceObject.KeyboardKey.DELETE
            }, {
                uniqueId: "editor:toolModeKeyBinding:delete",
                label: "resourcePack.editor.delete.keyBinding"
            });
        }
        teardown() {}
    }
    const lineMarkerEntityName = "editor:map_marker";
    const lineMarkerEntityOptions = {
        visualOffset: {
            x: .5,
            y: 1,
            z: .5
        },
        isSelectable: true,
        text: "",
        showTextOnlyWhenSelected: true,
        initialVisibility: true
    };
    class LineSegment {
        constructor(point, surfaceContour, targetMode, terminator, widgetGroup, changedEvent) {
            this._point = point;
            this._surfaceContour = surfaceContour;
            this._terminator = terminator;
            this._targetMode = targetMode;
            const options = {
                ...lineMarkerEntityOptions
            };
            options.text = lib.Vector3Utils.toString(point, {
                decimals: 0
            });
            options.moveEvent = data => {
                if (data.location !== undefined) {
                    this._point = data.location;
                    data.widget.setText(lib.Vector3Utils.toString(data.location, {
                        decimals: 0
                    }));
                    changedEvent();
                }
            };
            this._widget = widgetGroup.createCustomWidget(lineMarkerEntityName, point, undefined, options);
        }
        clear() {
            this._widget.deleteWidget();
        }
        get point() {
            return this._point;
        }
        get surfaceContour() {
            return this._surfaceContour;
        }
        get targetMode() {
            return this._targetMode;
        }
        get terminator() {
            return this._terminator;
        }
        set terminator(value) {
            this._terminator = value;
        }
        get isSelected() {
            const isSelected = this._widget.getIsSelected();
            return isSelected;
        }
        set isSelected(value) {
            this._widget.setIsSelected(value);
        }
    }
    class LineSegmentList {
        constructor(widgetGroup, preview, dimension) {
            this._segments = [];
            this.pointChangedEventHandler = () => {
                this.rebuildPreview(this._lastLineType);
            };
            this._widgetGroup = widgetGroup;
            this._preview = preview;
            this._lastLineType = BlockLineType.Direct;
            this._dimension = dimension;
        }
        addNextPoint(point, surfaceContour, targetMode) {
            if (this._segments.length > 0) {
                this._segments[this._segments.length - 1].terminator = false;
                this._segments[this._segments.length - 1].isSelected = false;
            }
            const segment = new LineSegment(point, surfaceContour, targetMode, true, this._widgetGroup, this.pointChangedEventHandler);
            segment.isSelected = true;
            this._segments.push(segment);
        }
        addNewPoint(point, surfaceContour, targetMode) {
            if (this._segments.length > 0) {
                this._segments[this._segments.length - 1].isSelected = false;
            }
            const segment = new LineSegment(point, surfaceContour, targetMode, true, this._widgetGroup, this.pointChangedEventHandler);
            segment.isSelected = true;
            this._segments.push(segment);
        }
        clear() {
            for (const segment of this._segments) {
                segment.clear();
            }
            this._segments = [];
            this._preview.visible = false;
            this._preview.clear();
        }
        get length() {
            return this._segments.length;
        }
        getSurfaceSolidBlockPos(xz, yStart, yMin, dimension, cursorTargetMode) {
            const offset = cursorTargetMode === server_editor_namespaceObject.CursorTargetMode.Block ? 0 : 1;
            for (let i = yStart; i > yMin; i--) {
                const block = dimension?.getBlock({
                    x: xz.x,
                    y: i,
                    z: xz.z
                });
                if (block) {
                    if (block.isSolid && !block.typeId.includes("leaves")) {
                        return {
                            x: xz.x,
                            y: i + offset,
                            z: xz.z
                        };
                    }
                }
            }
            return xz;
        }
        buildLinearBlockPositionArray(mode) {
            const positions = [];
            if (this.length === 0) {
                return positions;
            } else if (this.length === 1) {
                positions.push(this._segments[0].point);
                return positions;
            }
            for (let i = 0; i < this.length - 1; i++) {
                const start = this._segments[i].point;
                const end = this._segments[i + 1].point;
                const line = new BlockLine(start, end, {
                    mode
                });
                const surfaceContour = this._segments[i].surfaceContour;
                const targetMode = this._segments[i].targetMode;
                for (const point of line.getBlockLineLocationIterator()) {
                    if (surfaceContour) {
                        const projPoint = this.getSurfaceSolidBlockPos(point, start.y, 0, this._dimension, targetMode);
                        positions.push(projPoint);
                    } else {
                        positions.push(point);
                    }
                }
                if (this._segments[i + 1].terminator) {
                    ++i;
                }
            }
            const oddLength = this.length % 2 !== 0;
            if (oddLength) {
                positions.push(this._segments[this.length - 1].point);
            }
            return positions;
        }
        rebuildPreview(lineMode) {
            this._preview.visible = false;
            this._preview.clear();
            if (lineMode) {
                this._lastLineType = lineMode;
            }
            if (this.length === 0) {
                return;
            }
            const positions = this.buildLinearBlockPositionArray(lineMode ?? this._lastLineType);
            for (const point of positions) {
                this._preview.pushVolume({
                    action: server_namespaceObject.CompoundBlockVolumeAction.Add,
                    volume: new server_namespaceObject.BlockVolume(point, point)
                });
            }
            this._preview.visible = true;
        }
        get preview() {
            return this._preview;
        }
        get areAnySelected() {
            const anySelected = this._segments.some((segment => segment.isSelected));
            return anySelected;
        }
        selectAll() {
            this._widgetGroup.selectAllWidgets();
        }
        deselectAll() {
            this._widgetGroup.deselectAllWidgets();
        }
        removeLastSegment() {
            if (this._segments.length > 0) {
                this._segments[this._segments.length - 1].clear();
                this._segments.pop();
                this.rebuildPreview(this._lastLineType);
            }
        }
        nudgeSelected(nudgeVector) {
            this._widgetGroup.moveSelectedWidgets(nudgeVector);
        }
    }
    var SelectionCursorMode;
    (function(SelectionCursorMode) {
        SelectionCursorMode[SelectionCursorMode["Freeform"] = 0] = "Freeform";
        SelectionCursorMode[SelectionCursorMode["FixedDistance"] = 1] = "FixedDistance";
        SelectionCursorMode[SelectionCursorMode["AdjacentFace"] = 2] = "AdjacentFace";
    })(SelectionCursorMode || (SelectionCursorMode = {}));
    class LineBehavior {
        constructor(uiSession) {
            this.uiSession = uiSession;
            this.SELECTION_COLOR = {
                red: 0,
                green: .85,
                blue: .95,
                alpha: 1
            };
            this.SELECTION_OUTLINE_COLOR = {
                red: 0,
                green: 0,
                blue: 1,
                alpha: .5
            };
            this.fillSelection = async (uiSession, fillBlockType) => {
                const player = uiSession.extensionContext.player;
                const dimension = player.dimension;
                const operation = blockLocation => {
                    const block = dimension.getBlock(blockLocation);
                    if (block) {
                        block.setType(fillBlockType);
                    }
                };
                const onError = e => {
                    this.uiSession.log.error(`Fill operation failed with error: ${e.message}`);
                };
                await executeLargeOperationWithTransactionAndTicking(this.uiSession.extensionContext, this.lineSegments.preview, "Line-tool", operation).catch(onError);
            };
            const previewSelection = uiSession.extensionContext.selectionManager.create();
            previewSelection.setOutlineColor(this.SELECTION_COLOR);
            previewSelection.setFillColor(this.SELECTION_OUTLINE_COLOR);
            const groupOptions = {
                groupSelectionMode: server_editor_namespaceObject.WidgetGroupSelectionMode.Multiple
            };
            const widgetGroup = uiSession.extensionContext.widgetManager.createGroup(groupOptions);
            this.lineSegments = new LineSegmentList(widgetGroup, previewSelection, uiSession.extensionContext.player.dimension);
            this.props = {
                selectionMode: SelectionCursorMode.Freeform,
                width: 1,
                height: 1,
                lineMode: BlockLineType.Direct,
                surfaceContour: false,
                prevSurfaceContour: false
            };
            this.cursorProperties = uiSession.extensionContext.cursor.getProperties();
            this.cursorProperties.outlineColor = this.SELECTION_COLOR;
            this.cursorProperties.controlMode = server_editor_namespaceObject.CursorControlMode.KeyboardAndMouse;
            this.cursorProperties.targetMode = server_editor_namespaceObject.CursorTargetMode.Block;
            this.cursorProperties.visible = true;
            this.tool = this.addTool(uiSession);
            this.pane = this.addLineToolPane(uiSession, this.tool);
            this.pane.hide();
            this.tool.bindPropertyPane(this.pane);
            this.registerMouseAction(uiSession);
            this.registerMouseWheelAction(uiSession);
            this._registerToolKeyBinding(uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    if (this.lineSegments.areAnySelected) {
                        this.lineSegments.deselectAll();
                    } else {
                        this.lineSegments.removeLastSegment();
                    }
                }
            }), {
                key: server_editor_namespaceObject.KeyboardKey.KEY_D,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, "deselect");
            this._registerToolKeyBinding(uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.clearState();
                }
            }), {
                key: server_editor_namespaceObject.KeyboardKey.KEY_D,
                modifier: server_editor_namespaceObject.InputModifier.Control | server_editor_namespaceObject.InputModifier.Shift
            }, "deselectAll");
            this._registerToolKeyBinding(uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.lineSegments.selectAll();
                }
            }), {
                key: server_editor_namespaceObject.KeyboardKey.KEY_A,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, "selectAll");
            this._registerToolKeyBinding(uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const fillBlockType = uiSession.extensionContext.blockPalette.getSelectedBlockType();
                    this.finalizeFillSelection(uiSession, fillBlockType);
                }
            }), {
                key: server_editor_namespaceObject.KeyboardKey.KEY_F,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, "fillAndClear");
            this._registerToolKeyBinding(uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const fillBlockType = uiSession.extensionContext.blockPalette.getSelectedBlockType();
                    this.finalizeFillSelection(uiSession, fillBlockType, false);
                }
            }), {
                key: server_editor_namespaceObject.KeyboardKey.KEY_F,
                modifier: server_editor_namespaceObject.InputModifier.Control | server_editor_namespaceObject.InputModifier.Shift
            }, "fill");
            this._registerToolKeyBinding(uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const fillBlockType = server_namespaceObject.BlockTypes.get(MinecraftBlockTypes.Air);
                    this.finalizeFillSelection(uiSession, fillBlockType);
                }
            }), {
                key: server_editor_namespaceObject.KeyboardKey.DELETE
            }, "deleteAndClear");
            this._registerToolKeyBinding(uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const fillBlockType = server_namespaceObject.BlockTypes.get(MinecraftBlockTypes.Air);
                    this.finalizeFillSelection(uiSession, fillBlockType, false);
                }
            }), {
                key: server_editor_namespaceObject.KeyboardKey.DELETE,
                modifier: server_editor_namespaceObject.InputModifier.Shift
            }, "delete");
            const keyUpAction = uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.lineSegments.nudgeSelected(lib.VECTOR3_UP);
                }
            });
            const keyDownAction = uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.lineSegments.nudgeSelected(lib.VECTOR3_DOWN);
                }
            });
            const keyLeftAction = uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(uiSession, Direction.Left);
                    this.lineSegments.nudgeSelected(nudgeVector);
                }
            });
            const keyRightAction = uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(uiSession, Direction.Right);
                    this.lineSegments.nudgeSelected(nudgeVector);
                }
            });
            const keyForwardAction = uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(uiSession, Direction.Forward);
                    this.lineSegments.nudgeSelected(nudgeVector);
                }
            });
            const keyBackAction = uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(uiSession, Direction.Back);
                    this.lineSegments.nudgeSelected(nudgeVector);
                }
            });
            this._registerToolKeyBinding(keyForwardAction, {
                key: server_editor_namespaceObject.KeyboardKey.UP
            }, "moveForward");
            this._registerToolKeyBinding(keyBackAction, {
                key: server_editor_namespaceObject.KeyboardKey.DOWN
            }, "moveBack");
            this._registerToolKeyBinding(keyLeftAction, {
                key: server_editor_namespaceObject.KeyboardKey.LEFT
            }, "moveLeft");
            this._registerToolKeyBinding(keyRightAction, {
                key: server_editor_namespaceObject.KeyboardKey.RIGHT
            }, "moveRight");
            this._registerToolKeyBinding(keyUpAction, {
                key: server_editor_namespaceObject.KeyboardKey.PAGE_UP
            }, "moveUp");
            this._registerToolKeyBinding(keyDownAction, {
                key: server_editor_namespaceObject.KeyboardKey.PAGE_DOWN
            }, "moveDown");
            uiSession.extensionContext.afterEvents.modeChange.subscribe((event => {
                if (event.mode === server_editor_namespaceObject.EditorMode.Crosshair) {
                    this.clearState();
                }
            }));
        }
        teardown() {
            this.tool.unregisterInputBindings();
        }
        getRelativeNudgeDirection(uiSession, direction) {
            const rotationY = uiSession.extensionContext.player.getRotation().y;
            const rotationCorrectedVector = getRotationCorrectedDirectionVector(rotationY, direction);
            return rotationCorrectedVector;
        }
        finalizeFillSelection(uiSession, fillBlockType, clear = true) {
            this.fillSelection(uiSession, fillBlockType).catch((e => uiSession.log.error(e.message))).finally((() => {
                if (clear) {
                    this.clearState();
                }
            }));
        }
        addTool(uiSession) {
            const tool = uiSession.toolRail.addTool({
                title: "resourcePack.editor.toolRail.line.title",
                icon: "pack://textures/editor/Line.png?filtering=point",
                tooltip: "resourcePack.editor.toolRail.line.tooltip",
                inputContextId: "editor:lineTool",
                inputContextLabel: "resourcePack.editor.toolRail.line.title"
            });
            tool.onModalToolActivation.subscribe((eventData => {
                if (eventData.isActiveTool) {
                    uiSession.extensionContext.cursor.setProperties(this.cursorProperties);
                } else {
                    this.clearState();
                }
            }));
            return tool;
        }
        addLineToolPane(uiSession, tool) {
            const pane = uiSession.createPropertyPane({
                title: "resourcePack.editor.toolRail.line.title"
            });
            this.props = (0, server_editor_namespaceObject.bindDataSource)(pane, this.props);
            pane.addNumber(this.props, "width", {
                title: "resourcePack.editor.toolRail.line.pane.width.title",
                min: 1,
                max: 1,
                enable: false
            });
            pane.addNumber(this.props, "height", {
                title: "resourcePack.editor.toolRail.line.pane.height.title",
                min: 1,
                max: 1,
                enable: false
            });
            pane.addDropdown(this.props, "selectionMode", {
                title: "resourcePack.editor.toolRail.line.pane.selectionMode",
                dropdownItems: [ {
                    label: "resourcePack.editor.toolRail.line.pane.selectionMode.freeForm",
                    value: SelectionCursorMode.Freeform
                }, {
                    label: "resourcePack.editor.toolRail.line.pane.selectionMode.fixedDistance",
                    value: SelectionCursorMode.FixedDistance
                }, {
                    label: "resourcePack.editor.toolRail.line.pane.selectionMode.adjacent",
                    value: SelectionCursorMode.AdjacentFace
                } ],
                onChange: (_obj, _property, oldValue, newValue) => {
                    const oldVal = oldValue;
                    const newVal = newValue;
                    let cursorControlMode = server_editor_namespaceObject.CursorControlMode.KeyboardAndMouse;
                    let cursorTargetMode = server_editor_namespaceObject.CursorTargetMode.Block;
                    if (oldVal !== newVal) {
                        switch (newVal) {
                          case SelectionCursorMode.Freeform:
                            cursorControlMode = server_editor_namespaceObject.CursorControlMode.KeyboardAndMouse;
                            cursorTargetMode = server_editor_namespaceObject.CursorTargetMode.Block;
                            break;

                          case SelectionCursorMode.FixedDistance:
                            cursorControlMode = server_editor_namespaceObject.CursorControlMode.Fixed;
                            cursorTargetMode = server_editor_namespaceObject.CursorTargetMode.Block;
                            break;

                          case SelectionCursorMode.AdjacentFace:
                            cursorControlMode = server_editor_namespaceObject.CursorControlMode.KeyboardAndMouse;
                            cursorTargetMode = server_editor_namespaceObject.CursorTargetMode.Face;
                            break;

                          default:
                            uiSession.log.error(`Unknown value from selection mode drop-down`);
                            return;
                        }
                        this.cursorProperties = uiSession.extensionContext.cursor.getProperties();
                        this.cursorProperties.controlMode = cursorControlMode;
                        this.cursorProperties.targetMode = cursorTargetMode;
                        uiSession.extensionContext.cursor.setProperties(this.cursorProperties);
                        if (newVal === SelectionCursorMode.FixedDistance) {
                            this.props.prevSurfaceContour = this.props.surfaceContour;
                            this.props.surfaceContour = false;
                            this.surfaceContourBoolItem.enable = false;
                        } else {
                            this.props.surfaceContour = this.props.prevSurfaceContour;
                            this.surfaceContourBoolItem.enable = true;
                        }
                    }
                }
            });
            pane.addDropdown(this.props, "lineMode", {
                title: "resourcePack.editor.toolRail.line.pane.algorithm.title",
                dropdownItems: [ {
                    label: "resourcePack.editor.toolRail.line.pane.algorithm.Direct",
                    value: BlockLineType.Direct
                }, {
                    label: "resourcePack.editor.toolRail.line.pane.algorithm.Staggered",
                    value: BlockLineType.Staggered
                } ]
            });
            this.surfaceContourBoolItem = pane.addBool_deprecated(this.props, "surfaceContour", {
                title: "resourcePack.editor.toolRail.line.pane.surfaceContour",
                onChange: (_obj, _property, _oldValue, _newValue) => {}
            });
            pane.addButton((() => {
                const fillBlockType = uiSession.extensionContext.blockPalette.getSelectedBlockType();
                this.finalizeFillSelection(uiSession, fillBlockType);
            }), {
                title: "resourcePack.editor.toolRail.line.pane.fillAction"
            });
            tool.bindPropertyPane(pane);
            return pane;
        }
        registerMouseAction(uiSession) {
            const executeAction = uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.MouseRayCastAction,
                onExecute: (mouseRay, mouseProps) => {
                    if (mouseProps.mouseAction === server_editor_namespaceObject.MouseActionType.LeftButton && mouseProps.inputType === server_editor_namespaceObject.MouseInputType.ButtonUp && uiSession.toolRail.selectedOptionId === this.tool.id && mouseRay?.cursorBlockLocation) {
                        const targetLocation = mouseRay.cursorBlockLocation;
                        const noModifiers = !mouseProps.modifiers.alt && !mouseProps.modifiers.ctrl && !mouseProps.modifiers.shift;
                        const targetMode = this.cursorProperties.targetMode ?? server_editor_namespaceObject.CursorTargetMode.Block;
                        let rebuildPreview = false;
                        if (noModifiers) {
                            if (this.lineSegments.length >= 2) {
                                this.lineSegments.clear();
                            }
                            this.lineSegments.addNextPoint(targetLocation, this.props.surfaceContour, targetMode);
                            rebuildPreview = true;
                        } else if (mouseProps.modifiers.shift) {
                            this.lineSegments.addNextPoint(targetLocation, this.props.surfaceContour, targetMode);
                            rebuildPreview = true;
                        } else if (mouseProps.modifiers.ctrl) {
                            this.lineSegments.addNewPoint(targetLocation, this.props.surfaceContour, targetMode);
                            rebuildPreview = true;
                        }
                        if (rebuildPreview) {
                            this.lineSegments.rebuildPreview(this.props.lineMode);
                        }
                    }
                }
            });
            this.tool.registerMouseButtonBinding(executeAction);
        }
        registerMouseWheelAction(uiSession) {
            const mouseWheelAction = uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.MouseRayCastAction,
                onExecute: (_, mouseProps) => {
                    if (this.cursorProperties.controlMode !== server_editor_namespaceObject.CursorControlMode.Fixed) {
                        return;
                    }
                    if (mouseProps.inputType === server_editor_namespaceObject.MouseInputType.WheelOut) {
                        uiSession.extensionContext.cursor.moveBy(lib.VECTOR3_FORWARD);
                    } else if (mouseProps.inputType === server_editor_namespaceObject.MouseInputType.WheelIn) {
                        uiSession.extensionContext.cursor.moveBy(lib.VECTOR3_BACK);
                    }
                }
            });
            this.tool.registerMouseWheelBinding(mouseWheelAction);
        }
        clearState() {
            this.lineSegments.clear();
        }
        _registerToolKeyBinding(action, binding, tag) {
            this.tool.registerKeyBinding(action, binding, {
                uniqueId: `editor:lineToolKeyBinding:${tag}`,
                label: `resourcePack.editor.toolRail.line.keyBinding.${tag}`
            });
        }
    }
    LineBehavior.BEHAVIOR_NAME = "Line";
    class Stack {
        constructor(maxStackSize) {
            this.maxStackSize = maxStackSize;
            this.internalStack = [];
            this.stackHead = -1;
        }
        isEmpty() {
            return this.internalStack.length === 0;
        }
        push(element) {
            if (this.stackHead < this.internalStack.length - 1) {
                this.internalStack.length = this.stackHead + 1;
            }
            const elementsToTrim = this.maxStackSize && this.internalStack.length >= this.maxStackSize ? this.maxStackSize - this.internalStack.length + 1 : 0;
            this.internalStack = [ ...this.internalStack.slice(elementsToTrim), element ];
            this.stackHead = this.internalStack.length - 1;
        }
        moveHeadDown() {
            if (this.isEmpty()) {
                return;
            }
            this.stackHead = (0, lib.clampNumber)(--this.stackHead, 0, this.internalStack.length - 1);
        }
        moveHeadUp() {
            if (this.isEmpty()) {
                return;
            }
            this.stackHead = (0, lib.clampNumber)(++this.stackHead, 0, this.internalStack.length - 1);
        }
        head() {
            if (this.isEmpty()) {
                return undefined;
            }
            return this.internalStack[this.stackHead];
        }
        length() {
            return this.internalStack.length;
        }
        clear() {
            this.internalStack = [];
            this.stackHead = -1;
        }
        forEach(callbackfn) {
            this.internalStack.forEach(callbackfn);
        }
    }
    const logNavigationInfoDynamicPropertyName = "navigationstack:lognavigationinfo";
    class NavigationStackBehavior {
        constructor(uiSession) {
            this.uiSession = uiSession;
            this.stack = new Stack(NavigationStackBehavior.MAX_STACK_SIZE);
            this.logNavigationInfo = false;
            this.navigationLoggingMenuItem = undefined;
            this.updateInternalHandle = undefined;
            uiSession.log.debug(`Initializing ${NavigationStackBehavior.BEHAVIOR_NAME}`);
            this.loadDynamicProperties(uiSession);
            const baseMenu = uiSession.scratchStorage?.coreMenuItems?.view;
            if (baseMenu) {
                this.createMenuItemWithAction(uiSession, baseMenu);
            }
            this.bindShortcuts(uiSession);
            if (this.shouldAddAutomatedRecord(uiSession.extensionContext.player)) {
                this.addRecordToStack(uiSession);
            }
            if (!this.updateInternalHandle) {
                this.queueInitialDelayAddRecordCheck(uiSession);
            }
        }
        teardown() {
            this.uiSession.log.debug(`Shutting down ${NavigationStackBehavior.BEHAVIOR_NAME}`);
            if (this.updateInternalHandle) {
                server_namespaceObject.system.clearRun(this.updateInternalHandle);
            }
        }
        createMenuItemWithAction(uiSession, menu) {
            const toggleNavigationLoggingAction = uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    if (this.navigationLoggingMenuItem) {
                        this.logNavigationInfo = !this.logNavigationInfo;
                        this.navigationLoggingMenuItem.checked = this.logNavigationInfo;
                        uiSession.extensionContext.player.setDynamicProperty(logNavigationInfoDynamicPropertyName, this.logNavigationInfo);
                        if (this.logNavigationInfo) {
                            this.logStack();
                        }
                    }
                }
            });
            this.navigationLoggingMenuItem = menu.addItem({
                label: "resourcePack.editor.menuBar.view.navigationLogging",
                checked: this.logNavigationInfo
            }, toggleNavigationLoggingAction);
        }
        bindShortcuts(uiSession) {
            const moveHeadUpAndMovePlayerToLocation = uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    if (this.stack.isEmpty()) {
                        this.logStack();
                        return;
                    }
                    this.stack.moveHeadUp();
                    const player = uiSession.extensionContext.player;
                    const entry = this.stack.head();
                    if (entry) {
                        player.teleport(entry.pos, {
                            rotation: entry.rot,
                            dimension: entry.dimension
                        });
                    }
                    this.logStack();
                }
            });
            uiSession.inputManager.registerKeyBinding(server_editor_namespaceObject.EditorInputContext.GlobalToolMode, moveHeadUpAndMovePlayerToLocation, {
                key: server_editor_namespaceObject.KeyboardKey.BRACKET_OPEN,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, {
                uniqueId: "editor:toolModeKeyBinding:navigationNext",
                label: "resourcePack.editor.navigation.keyBinding.next"
            });
            const moveHeadDownAndMovePlayerToLocation = uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    if (this.stack.isEmpty()) {
                        this.logStack();
                        return;
                    }
                    this.stack.moveHeadDown();
                    const player = uiSession.extensionContext.player;
                    const entry = this.stack.head();
                    if (entry) {
                        player.teleport(entry.pos, {
                            rotation: entry.rot,
                            dimension: entry.dimension
                        });
                    }
                    this.logStack();
                }
            });
            uiSession.inputManager.registerKeyBinding(server_editor_namespaceObject.EditorInputContext.GlobalToolMode, moveHeadDownAndMovePlayerToLocation, {
                key: server_editor_namespaceObject.KeyboardKey.BRACKET_OPEN,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, {
                uniqueId: "editor:toolModeKeyBinding:navigationPrev",
                label: "resourcePack.editor.navigation.keyBinding.previous"
            });
            const addRecordToStackAction = uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.addRecordToStack(uiSession);
                }
            });
            uiSession.inputManager.registerKeyBinding(server_editor_namespaceObject.EditorInputContext.GlobalToolMode, addRecordToStackAction, {
                key: server_editor_namespaceObject.KeyboardKey.KEY_K,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, {
                uniqueId: "editor:toolModeKeyBinding:navigationAdd",
                label: "resourcePack.editor.navigation.keyBinding.add"
            });
        }
        shouldAddAutomatedRecord(player) {
            const headRecord = this.stack.head();
            if (headRecord) {
                if (player.dimension !== headRecord.dimension) {
                    return true;
                }
                const playerVelocity = player.getVelocity();
                const playerLocation = player.location;
                const headRecordLocation = headRecord.pos;
                const distanceFromHeadRecord = lib.Vector3Utils.magnitude(lib.Vector3Utils.subtract(headRecordLocation, playerLocation));
                const shouldAddAutomatedRecord = Math.abs(playerVelocity.x) === 0 && Math.abs(playerVelocity.y) === 0 && Math.abs(playerVelocity.z) === 0 && distanceFromHeadRecord >= NavigationStackBehavior.AUTO_ADD_MIN_DISTANCE_IN_BLOCKS;
                return shouldAddAutomatedRecord;
            } else {
                return true;
            }
        }
        addRecordToStack(uiSession) {
            const player = uiSession.extensionContext.player;
            this.stack.push({
                pos: player.location,
                rot: player.getRotation(),
                dimension: player.dimension
            });
            this.logStack();
        }
        queueInitialDelayAddRecordCheck(uiSession) {
            this.updateInternalHandle = server_namespaceObject.system.runTimeout((() => {
                if (this.shouldAddAutomatedRecord(uiSession.extensionContext.player)) {
                    this.addRecordToStack(uiSession);
                    this.queueInitialDelayAddRecordCheck(uiSession);
                } else {
                    this.doRepeatedAutomatedRecordCheck(uiSession);
                }
            }), NavigationStackBehavior.AUTO_ADD_INTERVAL_IN_SECONDS * server_namespaceObject.TicksPerSecond);
        }
        doRepeatedAutomatedRecordCheck(uiSession) {
            this.updateInternalHandle = server_namespaceObject.system.runInterval((() => {
                if (this.shouldAddAutomatedRecord(uiSession.extensionContext.player)) {
                    if (this.updateInternalHandle) {
                        server_namespaceObject.system.clearRun(this.updateInternalHandle);
                        this.updateInternalHandle = undefined;
                    }
                    this.addRecordToStack(uiSession);
                    this.queueInitialDelayAddRecordCheck(uiSession);
                }
            }), NavigationStackBehavior.POLL_INTERVAL_IN_SECONDS * server_namespaceObject.TicksPerSecond);
        }
        loadDynamicProperties(uiSession) {
            const player = uiSession.extensionContext.player;
            const logNavigationInfo = player.getDynamicProperty(logNavigationInfoDynamicPropertyName);
            if (logNavigationInfo) {
                if (typeof logNavigationInfo === "boolean") {
                    this.logNavigationInfo = logNavigationInfo;
                } else {
                    server_editor_namespaceObject.editor.log.warning(`LogNavigationInfo dynamic property type expected to be 'boolean' for NavigationStack extension, instead found '${typeof logNavigationInfo}'`);
                }
            }
        }
        logStack() {
            if (!this.logNavigationInfo) {
                return;
            }
            const logProperties = {
                tags: [ "Editor", "Navigation" ]
            };
            const headRecord = this.stack.head();
            if (headRecord) {
                this.stack.forEach(((record, index) => {
                    const pos = record.pos;
                    const rot = record.rot;
                    const dimensionID = record.dimension.id;
                    const headIndicator = record === headRecord ? "*" : "";
                    server_editor_namespaceObject.editor.log.info(`${index}: pos [${lib.Vector3Utils.toString(pos)}], rot [${lib.Vector2Utils.toString(rot)}], dim [${dimensionID}] ${headIndicator}`, logProperties);
                }));
            } else {
                server_editor_namespaceObject.editor.log.info("Navigation: stack is empty", logProperties);
            }
        }
    }
    NavigationStackBehavior.BEHAVIOR_NAME = "Navigation Stack";
    NavigationStackBehavior.MAX_STACK_SIZE = 50;
    NavigationStackBehavior.POLL_INTERVAL_IN_SECONDS = .5;
    NavigationStackBehavior.AUTO_ADD_INTERVAL_IN_SECONDS = 5;
    NavigationStackBehavior.AUTO_ADD_MIN_DISTANCE_IN_BLOCKS = 5;
    class PauseBehavior {
        constructor(uiSession) {
            this.uiSession = uiSession;
            this.pauseMenu = undefined;
            this.pauseMobsMenuItem = undefined;
            this.pauseCheckIntervalSeconds = 1;
            this.periodicPauseCheckHandle = server_namespaceObject.system.runInterval((() => {
                if (this.pauseMobsMenuItem) {
                    if (server_editor_namespaceObject.editor.simulation.isPaused()) {
                        if (this.pauseMobsMenuItem.checked === false) {
                            this.pauseMobsMenuItem.checked = true;
                        }
                    } else {
                        if (this.pauseMobsMenuItem.checked) {
                            this.pauseMobsMenuItem.checked = false;
                        }
                    }
                }
            }), this.pauseCheckIntervalSeconds * server_namespaceObject.TicksPerSecond);
        }
        createPauseMenu(worldOptions) {
            const alternatePauseMobsAction = this.uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    if (this.pauseMobsMenuItem) {
                        if (server_editor_namespaceObject.editor.simulation.isPaused()) {
                            this.pauseMobsMenuItem.checked = false;
                            server_editor_namespaceObject.editor.simulation.setPaused(false);
                        } else {
                            this.pauseMobsMenuItem.checked = true;
                            server_editor_namespaceObject.editor.simulation.setPaused(true);
                        }
                    }
                }
            });
            this.pauseMenu = worldOptions.addItem({
                label: "resourcePack.editor.menuBar.worldOptions.pause"
            });
            this.pauseMobsMenuItem = this.pauseMenu.addItem({
                label: "resourcePack.editor.menuBar.worldOptions.pause.entities",
                checked: server_editor_namespaceObject.editor.simulation.isPaused()
            }, alternatePauseMobsAction);
        }
        teardown() {
            server_namespaceObject.system.clearRun(this.periodicPauseCheckHandle);
        }
    }
    class PlayerCountBehavior {
        constructor(uiSession) {
            const statusBarItem = uiSession.createStatusBarItem(server_editor_namespaceObject.EditorStatusBarAlignment.Right, 30);
            uiSession.eventSubscriptionCache.subscribeToBedrockEvent("playerJoin", (() => this.updateStatusBarText(statusBarItem, server_namespaceObject.world.getAllPlayers().length + 1)));
            uiSession.eventSubscriptionCache.subscribeToBedrockEvent("playerLeave", (() => this.updateStatusBarText(statusBarItem, server_namespaceObject.world.getAllPlayers().length)));
            this.updateStatusBarText(statusBarItem, server_namespaceObject.world.getAllPlayers().length);
        }
        updateStatusBarText(statusBarItem, playerCount) {
            statusBarItem.text = `Connected Players: ${playerCount}`;
        }
        teardown() {}
    }
    function getEnumKeyByEnumValue(myEnum, enumValue) {
        const keys = Object.keys(myEnum);
        for (const key of keys) {
            if (myEnum[key] === enumValue) {
                return key;
            }
        }
        return "";
    }
    function formatAsTimeString(hours, minutes) {
        return hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");
    }
    const capitalizeWord = s => {
        if (s.length === 0) return s;
        return s.charAt(0).toUpperCase() + s.slice(1);
    };
    const mcHoursPerTick = 1e3;
    const mcMinsPerTick = 16.6667;
    const Custom = -2;
    const validGameModes = [ server_namespaceObject.GameMode.survival, server_namespaceObject.GameMode.creative, server_namespaceObject.GameMode.adventure ];
    const validDifficulties = [ server_namespaceObject.Difficulty.Peaceful, server_namespaceObject.Difficulty.Easy, server_namespaceObject.Difficulty.Normal, server_namespaceObject.Difficulty.Hard ];
    const validWeather = [ server_namespaceObject.WeatherType.Clear, server_namespaceObject.WeatherType.Rain, server_namespaceObject.WeatherType.Thunder ];
    const validDaylightCycle = [ server_editor_namespaceObject.DaylightCycle.Normal, server_editor_namespaceObject.DaylightCycle.AlwaysDay, server_editor_namespaceObject.DaylightCycle.LockTime ];
    const validTimes = [ {
        name: "Default",
        time: -1
    }, {
        name: "Day",
        time: server_namespaceObject.TimeOfDay.Day
    }, {
        name: "Noon",
        time: server_namespaceObject.TimeOfDay.Noon
    }, {
        name: "Sunset",
        time: server_namespaceObject.TimeOfDay.Sunset
    }, {
        name: "Night",
        time: server_namespaceObject.TimeOfDay.Night
    }, {
        name: "Midnight",
        time: server_namespaceObject.TimeOfDay.Midnight
    }, {
        name: "Sunrise",
        time: server_namespaceObject.TimeOfDay.Sunrise
    }, {
        name: "Custom",
        time: Custom
    } ];
    const paneDataDynamicPropertyName = "playtest:paneData";
    class PlaytestBehavior {
        constructor(uiSession) {
            this._lastPlayTestAvailability = false;
            this.initialize(uiSession);
        }
        addMenuItem(uiSession) {
            const coreMenuItems = uiSession.scratchStorage?.coreMenuItems;
            const playtestMenuItem = coreMenuItems?.worldOptions.addItem({
                label: "resourcePack.editor.playtest.Menu.Title"
            }, uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this._propertyPane?.show();
                }
            }));
            return playtestMenuItem;
        }
        buildPropertyPane(uiSession) {
            const propertyPane = uiSession.createPropertyPane({
                title: "resourcePack.editor.playtest.Dialog.Title"
            });
            const player = uiSession.extensionContext.player;
            const paneData = this.loadPlayTestDynamicProperties(uiSession);
            this._paneDataSource = (0, server_editor_namespaceObject.bindDataSource)(propertyPane, paneData);
            const gameTypeItems = validGameModes.map(((v, i) => {
                const item = {
                    label: capitalizeWord(v),
                    value: i
                };
                return item;
            }));
            propertyPane.addDropdown(this._paneDataSource, "gameMode", {
                title: "resourcePack.editor.playtest.Dialog.GameMode",
                dropdownItems: gameTypeItems,
                onChange: () => {
                    this.savePlayTestDynamicProperties(player);
                }
            });
            const difficultyItems = validDifficulties.map(((v, i) => {
                const item = {
                    label: getEnumKeyByEnumValue(server_namespaceObject.Difficulty, v),
                    value: i
                };
                return item;
            }));
            propertyPane.addDropdown(this._paneDataSource, "difficulty", {
                title: "resourcePack.editor.playtest.Dialog.Difficulty",
                dropdownItems: difficultyItems,
                onChange: () => {
                    this.savePlayTestDynamicProperties(player);
                }
            });
            propertyPane.addBool_deprecated(this._paneDataSource, "overrideSpawn", {
                title: "resourcePack.editor.playtest.Dialog.OverrideSpawn",
                onChange: () => {
                    this.savePlayTestDynamicProperties(player);
                }
            });
            const advancedPane = propertyPane.createPropertyPane({
                title: "Advanced Settings"
            });
            advancedPane.collapse();
            const daylightCycleItems = validDaylightCycle.map(((v, i) => {
                const item = {
                    label: getEnumKeyByEnumValue(server_editor_namespaceObject.DaylightCycle, v),
                    value: i
                };
                return item;
            }));
            advancedPane.addDropdown(this._paneDataSource, "daylightCycle", {
                title: "resourcePack.editor.playtest.Dialog.DaylightCycle",
                dropdownItems: daylightCycleItems,
                onChange: () => {
                    this.savePlayTestDynamicProperties(player);
                }
            });
            const customTime = advancedPane.addString(this._paneDataSource, "time", {
                title: "resourcePack.editor.timeOfDay.customTime",
                enable: this._paneDataSource.timeOfDay === 7,
                onChange: (_obj, _property, _oldValue, newValue) => {
                    this.savePlayTestDynamicProperties(player);
                    if (!this._paneDataSource) {
                        return;
                    }
                    if (_oldValue.toString() === newValue.toString()) {
                        return;
                    }
                    this._paneDataSource.time = this.parseTimeValue(newValue.toString());
                }
            });
            const timeItems = validTimes.map(((v, i) => {
                const item = {
                    label: v.name,
                    value: i
                };
                return item;
            }));
            advancedPane.addDropdown(this._paneDataSource, "timeOfDay", {
                title: "resourcePack.editor.playtest.Dialog.TimeOfDay",
                dropdownItems: timeItems,
                onChange: (_obj, _property, _oldValue, newValue) => {
                    if (Number.isSafeInteger(newValue)) {
                        const num = Number(validTimes[Number(newValue)].time);
                        if (num === Custom) {
                            customTime.enable = true;
                        } else if (num >= 0) {
                            if (this._paneDataSource) {
                                this._paneDataSource.time = this.getTimeStringFromTime(num);
                            }
                            customTime.enable = false;
                        }
                    }
                    this.savePlayTestDynamicProperties(player);
                }
            });
            advancedPane.addBool_deprecated(this._paneDataSource, "weatherCycle", {
                title: "resourcePack.editor.playtest.Dialog.WeatherCycle",
                onChange: () => {
                    this.savePlayTestDynamicProperties(player);
                }
            });
            const weatherItems = validWeather.map(((v, i) => {
                const item = {
                    label: getEnumKeyByEnumValue(server_namespaceObject.WeatherType, v),
                    value: i
                };
                return item;
            }));
            advancedPane.addDropdown(this._paneDataSource, "weather", {
                title: "resourcePack.editor.playtest.Dialog.weather",
                dropdownItems: weatherItems,
                onChange: (_obj, _property, _oldValue, _newValue) => {
                    if (this._paneDataSource) {
                        this._paneDataSource.weather = Number(_newValue);
                    }
                    this.savePlayTestDynamicProperties(player);
                }
            });
            advancedPane.addBool_deprecated(this._paneDataSource, "showCoordinates", {
                title: "resourcePack.editor.playtest.Dialog.ShowCoordinates",
                onChange: () => {
                    this.savePlayTestDynamicProperties(player);
                }
            });
            const informationSubPane = propertyPane.createPropertyPane({
                title: "Information"
            });
            informationSubPane.addText("resourcePack.editor.playtest.Title.Tooltip");
            this._lastPlayTestAvailability = uiSession.extensionContext.playtest.getPlaytestSessionAvailability() === server_editor_namespaceObject.PlaytestSessionResult.OK;
            this._testButton = propertyPane.addButton(uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: async () => {
                    if (!this._paneDataSource) {
                        return;
                    }
                    const options = this.getGameOptionsFromPaneSourceData(this._paneDataSource, uiSession);
                    const readyCondition = uiSession.extensionContext.playtest.getPlaytestSessionAvailability();
                    const isReady = readyCondition === server_editor_namespaceObject.PlaytestSessionResult.OK;
                    uiSession.log.debug(`Session status result: ${getEnumKeyByEnumValue(server_editor_namespaceObject.PlaytestSessionResult, readyCondition)}`);
                    if (!isReady) {
                        if (this._testButton) {
                            this._testButton.enable = false;
                        }
                        return;
                    }
                    const result = await uiSession.extensionContext.playtest.beginPlaytest(options);
                    uiSession.log.debug(`Ending Playtest Session with result: ${getEnumKeyByEnumValue(server_editor_namespaceObject.PlaytestSessionResult, result)}`);
                }
            }), {
                title: "resourcePack.editor.playtest.Dialog.TestButton",
                visible: true,
                enable: this._lastPlayTestAvailability
            });
            return propertyPane;
        }
        loadPlayTestDynamicProperties(uiSession) {
            const dynamicPaneData = uiSession.extensionContext.player.getDynamicProperty(paneDataDynamicPropertyName);
            if (dynamicPaneData) {
                try {
                    const paneData = JSON.parse(dynamicPaneData);
                    return paneData;
                } catch (error) {
                    uiSession.log.warning(`'${dynamicPaneData}' could not be parsed`);
                }
            }
            const defaultPaneData = {
                gameMode: 0,
                difficulty: 2,
                daylightCycle: server_editor_namespaceObject.DaylightCycle.Normal,
                respawnRadius: 10,
                weatherCycle: true,
                weather: 0,
                showCoordinates: true,
                timeOfDay: 0,
                time: "",
                overrideSpawn: true
            };
            return defaultPaneData;
        }
        savePlayTestDynamicProperties(player) {
            if (player) {
                player.setDynamicProperty(paneDataDynamicPropertyName, JSON.stringify(this._paneDataSource));
            }
        }
        parseTimeValue(timeString) {
            let returnStr = "";
            let time = Number(timeString);
            if (isNaN(time)) {
                if (timeString.indexOf(":") >= 0) {
                    const timeArray = timeString.split(":");
                    if (timeArray.length === 2) {
                        let hours = Number(timeArray[0]);
                        let minutes = Number(timeArray[1]);
                        if (!isNaN(hours) && !isNaN(minutes)) {
                            if (minutes > 59) {
                                minutes = 0;
                                hours += 1;
                            } else {
                                minutes = (0, lib.clampNumber)(minutes, 0, 59);
                            }
                            if (hours > 23) {
                                hours = 23;
                                minutes = 59;
                            } else {
                                hours = (0, lib.clampNumber)(hours, 0, 23);
                            }
                            returnStr = formatAsTimeString(hours.toString(), minutes.toString());
                        }
                    }
                }
            } else {
                time = (0, lib.clampNumber)(time, 0, 23999);
                returnStr = this.getTimeStringFromTime(time);
            }
            return returnStr;
        }
        getTimeFromTimeString(timeOfDay) {
            if (Number.isSafeInteger(timeOfDay)) {
                return Number(timeOfDay);
            } else {
                if (timeOfDay.indexOf(":")) {
                    const timeArray = timeOfDay.split(":");
                    if (timeArray.length === 2) {
                        let hours = Number(timeArray[0]) - 6;
                        if (hours < 0) {
                            hours = 24 - (6 + hours);
                        }
                        let minutes = Number(timeArray[1]);
                        hours = (0, lib.clampNumber)(hours, 0, 23);
                        minutes = (0, lib.clampNumber)(minutes, 0, 59);
                        return hours * mcHoursPerTick + minutes * mcMinsPerTick;
                    }
                }
            }
            return 0;
        }
        getTimeStringFromTime(timeOfDay) {
            const mcHours = Math.trunc(timeOfDay / mcHoursPerTick);
            const mcMinutes = timeOfDay % mcHoursPerTick;
            const hours = (mcHours + 6) % 24;
            let minutes = Math.round(mcMinutes / mcMinsPerTick);
            minutes = (0, lib.clampNumber)(minutes, 0, 59);
            return formatAsTimeString(hours.toString(), minutes.toString());
        }
        getGameOptionsFromPaneSourceData(data, uiSession) {
            const gameMode = validGameModes[data.gameMode];
            const difficulty = validDifficulties[data.difficulty];
            const timeOfDay = validTimes[data.timeOfDay].time;
            const daylightCycle = validDaylightCycle[data.daylightCycle];
            const options = {
                daylightCycle,
                difficulty,
                respawnRadius: data.respawnRadius,
                gameMode,
                disableWeather: !data.weatherCycle,
                weather: data.weather,
                showCoordinates: data.showCoordinates
            };
            if (timeOfDay === Custom) {
                options.timeOfDay = this.getTimeFromTimeString(data.time);
            } else if (timeOfDay >= 0) {
                options.timeOfDay = timeOfDay;
            } else {
                options.timeOfDay = 0;
            }
            if (data.overrideSpawn) {
                options.spawnPosition = uiSession.extensionContext.player.location;
                options.dimensionId = uiSession.extensionContext.player.dimension.id.replace("minecraft:", "").replace("_", " ");
            }
            return options;
        }
        initialize(uiSession) {
            this._extensionMenuItem = this.addMenuItem(uiSession);
            this._propertyPane = this.buildPropertyPane(uiSession);
            this._tickRunId = server_namespaceObject.system.runInterval((() => {
                const readyCondition = uiSession.extensionContext.playtest.getPlaytestSessionAvailability();
                const isReady = readyCondition === server_editor_namespaceObject.PlaytestSessionResult.OK;
                if (this._lastPlayTestAvailability !== isReady) {
                    if (this._testButton) {
                        this._testButton.enable = isReady;
                    }
                    this._lastPlayTestAvailability = isReady;
                }
            }), server_namespaceObject.TicksPerSecond / 4);
        }
        teardown() {
            if (this._tickRunId) {
                server_namespaceObject.system.clearRun(this._tickRunId);
            }
        }
    }
    var Selection_SelectionCursorMode;
    (function(SelectionCursorMode) {
        SelectionCursorMode[SelectionCursorMode["Freeform"] = 0] = "Freeform";
        SelectionCursorMode[SelectionCursorMode["FixedDistance"] = 1] = "FixedDistance";
        SelectionCursorMode[SelectionCursorMode["AdjacentFace"] = 2] = "AdjacentFace";
    })(Selection_SelectionCursorMode || (Selection_SelectionCursorMode = {}));
    const Controls = {
        Up: server_editor_namespaceObject.KeyboardKey.PAGE_UP,
        Down: server_editor_namespaceObject.KeyboardKey.PAGE_DOWN,
        Forward: server_editor_namespaceObject.KeyboardKey.UP,
        Back: server_editor_namespaceObject.KeyboardKey.DOWN,
        Left: server_editor_namespaceObject.KeyboardKey.LEFT,
        Right: server_editor_namespaceObject.KeyboardKey.RIGHT,
        Select: server_editor_namespaceObject.KeyboardKey.ENTER,
        Clear: server_editor_namespaceObject.KeyboardKey.KEY_D
    };
    class SelectionBehavior {
        get toolId() {
            return this.tool.id;
        }
        constructor(uiSession) {
            this.uiSession = uiSession;
            this.fnUnregisterToolBindings = () => {
                this.tool.unregisterInputBindings();
            };
            this.singleClick = (uiSession, mouseRay, shiftPressed, ctrlPressed, altPressed) => {
                const clickLoc = mouseRay.cursorBlockLocation;
                if (!shiftPressed && !ctrlPressed && !altPressed) {
                    uiSession.extensionContext.selectionManager.selection.clear();
                    uiSession.extensionContext.selectionManager.selection.pushVolume({
                        action: server_namespaceObject.CompoundBlockVolumeAction.Add,
                        volume: new server_namespaceObject.BlockVolume(clickLoc, clickLoc)
                    });
                    this.lastAnchorPosition = clickLoc;
                } else if (shiftPressed && !ctrlPressed && !altPressed) {
                    if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
                        uiSession.extensionContext.selectionManager.selection.pushVolume({
                            action: server_namespaceObject.CompoundBlockVolumeAction.Add,
                            volume: new server_namespaceObject.BlockVolume(clickLoc, clickLoc)
                        });
                        this.lastAnchorPosition = clickLoc;
                    } else {
                        const lastAnchorPosition = this.lastAnchorPosition;
                        const lastVolume = uiSession.extensionContext.selectionManager.selection.peekLastVolume();
                        uiSession.extensionContext.selectionManager.selection.popVolume();
                        try {
                            uiSession.extensionContext.selectionManager.selection.pushVolume({
                                action: server_namespaceObject.CompoundBlockVolumeAction.Add,
                                volume: new server_namespaceObject.BlockVolume(lastAnchorPosition, clickLoc)
                            });
                        } catch {
                            if (lastVolume) {
                                uiSession.extensionContext.selectionManager.selection.pushVolume(lastVolume);
                            }
                        }
                    }
                } else if (ctrlPressed && !shiftPressed && !altPressed) {
                    let success = true;
                    try {
                        uiSession.extensionContext.selectionManager.selection.pushVolume({
                            action: server_namespaceObject.CompoundBlockVolumeAction.Add,
                            volume: new server_namespaceObject.BlockVolume(clickLoc, clickLoc)
                        });
                    } catch {
                        success = false;
                    }
                    if (success) {
                        this.lastAnchorPosition = clickLoc;
                    }
                } else if (altPressed && !shiftPressed && !ctrlPressed) {
                    const currentItem = uiSession.extensionContext.selectionManager.selection.peekLastVolume();
                    if (!currentItem) {
                        uiSession.extensionContext.selectionManager.selection.pushVolume({
                            action: server_namespaceObject.CompoundBlockVolumeAction.Add,
                            volume: new server_namespaceObject.BlockVolume(clickLoc, clickLoc)
                        });
                        this.lastAnchorPosition = clickLoc;
                    } else {
                        const currentVolume = currentItem.volume;
                        const currentBounds = currentVolume.getBoundingBox();
                        const translatedRayLocation = lib.Vector3Utils.subtract(mouseRay.location, currentBounds.min);
                        const XYPlaneNormal = getRelativeXYAxisAsNormal(uiSession.extensionContext.player.getRotation().y);
                        const intersection = intersectRayPlane(translatedRayLocation, mouseRay.direction, XYPlaneNormal, 0);
                        if (intersection) {
                            const translatedIntersection = lib.Vector3Utils.add(intersection, currentBounds.min);
                            const newY = Math.ceil(translatedIntersection.y) - 1;
                            uiSession.extensionContext.selectionManager.selection.popVolume();
                            uiSession.extensionContext.selectionManager.selection.pushVolume({
                                action: currentItem.action,
                                volume: new server_namespaceObject.BlockVolume({
                                    x: currentBounds.min.x,
                                    y: currentBounds.min.y,
                                    z: currentBounds.min.z
                                }, {
                                    x: currentBounds.max.x,
                                    y: newY,
                                    z: currentBounds.max.z
                                })
                            });
                        }
                    }
                }
            };
            this.moveTopSelection = (uiSession, lastAnchor, direction) => {
                const lastVolumeItem = uiSession.extensionContext.selectionManager.selection.peekLastVolume();
                if (!lastVolumeItem) {
                    return undefined;
                }
                const lastVolume = lastVolumeItem.volume;
                uiSession.extensionContext.selectionManager.selection.popVolume();
                const rotationY = uiSession.extensionContext.player.getRotation().y;
                const correctedVector = getRotationCorrectedDirectionVector(rotationY, direction);
                const newVolume = lastVolume;
                newVolume.translate({
                    x: correctedVector.x,
                    y: correctedVector.y,
                    z: correctedVector.z
                });
                uiSession.extensionContext.selectionManager.selection.pushVolume({
                    action: lastVolumeItem.action,
                    volume: newVolume
                });
                const updatedClick = {
                    x: lastAnchor.x + correctedVector.x,
                    y: lastAnchor.y + correctedVector.y,
                    z: lastAnchor.z + correctedVector.z
                };
                return updatedClick;
            };
            this.moveBlockCursorManually = (uiSession, direction) => {
                const rotationY = uiSession.extensionContext.player.getRotation().y;
                const rotationCorrectedVector = getRotationCorrectedDirectionVector(rotationY, direction);
                uiSession.extensionContext.cursor.moveBy(rotationCorrectedVector);
            };
            this.moveAllSelections = (uiSession, anchorPosition, direction) => {
                if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
                    return undefined;
                }
                const rotationY = uiSession.extensionContext.player.getRotation().y;
                const correctedVector = getRotationCorrectedDirectionVector(rotationY, direction);
                uiSession.extensionContext.selectionManager.selection.moveBy({
                    x: correctedVector.x,
                    y: correctedVector.y,
                    z: correctedVector.z
                });
                const updatedClick = {
                    x: anchorPosition.x + correctedVector.x,
                    y: anchorPosition.y + correctedVector.y,
                    z: anchorPosition.z + correctedVector.z
                };
                return updatedClick;
            };
            this.shrinkVolume = (uiSession, direction) => {
                const lastVolumeItem = uiSession.extensionContext.selectionManager.selection.peekLastVolume();
                if (!lastVolumeItem) {
                    return;
                }
                const lastVolume = lastVolumeItem.volume;
                uiSession.extensionContext.selectionManager.selection.popVolume();
                const rotationY = uiSession.extensionContext.player.getRotation().y;
                const newVolume = shrinkVolumeAlongViewAxis(lastVolume, rotationY, direction, 1);
                uiSession.extensionContext.selectionManager.selection.pushVolume({
                    action: lastVolumeItem.action,
                    volume: newVolume
                });
            };
            this.growVolume = (uiSession, direction) => {
                const lastVolumeItem = uiSession.extensionContext.selectionManager.selection.peekLastVolume();
                if (!lastVolumeItem) {
                    return;
                }
                const lastVolume = lastVolumeItem.volume;
                uiSession.extensionContext.selectionManager.selection.popVolume();
                const rotationY = uiSession.extensionContext.player.getRotation().y;
                const newVolume = growVolumeAlongViewAxis(lastVolume, rotationY, direction, 1);
                uiSession.extensionContext.selectionManager.selection.pushVolume({
                    action: lastVolumeItem.action,
                    volume: newVolume
                });
            };
            this.bindToolInput = uiSession => {
                const singleClickAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.MouseRayCastAction,
                    onExecute: (mouseRay, mouseProps) => {
                        if (mouseProps.mouseAction === server_editor_namespaceObject.MouseActionType.LeftButton) {
                            if (mouseProps.inputType === server_editor_namespaceObject.MouseInputType.ButtonDown) {
                                if (mouseRay.rayHit || this.toolCursorProperties.controlMode === server_editor_namespaceObject.CursorControlMode.Fixed) {
                                    this.singleClick(uiSession, mouseRay, mouseProps.modifiers.shift, mouseProps.modifiers.ctrl, mouseProps.modifiers.alt);
                                } else {
                                    uiSession.extensionContext.selectionManager.selection.clear();
                                }
                            } else if (mouseProps.inputType === server_editor_namespaceObject.MouseInputType.ButtonUp) {}
                        }
                    }
                });
                this.tool.registerMouseButtonBinding(singleClickAction);
                const keyUpAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        uiSession.extensionContext.cursor.moveBy(lib.VECTOR3_UP);
                    }
                });
                const keyDownAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        uiSession.extensionContext.cursor.moveBy(lib.VECTOR3_DOWN);
                    }
                });
                const keyLeftAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        this.moveBlockCursorManually(uiSession, Direction.Left);
                    }
                });
                const keyRightAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        this.moveBlockCursorManually(uiSession, Direction.Right);
                    }
                });
                const keyForwardAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        this.moveBlockCursorManually(uiSession, Direction.Forward);
                    }
                });
                const keyBackAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        this.moveBlockCursorManually(uiSession, Direction.Back);
                    }
                });
                this._registerToolKeyBinding(keyForwardAction, {
                    key: Controls.Forward
                }, "moveCursorForward");
                this._registerToolKeyBinding(keyBackAction, {
                    key: Controls.Back
                }, "moveCursorBack");
                this._registerToolKeyBinding(keyLeftAction, {
                    key: Controls.Left
                }, "moveCursorLeft");
                this._registerToolKeyBinding(keyRightAction, {
                    key: Controls.Right
                }, "moveCursorRight");
                this._registerToolKeyBinding(keyUpAction, {
                    key: Controls.Up
                }, "moveCursorUp");
                this._registerToolKeyBinding(keyDownAction, {
                    key: Controls.Down
                }, "moveCursorDown");
                const mouseWheelAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.MouseRayCastAction,
                    onExecute: (mouseRay, mouseProps) => {
                        if (mouseProps.inputType === server_editor_namespaceObject.MouseInputType.WheelOut) {
                            if (mouseProps.modifiers.shift) {
                                this.growVolume(uiSession, Direction.Left);
                                this.growVolume(uiSession, Direction.Right);
                            } else if (mouseProps.modifiers.ctrl) {
                                this.growVolume(uiSession, Direction.Forward);
                                this.growVolume(uiSession, Direction.Back);
                            } else if (mouseProps.modifiers.alt) {
                                this.growVolume(uiSession, Direction.Up);
                                this.growVolume(uiSession, Direction.Down);
                            } else if (this.toolCursorProperties.controlMode === server_editor_namespaceObject.CursorControlMode.Fixed) {
                                uiSession.extensionContext.cursor.moveBy(lib.VECTOR3_FORWARD);
                            }
                        } else if (mouseProps.inputType === server_editor_namespaceObject.MouseInputType.WheelIn) {
                            if (mouseProps.modifiers.shift) {
                                this.shrinkVolume(uiSession, Direction.Left);
                                this.shrinkVolume(uiSession, Direction.Right);
                            } else if (mouseProps.modifiers.ctrl) {
                                this.shrinkVolume(uiSession, Direction.Forward);
                                this.shrinkVolume(uiSession, Direction.Back);
                            } else if (mouseProps.modifiers.alt) {
                                this.shrinkVolume(uiSession, Direction.Up);
                                this.shrinkVolume(uiSession, Direction.Down);
                            } else if (this.toolCursorProperties.controlMode === server_editor_namespaceObject.CursorControlMode.Fixed) {
                                uiSession.extensionContext.cursor.moveBy(lib.VECTOR3_BACK);
                            }
                        }
                    }
                });
                this.tool.registerMouseWheelBinding(mouseWheelAction);
                const moveSelectionUpAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, Direction.Up);
                        if (updatedAnchor) {
                            this.lastAnchorPosition = updatedAnchor;
                        }
                    }
                });
                const moveSelectionDownAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, Direction.Down);
                        if (updatedAnchor) {
                            this.lastAnchorPosition = updatedAnchor;
                        }
                    }
                });
                const moveSelectionLeftAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, Direction.Left);
                        if (updatedAnchor) {
                            this.lastAnchorPosition = updatedAnchor;
                        }
                    }
                });
                const moveSelectionRightAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, Direction.Right);
                        if (updatedAnchor) {
                            this.lastAnchorPosition = updatedAnchor;
                        }
                    }
                });
                const moveSelectionForwardAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, Direction.Forward);
                        if (updatedAnchor) {
                            this.lastAnchorPosition = updatedAnchor;
                        }
                    }
                });
                const moveSelectionBackAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, Direction.Back);
                        if (updatedAnchor) {
                            this.lastAnchorPosition = updatedAnchor;
                        }
                    }
                });
                this._registerToolKeyBinding(moveSelectionForwardAction, {
                    key: Controls.Forward,
                    modifier: server_editor_namespaceObject.InputModifier.Alt
                }, "moveSelectionForward");
                this._registerToolKeyBinding(moveSelectionBackAction, {
                    key: Controls.Back,
                    modifier: server_editor_namespaceObject.InputModifier.Alt
                }, "moveSelectionBack");
                this._registerToolKeyBinding(moveSelectionLeftAction, {
                    key: Controls.Left,
                    modifier: server_editor_namespaceObject.InputModifier.Alt
                }, "moveSelectionLeft");
                this._registerToolKeyBinding(moveSelectionRightAction, {
                    key: Controls.Right,
                    modifier: server_editor_namespaceObject.InputModifier.Alt
                }, "moveSelectionRight");
                this._registerToolKeyBinding(moveSelectionUpAction, {
                    key: Controls.Up,
                    modifier: server_editor_namespaceObject.InputModifier.Alt
                }, "moveSelectionUp");
                this._registerToolKeyBinding(moveSelectionDownAction, {
                    key: Controls.Up,
                    modifier: server_editor_namespaceObject.InputModifier.Alt
                }, "moveSelectionDown");
                const moveAllSelectionUpAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, Direction.Up);
                        if (updatedAnchor) {
                            this.lastAnchorPosition = updatedAnchor;
                        }
                    }
                });
                const moveAllSelectionDownAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, Direction.Down);
                        if (updatedAnchor) {
                            this.lastAnchorPosition = updatedAnchor;
                        }
                    }
                });
                const moveAllSelectionLeftAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, Direction.Left);
                        if (updatedAnchor) {
                            this.lastAnchorPosition = updatedAnchor;
                        }
                    }
                });
                const moveAllSelectionRightAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, Direction.Right);
                        if (updatedAnchor) {
                            this.lastAnchorPosition = updatedAnchor;
                        }
                    }
                });
                const moveAllSelectionForwardAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, Direction.Forward);
                        if (updatedAnchor) {
                            this.lastAnchorPosition = updatedAnchor;
                        }
                    }
                });
                const moveAllSelectionBackAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, Direction.Back);
                        if (updatedAnchor) {
                            this.lastAnchorPosition = updatedAnchor;
                        }
                    }
                });
                this._registerToolKeyBinding(moveAllSelectionForwardAction, {
                    key: Controls.Forward,
                    modifier: server_editor_namespaceObject.InputModifier.Alt | server_editor_namespaceObject.InputModifier.Control
                }, "moveAllSelectionForward");
                this._registerToolKeyBinding(moveAllSelectionBackAction, {
                    key: Controls.Back,
                    modifier: server_editor_namespaceObject.InputModifier.Alt | server_editor_namespaceObject.InputModifier.Control
                }, "moveAllSelectionBack");
                this._registerToolKeyBinding(moveAllSelectionLeftAction, {
                    key: Controls.Left,
                    modifier: server_editor_namespaceObject.InputModifier.Alt | server_editor_namespaceObject.InputModifier.Control
                }, "moveAllSelectionLeft");
                this._registerToolKeyBinding(moveAllSelectionRightAction, {
                    key: Controls.Right,
                    modifier: server_editor_namespaceObject.InputModifier.Alt | server_editor_namespaceObject.InputModifier.Control
                }, "moveAllSelectionRight");
                this._registerToolKeyBinding(moveAllSelectionUpAction, {
                    key: Controls.Up,
                    modifier: server_editor_namespaceObject.InputModifier.Alt | server_editor_namespaceObject.InputModifier.Control
                }, "moveAllSelectionUp");
                this._registerToolKeyBinding(moveAllSelectionDownAction, {
                    key: Controls.Down,
                    modifier: server_editor_namespaceObject.InputModifier.Alt | server_editor_namespaceObject.InputModifier.Control
                }, "moveAllSelectionDown");
                const keySelectAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        const blockLocation = uiSession.extensionContext.cursor.getPosition();
                        const ray = {
                            location: lib.VECTOR3_ZERO,
                            direction: lib.VECTOR3_ZERO,
                            cursorBlockLocation: blockLocation,
                            rayHit: false
                        };
                        this.singleClick(uiSession, ray, false, false, false);
                    }
                });
                this.tool.registerKeyBinding(keySelectAction, {
                    key: Controls.Select
                });
                const keySelectMultipleAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        const blockLocation = uiSession.extensionContext.cursor.getPosition();
                        const ray = {
                            location: lib.VECTOR3_ZERO,
                            direction: lib.VECTOR3_ZERO,
                            cursorBlockLocation: blockLocation,
                            rayHit: false
                        };
                        this.singleClick(uiSession, ray, false, true, false);
                    }
                });
                this.tool.registerKeyBinding(keySelectMultipleAction, {
                    key: Controls.Select,
                    modifier: server_editor_namespaceObject.InputModifier.Control
                });
                const keySelectAndExtendAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        const blockLocation = uiSession.extensionContext.cursor.getPosition();
                        const ray = {
                            location: lib.VECTOR3_ZERO,
                            direction: lib.VECTOR3_ZERO,
                            cursorBlockLocation: blockLocation,
                            rayHit: false
                        };
                        this.singleClick(uiSession, ray, true, false, false);
                    }
                });
                this.tool.registerKeyBinding(keySelectAndExtendAction, {
                    key: Controls.Select,
                    modifier: server_editor_namespaceObject.InputModifier.Shift
                });
                const keyGrowUpAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        this.growVolume(uiSession, Direction.Up);
                    }
                });
                this._registerToolKeyBinding(keyGrowUpAction, {
                    key: Controls.Up,
                    modifier: server_editor_namespaceObject.InputModifier.Shift
                }, "growUp");
                const keyGrowDownAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        this.growVolume(uiSession, Direction.Down);
                    }
                });
                this._registerToolKeyBinding(keyGrowDownAction, {
                    key: Controls.Down,
                    modifier: server_editor_namespaceObject.InputModifier.Shift
                }, "growDown");
                const keyGrowForwardAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        this.growVolume(uiSession, Direction.Forward);
                    }
                });
                this._registerToolKeyBinding(keyGrowForwardAction, {
                    key: Controls.Forward,
                    modifier: server_editor_namespaceObject.InputModifier.Shift
                }, "growForward");
                const keyGrowBackAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        this.growVolume(uiSession, Direction.Back);
                    }
                });
                this._registerToolKeyBinding(keyGrowBackAction, {
                    key: Controls.Back,
                    modifier: server_editor_namespaceObject.InputModifier.Shift
                }, "growBack");
                const keyGrowLeftAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        this.growVolume(uiSession, Direction.Left);
                    }
                });
                this._registerToolKeyBinding(keyGrowLeftAction, {
                    key: Controls.Left,
                    modifier: server_editor_namespaceObject.InputModifier.Shift
                }, "growLeft");
                const keyGrowRightAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        this.growVolume(uiSession, Direction.Right);
                    }
                });
                this._registerToolKeyBinding(keyGrowRightAction, {
                    key: Controls.Right,
                    modifier: server_editor_namespaceObject.InputModifier.Shift
                }, "growRight");
                const keyShrinkUpAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        this.shrinkVolume(uiSession, Direction.Up);
                    }
                });
                this._registerToolKeyBinding(keyShrinkUpAction, {
                    key: Controls.Up,
                    modifier: server_editor_namespaceObject.InputModifier.Control
                }, "shrinkUp");
                const keyShrinkDownAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        this.shrinkVolume(uiSession, Direction.Down);
                    }
                });
                this._registerToolKeyBinding(keyShrinkDownAction, {
                    key: Controls.Down,
                    modifier: server_editor_namespaceObject.InputModifier.Control
                }, "shrinkDown");
                const keyShrinkForwardAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        this.shrinkVolume(uiSession, Direction.Forward);
                    }
                });
                this._registerToolKeyBinding(keyShrinkForwardAction, {
                    key: Controls.Forward,
                    modifier: server_editor_namespaceObject.InputModifier.Control
                }, "shrinkForward");
                const keyShrinkBackAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        this.shrinkVolume(uiSession, Direction.Back);
                    }
                });
                this._registerToolKeyBinding(keyShrinkBackAction, {
                    key: Controls.Back,
                    modifier: server_editor_namespaceObject.InputModifier.Control
                }, "shrinkBack");
                const keyShrinkLeftAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        this.shrinkVolume(uiSession, Direction.Left);
                    }
                });
                this._registerToolKeyBinding(keyShrinkLeftAction, {
                    key: Controls.Left,
                    modifier: server_editor_namespaceObject.InputModifier.Control
                }, "shrinkLeft");
                const keyShrinkRightAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        this.shrinkVolume(uiSession, Direction.Right);
                    }
                });
                this._registerToolKeyBinding(keyShrinkRightAction, {
                    key: Controls.Right,
                    modifier: server_editor_namespaceObject.InputModifier.Control
                }, "shrinkRight");
            };
            this.updateSelectionInfo = uiSession => {
                if (!uiSession.extensionContext.selectionManager) {
                    return;
                }
                if (!this.settingsObject) {
                    uiSession.log.error("Pane settings object not defined, unable to refresh values for selection.");
                    return;
                }
                const selection = uiSession.extensionContext.selectionManager.selection;
                const lastVolumeItem = selection.peekLastVolume(server_namespaceObject.CompoundBlockVolumePositionRelativity.Absolute);
                if (!lastVolumeItem) {
                    if (this.originPropertyItem) {
                        this.originPropertyItem.enable = false;
                    }
                    if (this.sizePropertyItem) {
                        this.sizePropertyItem.enable = false;
                    }
                    return;
                }
                const lastVolume = lastVolumeItem.volume;
                const bounds = lastVolume.getBoundingBox();
                const boundsSize = server_namespaceObject.BoundingBoxUtils.getSpan(bounds);
                const x = Math.trunc(bounds.min.x);
                const y = Math.trunc(bounds.min.y);
                const z = Math.trunc(bounds.min.z);
                const origin = this.origin.value;
                if (origin.x !== x || origin.y !== y || origin.z !== z) {
                    this.origin.set({
                        x,
                        y,
                        z
                    });
                    if (this.originPropertyItem) {
                        this.originPropertyItem.enable = true;
                    }
                }
                const sx = Math.trunc(boundsSize.x);
                const sy = Math.trunc(boundsSize.y);
                const sz = Math.trunc(boundsSize.z);
                const size = this.size.value;
                if (size.x !== sx || size.y !== sy || size.z !== sz) {
                    this.size.set({
                        x: sx,
                        y: sy,
                        z: sz
                    });
                    if (this.sizePropertyItem) {
                        this.sizePropertyItem.enable = true;
                    }
                }
            };
            this.addSettingsPane = uiSession => {
                this.pane.addDropdown(this.settingsObject, "selectionMode", {
                    title: "resourcePack.editor.selectionTool.selectionMode",
                    enable: true,
                    dropdownItems: [ {
                        label: "resourcePack.editor.selectionTool.selectionMode.mouseAndKeyboard",
                        value: Selection_SelectionCursorMode.Freeform
                    }, {
                        label: "resourcePack.editor.selectionTool.selectionMode.fixedDistance",
                        value: Selection_SelectionCursorMode.FixedDistance
                    }, {
                        label: "resourcePack.editor.selectionTool.selectionMode.adjacent",
                        value: Selection_SelectionCursorMode.AdjacentFace
                    } ],
                    onChange: (_obj, _property, _oldValue, _newValue) => {
                        const oldVal = _oldValue;
                        const newVal = _newValue;
                        let cursorControlMode = server_editor_namespaceObject.CursorControlMode.KeyboardAndMouse;
                        let cursorTargetMode = server_editor_namespaceObject.CursorTargetMode.Block;
                        if (oldVal !== newVal) {
                            switch (newVal) {
                              case Selection_SelectionCursorMode.Freeform:
                                cursorControlMode = server_editor_namespaceObject.CursorControlMode.KeyboardAndMouse;
                                cursorTargetMode = server_editor_namespaceObject.CursorTargetMode.Block;
                                break;

                              case Selection_SelectionCursorMode.FixedDistance:
                                cursorControlMode = server_editor_namespaceObject.CursorControlMode.Fixed;
                                cursorTargetMode = server_editor_namespaceObject.CursorTargetMode.Block;
                                break;

                              case Selection_SelectionCursorMode.AdjacentFace:
                                cursorControlMode = server_editor_namespaceObject.CursorControlMode.KeyboardAndMouse;
                                cursorTargetMode = server_editor_namespaceObject.CursorTargetMode.Face;
                                break;

                              default:
                                uiSession.log.error(`Unknown value from selection mode drop-down`);
                                return;
                            }
                            this.toolCursorProperties = uiSession.extensionContext.cursor.getProperties();
                            this.toolCursorProperties.controlMode = cursorControlMode;
                            this.toolCursorProperties.targetMode = cursorTargetMode;
                            uiSession.extensionContext.cursor.setProperties(this.toolCursorProperties);
                        }
                    }
                });
                this.pane.addBool_deprecated(this.settingsObject, "raycastThroughLiquid", {
                    title: "resourcePack.editor.selectionTool.projectThroughLiquid",
                    onChange: (_obj, _property, _oldValue, _newValue) => {
                        const oldVal = _oldValue;
                        const newVal = _newValue;
                        if (oldVal !== newVal) {
                            this.toolCursorProperties.projectThroughLiquid = newVal;
                            uiSession.extensionContext.cursor.setProperties(this.toolCursorProperties);
                        }
                    }
                });
                this.cursorPropertyEventSub = uiSession.extensionContext.afterEvents.cursorPropertyChange.subscribe((event => {
                    if (event.properties.projectThroughLiquid !== undefined) {
                        this.settingsObject.raycastThroughLiquid = event.properties.projectThroughLiquid;
                    }
                }));
                const updateSelection = (origin, size) => {
                    const selection = uiSession.extensionContext.selectionManager.selection;
                    const lastVolume = selection.peekLastVolume(server_namespaceObject.CompoundBlockVolumePositionRelativity.Absolute);
                    if (lastVolume) {
                        const volumeOrigin = selection.getVolumeOrigin();
                        const min = {
                            x: origin.x - volumeOrigin.x,
                            y: origin.y - volumeOrigin.y,
                            z: origin.z - volumeOrigin.z
                        };
                        const max = {
                            x: min.x + size.x - 1,
                            y: min.y + size.y - 1,
                            z: min.z + size.z - 1
                        };
                        selection.popVolume();
                        try {
                            selection.pushVolume({
                                action: server_namespaceObject.CompoundBlockVolumeAction.Add,
                                volume: new server_namespaceObject.BlockVolume(min, max)
                            });
                        } catch {
                            selection.pushVolume(lastVolume);
                        }
                    }
                };
                const onOriginChange = newValue => {
                    updateSelection(newValue, this.size.value);
                };
                const onSizeChange = newValue => {
                    updateSelection(this.origin.value, newValue);
                };
                const subPaneTransform = this.pane.createPropertyPane({
                    title: "resourcePack.editor.selectionTool.transformPane.title"
                });
                this.originPropertyItem = subPaneTransform.addVector3(this.origin, {
                    title: "resourcePack.editor.selectionTool.transformPane.origin",
                    tooltip: "resourcePack.editor.selectionTool.transformPane.origin.tooltip",
                    min: {
                        y: uiSession.extensionContext.player.dimension.heightRange.min
                    },
                    max: {
                        y: uiSession.extensionContext.player.dimension.heightRange.max
                    },
                    onChange: onOriginChange
                });
                this.sizePropertyItem = subPaneTransform.addVector3(this.size, {
                    title: "resourcePack.editor.selectionTool.transformPane.size",
                    min: {
                        x: 1,
                        y: 1,
                        z: 1
                    },
                    max: {
                        x: 100,
                        y: 100,
                        z: 100
                    },
                    onChange: onSizeChange
                });
                const subPaneFill = this.pane.createPropertyPane({
                    title: "resourcePack.editor.selectionTool.fillPane.title"
                });
                subPaneFill.addButton(this.executeFillAction, {
                    title: "resourcePack.editor.selectionTool.fillPane.fillAction"
                });
                this.pane.addDivider();
                const actionClearSelection = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        uiSession.extensionContext.selectionManager.selection.clear();
                    }
                });
                this.pane.addButton(actionClearSelection, {
                    title: "resourcePack.editor.selectionTool.deselect",
                    variant: server_editor_namespaceObject.ButtonPropertyItemVariant.Secondary
                });
                this.tool.bindPropertyPane(this.pane);
                this.uiSession.eventSubscriptionCache.subscribeToBedrockEvent("playerDimensionChange", (event => {
                    if (event.player.id === uiSession.extensionContext.player.id) {
                        uiSession.extensionContext.selectionManager.selection.clear();
                        const heightRange = event.toDimension.heightRange;
                        this.originPropertyItem?.updateAxisLimits({
                            min: {
                                y: heightRange.min
                            },
                            max: {
                                y: heightRange.max
                            }
                        });
                    }
                }));
            };
            this.addTool = (uiSession, action) => {
                const tool = uiSession.toolRail.addTool({
                    title: "resourcePack.editor.selectionTool.toolRail.title",
                    icon: "pack://textures/editor/marquee.png?filtering=point",
                    tooltip: "resourcePack.editor.selectionTool.toolRail.description",
                    inputContextId: "editor:selection",
                    inputContextLabel: "resourcePack.editor.selectionTool.toolRail.title"
                }, action);
                tool.onModalToolActivation.subscribe((eventData => {
                    if (eventData.isActiveTool) {
                        uiSession.extensionContext.cursor.setProperties(this.toolCursorProperties);
                        this.updateSelectionInfo(uiSession);
                        uiSession.extensionContext.afterEvents.primarySelectionChange.subscribe(this.onSelectionChange);
                    }
                }));
                return tool;
            };
            this.onSelectionChange = () => {
                this.updateSelectionInfo(this.uiSession);
            };
            this.bindGlobalActivationShortcut = (uiSession, storage) => {
                const deselectAction = uiSession.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        uiSession.extensionContext.selectionManager.selection.clear();
                    }
                });
                uiSession.inputManager.registerKeyBinding(server_editor_namespaceObject.EditorInputContext.GlobalToolMode, this.toggleAction, {
                    key: server_editor_namespaceObject.KeyboardKey.KEY_S,
                    modifier: server_editor_namespaceObject.InputModifier.Control
                }, {
                    uniqueId: "editor:toolModeKeyBinding:toggleSelection",
                    label: "resourcePack.editor.selectionTool.keyBinding.toggleTool"
                });
                uiSession.inputManager.registerKeyBinding(server_editor_namespaceObject.EditorInputContext.GlobalToolMode, this.executeFillAction, {
                    key: server_editor_namespaceObject.KeyboardKey.KEY_F,
                    modifier: server_editor_namespaceObject.InputModifier.Control
                }, {
                    uniqueId: "editor:toolModeKeyBinding:fillSelection",
                    label: "resourcePack.editor.selectionTool.keyBinding.fill"
                });
                uiSession.inputManager.registerKeyBinding(server_editor_namespaceObject.EditorInputContext.GlobalToolMode, deselectAction, {
                    key: server_editor_namespaceObject.KeyboardKey.KEY_D,
                    modifier: server_editor_namespaceObject.InputModifier.Control
                }, {
                    uniqueId: "editor:toolModeKeyBinding:deselectSelection",
                    label: "resourcePack.editor.selectionTool.keyBinding.deselect"
                });
                storage.coreMenuItems?.edit.addItem({
                    label: "resourcePack.editor.menuBar.edit.quickFill"
                }, this.executeFillAction);
                storage.coreMenuItems?.edit.addItem({
                    label: "resourcePack.editor.menuBar.edit.deselect"
                }, deselectAction);
            };
            this.performFillOperation = async (context, fillType) => {
                const player = context.player;
                const dimension = player.dimension;
                if (context.selectionManager.selection.isEmpty) {
                    this.uiSession.log.warning("No selection available to fill");
                    return;
                }
                const operation = blockLocation => {
                    const block = dimension.getBlock(blockLocation);
                    if (block) {
                        block.setWaterlogged(false);
                        block.setType(fillType);
                    }
                };
                const onError = e => {
                    this.uiSession.log.error(`Fill operation failed with error: ${e.message}`);
                };
                await executeLargeOperationWithTransactionAndTicking(context, context.selectionManager.selection, "Select-Fill", operation).catch(onError);
            };
            const storage = uiSession.scratchStorage;
            if (!storage) {
                throw new Error("Can not instantiate Selection functionality without valid CoreEditor storage.");
            }
            this.origin = (0, server_editor_namespaceObject.makeObservable)({
                x: 0,
                y: 0,
                z: 0
            });
            this.size = (0, server_editor_namespaceObject.makeObservable)({
                x: 1,
                y: 1,
                z: 1
            });
            this.toolCursorProperties = {
                outlineColor: {
                    red: 1,
                    green: 1,
                    blue: 0,
                    alpha: 1
                },
                controlMode: server_editor_namespaceObject.CursorControlMode.KeyboardAndMouse,
                targetMode: server_editor_namespaceObject.CursorTargetMode.Block,
                visible: true
            };
            this.toggleAction = uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.toolRail.setSelectedOptionId(this.tool.id, true);
                }
            });
            this.tool = this.addTool(uiSession, this.toggleAction);
            this.pane = uiSession.createPropertyPane({
                title: "resourcePack.editor.selectionTool.settingsPane.title"
            });
            this.settingsObject = (0, server_editor_namespaceObject.bindDataSource)(this.pane, {
                selectionMode: Selection_SelectionCursorMode.Freeform,
                raycastThroughLiquid: this.toolCursorProperties.projectThroughLiquid ? this.toolCursorProperties.projectThroughLiquid : false,
                block: MinecraftBlockTypes.GrassBlock
            });
            this.lastAnchorPosition = {
                x: 0,
                y: 0,
                z: 0
            };
            this.executeFillAction = uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const blockType = uiSession.extensionContext.blockPalette.getSelectedBlockType();
                    this.performFillOperation(uiSession.extensionContext, blockType.id).catch((e => uiSession.log.error(e.message)));
                }
            });
            this.addSettingsPane(uiSession);
            this.bindToolInput(uiSession);
            this.bindGlobalActivationShortcut(uiSession, storage);
            uiSession.toolRail.setSelectedOptionId(this.tool.id, true);
        }
        teardown() {
            this.uiSession.log.debug("Shutting down minecraft::selection behavior\n");
            this.fnUnregisterToolBindings();
            this.uiSession.extensionContext.afterEvents.primarySelectionChange.unsubscribe(this.onSelectionChange);
            if (this.cursorPropertyEventSub) {
                this.uiSession.extensionContext.afterEvents.cursorPropertyChange.unsubscribe(this.cursorPropertyEventSub);
            }
            this.uiSession.extensionContext.selectionManager.selection.clear();
        }
        _registerToolKeyBinding(action, binding, tag) {
            this.tool.registerKeyBinding(action, binding, {
                uniqueId: `editor:selectionToolKeyBinding:${tag}`,
                label: `resourcePack.editor.selectionTool.keyBinding.${tag}`
            });
        }
    }
    class UndoRedoBehavior {
        constructor(uiSession, coreMenuItems) {
            this._canUndo = false;
            this._canRedo = false;
            this._transactionManager = uiSession.extensionContext.transactionManager;
            this._canUndo = this._transactionManager.undoSize() > 0;
            this._canRedo = this._transactionManager.redoSize() > 0;
            const undoAction = uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this._transactionManager.undo();
                }
            });
            const redoAction = uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this._transactionManager.redo();
                }
            });
            this._undoMenuItem = coreMenuItems.edit.addItem({
                label: "resourcePack.editor.menuBar.edit.undo",
                enabled: this._canUndo
            }, undoAction);
            this._redoMenuItem = coreMenuItems.edit.addItem({
                label: "resourcePack.editor.menuBar.edit.redo",
                enabled: this._canRedo
            }, redoAction);
            this._undoActionBarItem = uiSession.actionBar.registerItem(server_editor_namespaceObject.CoreActionBarItemType.Undo, undoAction, {
                label: "resourcePack.editor.actionBar.undo",
                icon: "undoIcon",
                tooltipTitle: "resourcePack.editor.actionBar.undo.tooltipTitle",
                tooltipDescription: "resourcePack.editor.actionBar.undo.tooltipDescription",
                enabled: this._canUndo
            });
            this._redoActionBarItem = uiSession.actionBar.registerItem(server_editor_namespaceObject.CoreActionBarItemType.Redo, redoAction, {
                label: "resourcePack.editor.actionBar.redo",
                icon: "redoIcon",
                tooltipTitle: "resourcePack.editor.actionBar.redo.tooltipTitle",
                tooltipDescription: "resourcePack.editor.actionBar.redo.tooltipDescription",
                enabled: this._canRedo
            });
            uiSession.inputManager.registerKeyBinding(server_editor_namespaceObject.EditorInputContext.GlobalEditor, undoAction, {
                key: server_editor_namespaceObject.KeyboardKey.KEY_Z,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, {
                uniqueId: "editor:globalKeyBinding:undo",
                label: "resourcePack.editor.transaction.keyBinding.undo"
            });
            uiSession.inputManager.registerKeyBinding(server_editor_namespaceObject.EditorInputContext.GlobalEditor, redoAction, {
                key: server_editor_namespaceObject.KeyboardKey.KEY_Y,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, {
                uniqueId: "editor:globalKeyBinding:redo",
                label: "resourcePack.editor.transaction.keyBinding.redo"
            });
            this.updateHandle = server_namespaceObject.system.runInterval((() => {
                this._checkUndoRedoState();
            }), server_namespaceObject.TicksPerSecond / 2);
        }
        _checkUndoRedoState() {
            const canUndo = this._transactionManager.undoSize() > 0;
            const canRedo = this._transactionManager.redoSize() > 0;
            if (canUndo !== this._canUndo) {
                if (this._undoActionBarItem) {
                    this._undoActionBarItem.setEnabled(canUndo);
                }
                if (this._undoMenuItem) {
                    this._undoMenuItem.enabled = canUndo;
                }
                this._canUndo = canUndo;
            }
            if (canRedo !== this._canRedo) {
                if (this._redoActionBarItem) {
                    this._redoActionBarItem.setEnabled(canRedo);
                }
                if (this._redoMenuItem) {
                    this._redoMenuItem.enabled = canRedo;
                }
                this._canRedo = canRedo;
            }
        }
        teardown() {
            if (this.updateHandle) {
                server_namespaceObject.system.clearRun(this.updateHandle);
            }
        }
    }
    const PreviewColor = {
        red: 0,
        green: .5,
        blue: .5,
        alpha: .2
    };
    const HighlightColor = {
        red: .5,
        green: 1,
        blue: .5,
        alpha: 1
    };
    const FillColor = {
        red: 0,
        green: 0,
        blue: .5,
        alpha: .1
    };
    class SummonTool {
        constructor(session) {
            this._session = session;
            this._cursorProperties = {
                outlineColor: {
                    red: 1,
                    green: 1,
                    blue: 0,
                    alpha: 1
                },
                controlMode: server_editor_namespaceObject.CursorControlMode.KeyboardAndMouse,
                targetMode: server_editor_namespaceObject.CursorTargetMode.Face,
                visible: true,
                fixedModeDistance: 5
            };
            this._session.extensionContext.cursor.setProperties(this._cursorProperties);
            this._previewSelection = this._session.extensionContext.selectionManager.create();
            this._previewSelection.visible = false;
            this._previewSelection.setOutlineColor(PreviewColor);
            this._previewSelection.setFillColor(FillColor);
            this._previewSelection.pushVolume({
                action: server_namespaceObject.CompoundBlockVolumeAction.Add,
                volume: new server_namespaceObject.BlockVolume(lib.VECTOR3_ZERO, lib.VECTOR3_ZERO)
            });
            const activationAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this._session.toolRail.setSelectedOptionId(this._tool.id, true);
                }
            });
            this._tool = this._session.toolRail.addTool({
                title: "resourcePack.editor.toolRail.summonTool.tool.title",
                icon: "pack://textures/editor/Entity.png?filtering=point",
                tooltip: "resourcePack.editor.toolRail.summonTool.tool.tip",
                inputContextId: "editor:summon",
                inputContextLabel: "resourcePack.editor.toolRail.summonTool.tool.title"
            }, activationAction);
            this._tool.onModalToolActivation.subscribe((eventData => {
                if (eventData.isActiveTool) {
                    this._session.extensionContext.cursor.setProperties(this._cursorProperties);
                } else {
                    this.shutdownMouseWatcher();
                    this.clearSelection();
                }
            }));
            this._createTransactionHandler = (0, server_editor_namespaceObject.registerUserDefinedTransactionHandler)(this._session.extensionContext.transactionManager, (() => {
                this.clearSelection();
            }), (payload => {
                const entity = server_namespaceObject.world.getEntity(payload.entityID);
                if (entity) {
                    this.selectEntity(entity);
                }
            }));
            this._deleteTransactionHandler = (0, server_editor_namespaceObject.registerUserDefinedTransactionHandler)(this._session.extensionContext.transactionManager, (payload => {
                const entity = server_namespaceObject.world.getEntity(payload.entityID);
                if (entity) {
                    this.selectEntity(entity);
                }
            }), (() => {
                this.clearSelection();
            }));
            this._session.inputManager.registerKeyBinding(server_editor_namespaceObject.EditorInputContext.GlobalToolMode, activationAction, {
                key: server_editor_namespaceObject.KeyboardKey.KEY_S,
                modifier: server_editor_namespaceObject.InputModifier.Control | server_editor_namespaceObject.InputModifier.Shift
            }, {
                uniqueId: "editor:toolModeKeyBinding:toggleSummonTool",
                label: "resourcePack.editor.toolRail.summonTool.keyBinding.toggle"
            });
            this._registerToolKeyBinding(this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    if (this._selectedEntity) {
                        const manager = this._session.extensionContext.transactionManager;
                        manager.openTransaction("Summon Tool - Delete Entity");
                        try {
                            if (this._selectedEntity) {
                                const transactionPayload = {
                                    entityID: this._selectedEntity.id
                                };
                                this._deleteTransactionHandler.addUserDefinedOperation(transactionPayload, "Entity Delete");
                                manager.addEntityOperation(this._selectedEntity, server_editor_namespaceObject.EntityOperationType.Delete);
                            }
                        } catch (e) {
                            this._session.log.warning(`Unable to commit delete entity transaction. ${stringFromException(e)}`);
                            manager.discardOpenTransaction();
                            return;
                        }
                        manager.commitOpenTransaction();
                        try {
                            this._selectedEntity.remove();
                        } catch (e) {
                            this._session.log.error(`${stringFromException(e)}`);
                        } finally {
                            this.clearSelection();
                        }
                    }
                }
            }), {
                key: server_editor_namespaceObject.KeyboardKey.DELETE
            }, "delete");
            this._registerToolKeyBinding(this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.clearSelection();
                }
            }), {
                key: server_editor_namespaceObject.KeyboardKey.KEY_D,
                modifier: server_editor_namespaceObject.InputModifier.Control
            }, "clear");
            const keyUpAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.nudgeSelected(lib.VECTOR3_UP);
                }
            });
            const keyDownAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.nudgeSelected(lib.VECTOR3_DOWN);
                }
            });
            const keyLeftAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(Direction.Left);
                    this.nudgeSelected(nudgeVector);
                }
            });
            const keyRightAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(Direction.Right);
                    this.nudgeSelected(nudgeVector);
                }
            });
            const keyForwardAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(Direction.Forward);
                    this.nudgeSelected(nudgeVector);
                }
            });
            const keyBackAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const nudgeVector = this.getRelativeNudgeDirection(Direction.Back);
                    this.nudgeSelected(nudgeVector);
                }
            });
            this._registerToolKeyBinding(keyForwardAction, {
                key: server_editor_namespaceObject.KeyboardKey.UP
            }, "moveForward");
            this._registerToolKeyBinding(keyBackAction, {
                key: server_editor_namespaceObject.KeyboardKey.DOWN
            }, "moveBack");
            this._registerToolKeyBinding(keyLeftAction, {
                key: server_editor_namespaceObject.KeyboardKey.LEFT
            }, "moveLeft");
            this._registerToolKeyBinding(keyRightAction, {
                key: server_editor_namespaceObject.KeyboardKey.RIGHT
            }, "moveRight");
            this._registerToolKeyBinding(keyUpAction, {
                key: server_editor_namespaceObject.KeyboardKey.PAGE_UP
            }, "moveUp");
            this._registerToolKeyBinding(keyDownAction, {
                key: server_editor_namespaceObject.KeyboardKey.PAGE_DOWN
            }, "moveDown");
            this._rotation = 0;
            this._mouseMoveWatcherId = -1;
            {
                this._pane = this._session.createPropertyPane({
                    title: "resourcePack.editor.toolRail.summonTool.pane.title"
                });
                this._paneBindingData = (0, server_editor_namespaceObject.bindDataSource)(this._pane, {
                    entityType: MinecraftEntityTypes.Pig,
                    rotation: 0
                });
                this._pane.addNumber(this._paneBindingData, "rotation", {
                    title: "resourcePack.editor.toolRail.summonTool.tool.selectSubPane.rotation",
                    min: -180,
                    max: 180,
                    showSlider: true,
                    onChange: (_obj, _property, _oldValue, _newValue) => {
                        const rotation = _newValue;
                        this._rotation = rotation;
                        this.updateRotation();
                    }
                });
                this._pane.addText("resourcePack.editor.toolRail.summonTool.tool.infoText");
                this._pane.addEntityPicker(this._paneBindingData, "entityType", {
                    title: "resourcePack.editor.summonTool.summonSubPane.EntityPickerTitle"
                });
                this._tool.bindPropertyPane(this._pane);
            }
            const executeMouseButtonAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.MouseRayCastAction,
                onExecute: (mouseRay, mouseProps) => {
                    if (mouseProps.mouseAction !== server_editor_namespaceObject.MouseActionType.LeftButton) {
                        return;
                    }
                    const buttonDown = mouseProps.inputType === server_editor_namespaceObject.MouseInputType.ButtonDown;
                    if (buttonDown) {
                        const player = this._session.extensionContext.player;
                        const dimension = player.dimension;
                        const entityHitList = dimension.getEntitiesFromRay(mouseRay.location, mouseRay.direction);
                        let hitEntity = undefined;
                        if (entityHitList.length > 1) {
                            hitEntity = entityHitList[1];
                            if (hitEntity.entity === this._selectedEntity) {
                                this.handleBeginSelectMove(mouseRay);
                            } else if (hitEntity.entity !== this._selectedEntity) {
                                this.selectEntity(hitEntity.entity);
                            }
                        } else {
                            this.handleBeginSummonMode(mouseRay);
                        }
                    } else {
                        if (this._mouseMoveWatcherId >= 0) {
                            this.handleEndSelectMove(mouseRay);
                        }
                    }
                }
            });
            this._tool.registerMouseButtonBinding(executeMouseButtonAction);
            const rotateEntityAction = this._session.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.MouseRayCastAction,
                onExecute: (mouseRay, mouseProps) => {
                    if (!this._selectedEntity) {
                        return;
                    }
                    if (mouseProps.mouseAction === server_editor_namespaceObject.MouseActionType.Wheel) {
                        if (mouseProps.inputType === server_editor_namespaceObject.MouseInputType.WheelOut) {
                            this._rotation += 10;
                            this.updateRotation();
                        } else if (mouseProps.inputType === server_editor_namespaceObject.MouseInputType.WheelIn) {
                            this._rotation -= 10;
                            this.updateRotation();
                        }
                    }
                }
            });
            this._tool.registerMouseWheelBinding(rotateEntityAction);
        }
        nudgeSelected(nudgeVector) {
            if (this._selectedEntity && this._mouseMoveWatcherId < 0) {
                const currentLocation = this._selectedEntity.location;
                const newLocation = lib.Vector3Utils.add(currentLocation, nudgeVector);
                this._selectedEntity.teleport(newLocation);
                this.updateSelectionPreview();
            }
        }
        selectEntity(entity) {
            this._selectedEntity = entity;
            this._rotation = entity.getRotation().y;
            this.updateSelectionPreview();
        }
        getRelativeNudgeDirection(direction) {
            const rotationY = this._session.extensionContext.player.getRotation().y;
            const rotationCorrectedVector = getRotationCorrectedDirectionVector(rotationY, direction);
            return rotationCorrectedVector;
        }
        updateRotation() {
            if (!this._selectedEntity) {
                return;
            }
            let rotation = this._rotation;
            if (rotation < -180) {
                rotation += 360;
            } else if (rotation > 180) {
                rotation -= 360;
            }
            const location = this._selectedEntity.location;
            this._selectedEntity.setRotation({
                x: 0,
                y: rotation
            });
            this._selectedEntity.teleport(location);
            this._paneBindingData.rotation = rotation;
            this._rotation = rotation;
        }
        shutdownMouseWatcher() {
            if (this._mouseMoveWatcherId >= 0) {
                server_namespaceObject.system.clearRun(this._mouseMoveWatcherId);
                this._mouseMoveWatcherId = -1;
            }
        }
        handleEndSelectMove(mouseRay) {
            this.shutdownMouseWatcher();
            if (this._selectedEntity) {
                const targetLoc = {
                    x: mouseRay.cursorBlockLocation.x + .5,
                    y: mouseRay.cursorBlockLocation.y,
                    z: mouseRay.cursorBlockLocation.z + .5
                };
                this._selectedEntity.teleport(targetLoc);
            }
            this.updateSelectionPreview();
        }
        handleBeginSelectMove(_) {
            if (!this._selectedEntity) {
                return;
            }
            let currentCursorLocation = this._session.extensionContext.cursor.getPosition();
            const mouseWatcherTick = () => {
                if (this._mouseMoveWatcherId >= 0 && this._selectedEntity) {
                    const cursorLoc = lib.Vector3Utils.floor(this._session.extensionContext.cursor.getPosition());
                    if (!lib.Vector3Utils.equals(cursorLoc, currentCursorLocation)) {
                        currentCursorLocation = cursorLoc;
                        const entityNewPos = lib.Vector3Utils.add(currentCursorLocation, {
                            x: .5,
                            y: 0,
                            z: .5
                        });
                        this._selectedEntity.teleport(entityNewPos);
                        this.updateSelectionPreview(true);
                    }
                    this._mouseMoveWatcherId = server_namespaceObject.system.run(mouseWatcherTick);
                }
            };
            this._mouseMoveWatcherId = server_namespaceObject.system.run(mouseWatcherTick);
            this.updateSelectionPreview(true);
        }
        handleBeginSummonMode(mouseRay) {
            const spawnLoc = {
                x: mouseRay.cursorBlockLocation.x + .5,
                y: mouseRay.cursorBlockLocation.y,
                z: mouseRay.cursorBlockLocation.z + .5
            };
            const player = this._session.extensionContext.player;
            const dimension = player.dimension;
            try {
                this._selectedEntity = dimension.spawnEntity(this._paneBindingData.entityType, spawnLoc, {
                    initialPersistence: true
                });
            } catch (e) {
                this._session.log.error(`${stringFromException(e)}`);
                this.clearSelection();
            }
            this.updateSelectionPreview();
            this.updateRotation();
            const manager = this._session.extensionContext.transactionManager;
            manager.openTransaction("Summon Tool - Create Entity");
            try {
                if (this._selectedEntity) {
                    manager.addEntityOperation(this._selectedEntity, server_editor_namespaceObject.EntityOperationType.Create);
                    const transactionPayload = {
                        entityID: this._selectedEntity.id
                    };
                    this._createTransactionHandler.addUserDefinedOperation(transactionPayload, "Entity Create");
                }
            } catch (e) {
                this._session.log.warning(`Unable to commit create entity transaction. ${stringFromException(e)}`);
                manager.discardOpenTransaction();
                return;
            }
            manager.commitOpenTransaction();
        }
        teardown() {
            this.shutdownMouseWatcher();
        }
        clearSelection() {
            this._previewSelection.visible = false;
            this._selectedEntity = undefined;
        }
        updateSelectionPreview(highlight = false) {
            if (this._selectedEntity) {
                this._previewSelection.visible = true;
                this._previewSelection.moveTo(this._selectedEntity.location);
                if (highlight) {
                    this._previewSelection.setOutlineColor(HighlightColor);
                } else {
                    this._previewSelection.setOutlineColor(PreviewColor);
                }
            } else {
                this._previewSelection.visible = false;
            }
        }
        _registerToolKeyBinding(action, binding, tag) {
            this._tool.registerKeyBinding(action, binding, {
                uniqueId: `editor:summonToolKeyBinding:${tag}`,
                label: `resourcePack.editor.toolRail.summonTool.keyBinding.${tag}`
            });
        }
    }
    const BLOCK_PALETTE_SIZE = 9;
    const DEFAULT_BLOCK_PALETTE_PROPERTY_ID = "editor:defaultBlockPalettePropertyId";
    const DEFAULT_BLOCK_PALETTE_ID = "editor:defaultBlockPalette";
    const DEFAULT_BLOCK_PALETTE_BLOCKS = [ "minecraft:grass_block", "minecraft:stone", "minecraft:brick_block", "minecraft:copper_block", "minecraft:glowstone", "minecraft:oak_planks", "minecraft:moss_block", "minecraft:blue_ice", "minecraft:amethyst_block" ];
    class BlockPaletteBehavior {
        constructor(uiSession) {
            this.uiSession = uiSession;
            this.tickHandle = undefined;
            uiSession.log.debug(`Initializing ${BlockPaletteBehavior.BEHAVIOR_NAME}`);
            const ids = uiSession.extensionContext.blockPalette.getPaletteIdList();
            this.defaultPaletteId = ids.length > 0 ? ids[0] : DEFAULT_BLOCK_PALETTE_ID;
            const savedPaletteJsonStr = uiSession.extensionContext.player.getDynamicProperty(DEFAULT_BLOCK_PALETTE_PROPERTY_ID);
            let didLoadPalette = false;
            if (savedPaletteJsonStr) {
                const savePaletteData = JSON.parse(savedPaletteJsonStr);
                if (savePaletteData) {
                    this.loadBlockPalette(savePaletteData);
                    didLoadPalette = true;
                }
            }
            if (!didLoadPalette) {
                for (let i = 0; i < DEFAULT_BLOCK_PALETTE_BLOCKS.length; i++) {
                    const simplePaletteItem = new server_editor_namespaceObject.SimpleBlockPaletteItem;
                    simplePaletteItem.setBlock(DEFAULT_BLOCK_PALETTE_BLOCKS[i]);
                    uiSession.extensionContext.blockPalette.setPaletteItem(this.defaultPaletteId, i, simplePaletteItem);
                }
            }
            this.tickHandle = server_namespaceObject.system.runInterval((() => {
                this.saveBlockPalette();
            }), server_namespaceObject.TicksPerSecond * 5);
        }
        loadBlockPalette(blockPaletteData) {
            blockPaletteData.items.map((item => {
                if (item.type === server_editor_namespaceObject.BlockPaletteItemType.Simple) {
                    const itemData = item;
                    const simplePaletteItem = new server_editor_namespaceObject.SimpleBlockPaletteItem;
                    simplePaletteItem.setBlock(itemData.displayName);
                    this.uiSession.extensionContext.blockPalette.setPaletteItem(this.defaultPaletteId, itemData.index, simplePaletteItem);
                } else {
                    const itemData = item;
                    const probPaletteItem = new server_editor_namespaceObject.ProbabilityBlockPaletteItem;
                    itemData.blocks.map((block => {
                        probPaletteItem.addBlock(block.blockName, block.weight);
                    }));
                    this.uiSession.extensionContext.blockPalette.setPaletteItem(this.defaultPaletteId, itemData.index, probPaletteItem);
                }
            }));
        }
        saveBlockPalette() {
            const items = [];
            for (let i = 0; i < BLOCK_PALETTE_SIZE; i++) {
                const paletteItem = this.uiSession.extensionContext.blockPalette.getPaletteItem(this.defaultPaletteId, i);
                if (paletteItem) {
                    if (paletteItem.getType() === server_editor_namespaceObject.BlockPaletteItemType.Simple) {
                        const simpleItem = {
                            displayName: paletteItem.getDisplayName(),
                            index: i,
                            type: paletteItem.getType()
                        };
                        items.push(simpleItem);
                    } else {
                        const probBlockPaletteItem = paletteItem;
                        const blocks = probBlockPaletteItem.getBlocks();
                        const blockData = [];
                        if (blocks) {
                            blocks.map((block => {
                                blockData.push({
                                    weight: block.weight,
                                    blockName: block.block.id
                                });
                            }));
                        }
                        const probItem = {
                            index: i,
                            type: paletteItem.getType(),
                            blocks: blockData
                        };
                        items.push(probItem);
                    }
                }
            }
            const palette = {
                id: this.defaultPaletteId,
                items
            };
            this.uiSession.extensionContext.player.setDynamicProperty(DEFAULT_BLOCK_PALETTE_PROPERTY_ID, JSON.stringify(palette));
        }
        teardown() {
            if (this.tickHandle) {
                server_namespaceObject.system.clearRun(this.tickHandle);
            }
        }
    }
    BlockPaletteBehavior.BEHAVIOR_NAME = "Block Palette";
    const TimeOfDay_mcHoursPerTick = 1e3;
    const TimeOfDay_mcMinsPerTick = 16.6667;
    var ClockType;
    (function(ClockType) {
        ClockType[ClockType["CLOCK_24HR"] = 0] = "CLOCK_24HR";
        ClockType[ClockType["CLOCK_12HR"] = 1] = "CLOCK_12HR";
        ClockType[ClockType["MINECRAFT_CLOCK"] = 2] = "MINECRAFT_CLOCK";
    })(ClockType || (ClockType = {}));
    const clockValues = [ {
        stringId: "resourcePack.editor.timeOfDay.24hrClock",
        index: ClockType.CLOCK_24HR
    }, {
        stringId: "resourcePack.editor.timeOfDay.12hrClock",
        index: ClockType.CLOCK_12HR
    }, {
        stringId: "resourcePack.editor.timeOfDay.minecraftClock",
        index: ClockType.MINECRAFT_CLOCK
    } ];
    var TODDropDown;
    (function(TODDropDown) {
        TODDropDown[TODDropDown["Day"] = 1e3] = "Day";
        TODDropDown[TODDropDown["Noon"] = 6e3] = "Noon";
        TODDropDown[TODDropDown["Sunset"] = 12e3] = "Sunset";
        TODDropDown[TODDropDown["Night"] = 13e3] = "Night";
        TODDropDown[TODDropDown["Midnight"] = 18e3] = "Midnight";
        TODDropDown[TODDropDown["Sunrise"] = 23e3] = "Sunrise";
        TODDropDown[TODDropDown["None"] = 100001] = "None";
    })(TODDropDown || (TODDropDown = {}));
    const validPresets = [ {
        stringId: "resourcePack.editor.timeOfDay.dropDown.none",
        time: TODDropDown.None
    }, {
        stringId: "resourcePack.editor.timeOfDay.dropDown.day",
        time: TODDropDown.Day
    }, {
        stringId: "resourcePack.editor.timeOfDay.dropDown.noon",
        time: TODDropDown.Noon
    }, {
        stringId: "resourcePack.editor.timeOfDay.dropDown.sunset",
        time: TODDropDown.Sunset
    }, {
        stringId: "resourcePack.editor.timeOfDay.dropDown.night",
        time: TODDropDown.Night
    }, {
        stringId: "resourcePack.editor.timeOfDay.dropDown.midnight",
        time: TODDropDown.Midnight
    }, {
        stringId: "resourcePack.editor.timeOfDay.dropDown.sunrise",
        time: TODDropDown.Sunrise
    } ];
    const TimeOfDay_validDaylightCycle = [ server_editor_namespaceObject.DaylightCycle.Normal, server_editor_namespaceObject.DaylightCycle.AlwaysDay, server_editor_namespaceObject.DaylightCycle.LockTime ];
    function TimeOfDay_getEnumKeyByEnumValue(myEnum, enumValue) {
        const keys = Object.keys(myEnum);
        for (const key of keys) {
            if (myEnum[key] === enumValue) {
                return key;
            }
        }
        return "";
    }
    class TimeOfDayBehavior {
        constructor(uiSession, parentMenu) {
            this.uiSession = uiSession;
            this.amStr = "A.M.";
            this.pmStr = "P.M.";
            this.openMenuAction = this.uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    if (this.settings) {
                        this.settings.timeOfDayValue = server_namespaceObject.world.getTimeOfDay();
                    }
                    this.extensionPane?.show();
                }
            });
            this.createMenuItem(parentMenu);
            this.extensionPane = uiSession.createPropertyPane({
                title: "resourcePack.editor.timeOfDay.title"
            });
            const paneData = {
                timeOfDayValue: server_namespaceObject.world.getTimeOfDay(),
                timeOfDayTime: this.convertTODToTime(server_namespaceObject.world.getTimeOfDay(), false),
                clockType: Number(ClockType.CLOCK_24HR),
                clock: 0,
                customTime: -1,
                daylightCycle: server_editor_namespaceObject.DaylightCycle.Normal,
                currentPreset: TODDropDown.None
            };
            this.settings = (0, server_editor_namespaceObject.bindDataSource)(this.extensionPane, paneData);
            const clockItems = clockValues.map((v => {
                const item = {
                    label: v.stringId,
                    value: v.index
                };
                return item;
            }));
            this.extensionPane.addDropdown(this.settings, "clockType", {
                title: "resourcePack.editor.timeOfDay.clockType",
                dropdownItems: clockItems,
                onChange: (_obj, _property, _oldValue, _newValue) => {}
            });
            this.extensionPane.addString(this.settings, "timeOfDayTime", {
                title: "resourcePack.editor.timeOfDay.currentTime",
                enable: false
            });
            const daylightCycleItems = TimeOfDay_validDaylightCycle.map(((v, i) => {
                const item = {
                    label: TimeOfDay_getEnumKeyByEnumValue(server_editor_namespaceObject.DaylightCycle, v),
                    value: i
                };
                return item;
            }));
            this.extensionPane.addDropdown(this.settings, "daylightCycle", {
                title: "resourcePack.editor.timeOfDay.daylightCycle",
                dropdownItems: daylightCycleItems,
                visible: true,
                onChange: (_obj, _property, _oldValue, newValue) => {
                    const currentTime = server_namespaceObject.world.getTimeOfDay();
                    this.setDaylightCycle(Number(newValue), currentTime, uiSession);
                    if (this.settings) {
                        this.settings.currentPreset = TODDropDown.None;
                    }
                }
            });
            this.extensionPane.addDivider();
            const timeItems = validPresets.map((v => {
                const item = {
                    label: v.stringId,
                    value: v.time
                };
                return item;
            }));
            this.extensionPane.addDropdown(this.settings, "currentPreset", {
                title: "resourcePack.editor.timeOfDay.dropDown.title",
                dropdownItems: timeItems,
                onChange: (_obj, _property, _oldValue, newValue) => {
                    if (Number.isSafeInteger(newValue)) {
                        const num = Number(newValue);
                        if (num === TODDropDown.None) {
                            customTime.enable = true;
                            customTime.visible = true;
                        } else {
                            if (this.settings) {
                                this.setDaylightCycle(server_editor_namespaceObject.DaylightCycle.LockTime, num, uiSession);
                                this.settings.timeOfDayValue = num;
                            }
                            server_namespaceObject.world.setTimeOfDay(num);
                            customTime.enable = false;
                            customTime.visible = false;
                        }
                    }
                }
            });
            const customTime = this.extensionPane.addNumber(this.settings, "timeOfDayValue", {
                title: "resourcePack.editor.timeOfDay.customTime",
                min: 0,
                max: 24 * TimeOfDay_mcHoursPerTick - 1,
                showSlider: true,
                enable: this.settings?.daylightCycle === server_editor_namespaceObject.DaylightCycle.Normal,
                visible: true,
                onChange: (_obj, _property, _oldValue, newValue) => {
                    paneData.timeOfDayValue = Number(newValue);
                    const newTime = Number(newValue);
                    this.setDaylightCycle(server_editor_namespaceObject.DaylightCycle.LockTime, newTime, uiSession);
                    if (this.settings) {
                        this.settings.daylightCycle = server_editor_namespaceObject.DaylightCycle.LockTime;
                    }
                    if (this.settings && this.settings.currentPreset === TODDropDown.None) {
                        this.settings.customTime = newTime;
                    }
                }
            });
            this.updateHandle = server_namespaceObject.system.runInterval((() => {
                const currentTime = server_namespaceObject.world.getTimeOfDay();
                if (this.settings) {
                    if (this.settings.clockType !== ClockType.MINECRAFT_CLOCK) {
                        const is24HrClock = this.settings.clockType === ClockType.CLOCK_24HR ? true : false;
                        this.settings.timeOfDayTime = this.convertTODToTime(server_namespaceObject.world.getTimeOfDay(), is24HrClock);
                    } else {
                        this.settings.timeOfDayTime = currentTime.toString();
                    }
                }
            }), 3);
        }
        createMenuItem(menu) {
            menu.addItem({
                label: "resourcePack.editor.timeOfDay.menu.title"
            }, this.openMenuAction);
        }
        convertTODToTime(timeOfDay, use24HrClock) {
            let ampm = "";
            const isPM = timeOfDay >= server_namespaceObject.TimeOfDay.Noon && timeOfDay < server_namespaceObject.TimeOfDay.Midnight;
            if (!use24HrClock) {
                if (isPM) {
                    ampm = " " + this.pmStr;
                } else {
                    ampm = " " + this.amStr;
                }
            }
            let hours = (6 + Math.floor(timeOfDay / TimeOfDay_mcHoursPerTick)) % 24;
            let numZeroes = 2;
            if (!use24HrClock) {
                hours = hours % 12;
                hours = hours === 0 ? 12 : hours;
                numZeroes = 1;
            }
            const hourStr = hours.toString().padStart(numZeroes, "0");
            timeOfDay %= TimeOfDay_mcHoursPerTick;
            const minutes = Math.floor(timeOfDay / TimeOfDay_mcMinsPerTick);
            const minuteStr = minutes.toString().padStart(2, "0");
            return `${hourStr}:${minuteStr}${ampm}`;
        }
        convertToTOD(hours, minutes) {
            hours -= 6;
            if (hours < 0) {
                hours = 24 - (6 + hours);
            }
            return hours * TimeOfDay_mcHoursPerTick + minutes * TimeOfDay_mcMinsPerTick;
        }
        setDaylightCycle(daylightCycle, currentTime, uiSession) {
            if (this.settings) {
                this.settings.daylightCycle = daylightCycle;
            }
            server_namespaceObject.world.getDimension("overworld").runCommandAsync(`alwaysday ${(daylightCycle === server_editor_namespaceObject.DaylightCycle.AlwaysDay || daylightCycle === server_editor_namespaceObject.DaylightCycle.LockTime).toString()}`).then((() => {
                const timeStr = daylightCycle === server_editor_namespaceObject.DaylightCycle.Normal ? "started" : "stopped";
                uiSession.log.info(`Time ${timeStr}`);
                if (daylightCycle === server_editor_namespaceObject.DaylightCycle.AlwaysDay) {
                    server_namespaceObject.world.setTimeOfDay(TODDropDown.Noon);
                } else {
                    server_namespaceObject.world.setTimeOfDay(currentTime);
                }
            })).catch((_ => uiSession.log.error("Unable to adjust daylight cycle due to unknown error.")));
        }
        teardown() {
            if (this.updateHandle) {
                server_namespaceObject.system.clearRun(this.updateHandle);
            }
        }
    }
    TimeOfDayBehavior.BEHAVIOR_NAME = "Time of Day";
    class WeatherBehavior {
        auxLog(logString, currentPlayer) {
            const currentTags = [ "Editor", "Weather" ];
            const currentLogProperties = {
                player: currentPlayer,
                tags: currentTags
            };
            server_editor_namespaceObject.editor.log.info(logString, currentLogProperties);
        }
        setWeatherAndLog(newWeatherType) {
            const dimension = server_namespaceObject.world.getDimension("overworld");
            dimension.setWeather(newWeatherType, this.weatherDuration);
            this.auxLog(`Setting weather to ${newWeatherType} in the Overworld dimension`);
        }
        getWeather() {
            const dimension = server_namespaceObject.world.getDimension("overworld");
            return dimension.getWeather();
        }
        resetMenuStates() {
            if (this.clearWeatherMenuItem) {
                this.clearWeatherMenuItem.checked = false;
            }
            if (this.rainWeatherMenuItem) {
                this.rainWeatherMenuItem.checked = false;
            }
            if (this.thunderWeatherMenuItem) {
                this.thunderWeatherMenuItem.checked = false;
            }
        }
        updateMenuStates(newWeatherType) {
            this.resetMenuStates();
            switch (newWeatherType) {
              case server_namespaceObject.WeatherType.Clear:
                if (this.clearWeatherMenuItem) {
                    this.clearWeatherMenuItem.checked = true;
                }
                break;

              case server_namespaceObject.WeatherType.Rain:
                if (this.rainWeatherMenuItem) {
                    this.rainWeatherMenuItem.checked = true;
                }
                break;

              case server_namespaceObject.WeatherType.Thunder:
                if (this.thunderWeatherMenuItem) {
                    this.thunderWeatherMenuItem.checked = true;
                }
                break;
            }
        }
        setSubscriptionToWeatherChangeEvent(uiSession) {
            uiSession.eventSubscriptionCache.subscribeToBedrockEvent("weatherChange", (evt => {
                this.auxLog(`Weather is now ${evt.newWeather} in the Overworld dimension`, uiSession.extensionContext.player);
                this.updateMenuStates(evt.newWeather);
            }));
        }
        constructor(uiSession, parentMenu) {
            this.uiSession = uiSession;
            this.weatherMenu = undefined;
            this.clearWeatherMenuItem = undefined;
            this.rainWeatherMenuItem = undefined;
            this.thunderWeatherMenuItem = undefined;
            this.weatherDuration = 1e6;
            this.createWeatherMenu(parentMenu);
            this.setSubscriptionToWeatherChangeEvent(this.uiSession);
            this.updateMenuStates(this.getWeather());
        }
        createWeatherMenu(parentMenu) {
            const weatherClearAction = this.uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.setWeatherAndLog(server_namespaceObject.WeatherType.Clear);
                }
            });
            const weatherRainAction = this.uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.setWeatherAndLog(server_namespaceObject.WeatherType.Rain);
                }
            });
            const weatherThunderAction = this.uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.setWeatherAndLog(server_namespaceObject.WeatherType.Thunder);
                }
            });
            if (this.uiSession.scratchStorage) {
                this.weatherMenu = parentMenu.addItem({
                    label: "resourcePack.editor.menuBar.parentMenu.weather"
                });
                this.clearWeatherMenuItem = this.weatherMenu.addItem({
                    label: "resourcePack.editor.menuBar.parentMenu.weather.clear"
                }, weatherClearAction);
                this.rainWeatherMenuItem = this.weatherMenu.addItem({
                    label: "resourcePack.editor.menuBar.parentMenu.weather.rain"
                }, weatherRainAction);
                this.thunderWeatherMenuItem = this.weatherMenu.addItem({
                    label: "resourcePack.editor.menuBar.parentMenu.weather.thunder"
                }, weatherThunderAction);
            }
        }
        teardown() {
            this.resetMenuStates();
        }
    }
    var server_editor_bindings_x = y => {
        var x = {};
        __webpack_require__.d(x, y);
        return x;
    };
    var server_editor_bindings_y = x => () => x;
    const server_editor_bindings_namespaceObject = server_editor_bindings_x({
        ["editorInternal"]: () => __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_bindings_e2bf1028__.editorInternal
    });
    function JSONPropertyPane_stringFromException(e) {
        if (typeof e === "string") {
            return e;
        } else if (typeof e === "object" && e !== null && "message" in e) {
            return e.message;
        }
        return "Unknown exception";
    }
    var PropertyBagItemType;
    (function(PropertyBagItemType) {
        PropertyBagItemType[PropertyBagItemType["Number"] = 0] = "Number";
        PropertyBagItemType[PropertyBagItemType["String"] = 1] = "String";
        PropertyBagItemType[PropertyBagItemType["Slider"] = 2] = "Slider";
        PropertyBagItemType[PropertyBagItemType["ColorRGB"] = 3] = "ColorRGB";
        PropertyBagItemType[PropertyBagItemType["ColorRGBA"] = 4] = "ColorRGBA";
        PropertyBagItemType[PropertyBagItemType["Vector3"] = 5] = "Vector3";
        PropertyBagItemType[PropertyBagItemType["Dropdown"] = 6] = "Dropdown";
    })(PropertyBagItemType || (PropertyBagItemType = {}));
    class DataItemGroup {
        constructor(_displayName, _path, _parentGroup, _type) {
            this._displayName = _displayName;
            this._path = _path;
            this._dataItems = [];
            this._parentGroup = _parentGroup;
            this._logicalGroupOnly = false;
            this._type = _type;
        }
        get displayName() {
            return this._displayName;
        }
        get path() {
            return this._path;
        }
        get containerBounds() {
            return this._containerBounds;
        }
        set containerBounds(value) {
            this._containerBounds = value;
        }
        get propertyPane() {
            return this._uiPropertyPane;
        }
        get logicalGroupOnly() {
            return this._logicalGroupOnly;
        }
        set logicalGroupOnly(value) {
            this._logicalGroupOnly = value;
        }
        get type() {
            return this._type;
        }
        createPropertyPane(_rootPane, _propertyBag, _actualData, _schemaInterface, _dataItemChangedCallback) {
            if (this._parentGroup) {
                if (this._parentGroup.propertyPane) {
                    _rootPane = this._parentGroup.propertyPane;
                }
            }
            if (!_rootPane) {
                throw new Error(`Missing parent property pane`);
            }
            const displayName = this._displayName;
            if (this._logicalGroupOnly) {
                this._uiPropertyPane = _rootPane;
            } else {
                this._uiPropertyPane = _rootPane.createPropertyPane({
                    title: displayName
                });
            }
            if (!this._uiPropertyPane) {
                throw new Error("Failed to create property pane");
            }
            this._dataItems.sort(((a, b) => a._displayName.localeCompare(b._displayName)));
            for (const item of this._dataItems) {
                if (item._propertyBagType === PropertyBagItemType.Number || item._propertyBagType === PropertyBagItemType.Slider) {
                    const showSlider = item._propertyBagType === PropertyBagItemType.Slider;
                    _schemaInterface.debug(`Adding number property: ${item._propertyBagName} as ${showSlider ? "slider" : "number"}`);
                    const controlProps = {};
                    if (item._min !== undefined && item._max !== undefined) {
                        controlProps.min = item._min;
                        controlProps.max = item._max;
                        controlProps.showSlider = showSlider;
                        controlProps.isFloat = true;
                    }
                    if (item._readonly) {
                        controlProps.enable = false;
                    }
                    item._insertDataIntoOriginalObject = (_obj, _property, _oldValue, _newValue) => {
                        const propertyBagType = item._propertyBagType;
                        const originalType = item._originalType;
                        const ok = this._insertDataIntoOriginalObject(_property, _newValue, _actualData, propertyBagType, originalType);
                        if (ok && _dataItemChangedCallback) {
                            _dataItemChangedCallback();
                        }
                    };
                    controlProps.title = item._displayName;
                    controlProps.onChange = item._insertDataIntoOriginalObject;
                    this._uiPropertyPane.addNumber(_propertyBag, item._propertyBagName, controlProps);
                } else if (item._propertyBagType === PropertyBagItemType.String) {
                    _schemaInterface.debug(`Adding string property: ${item._propertyBagName}`);
                    item._insertDataIntoOriginalObject = (_obj, _property, _oldValue, _newValue) => {
                        const propertyBagType = item._propertyBagType;
                        const originalType = item._originalType;
                        const ok = this._insertDataIntoOriginalObject(_property, _newValue, _actualData, propertyBagType, originalType);
                        if (ok && _dataItemChangedCallback) {
                            _dataItemChangedCallback();
                        }
                    };
                    const stringProps = {
                        title: item._displayName,
                        onChange: item._insertDataIntoOriginalObject
                    };
                    if (item._readonly) {
                        stringProps.enable = false;
                    }
                    this._uiPropertyPane.addString(_propertyBag, item._propertyBagName, stringProps);
                } else if (item._propertyBagType === PropertyBagItemType.ColorRGB || item._propertyBagType === PropertyBagItemType.ColorRGBA) {
                    _schemaInterface.debug(`Adding color property: ${item._propertyBagName}`);
                    item._insertDataIntoOriginalObject = (_obj, _property, _oldValue, _newValue) => {
                        const propertyBagType = item._propertyBagType;
                        const originalType = item._originalType;
                        const ok = this._insertDataIntoOriginalObject(_property, _newValue, _actualData, propertyBagType, originalType);
                        if (ok && _dataItemChangedCallback) {
                            _dataItemChangedCallback();
                        }
                    };
                    const colorProps = {
                        title: item._displayName,
                        showAlpha: item._propertyBagType === PropertyBagItemType.ColorRGBA,
                        variant: server_editor_namespaceObject.ColorPickerVariant.Inline,
                        onChange: item._insertDataIntoOriginalObject
                    };
                    if (item._readonly) {
                        colorProps.enable = false;
                    }
                    this._uiPropertyPane.addColorPicker(_propertyBag, item._propertyBagName, colorProps);
                } else if (item._propertyBagType === PropertyBagItemType.Vector3) {
                    _schemaInterface.debug(`Adding vector property: ${item._propertyBagName}`);
                    item._insertDataIntoOriginalObject = (_obj, _property, _oldValue, _newValue) => {
                        const propertyBagType = item._propertyBagType;
                        const originalType = item._originalType;
                        const ok = this._insertDataIntoOriginalObject(_property, _newValue, _actualData, propertyBagType, originalType);
                        if (ok && _dataItemChangedCallback) {
                            _dataItemChangedCallback();
                        }
                    };
                    const vectorProps = {
                        title: item._displayName,
                        onChange: item._insertDataIntoOriginalObject
                    };
                    if (item._min !== undefined) {
                        vectorProps.minX = item._min;
                        vectorProps.minY = item._min;
                        vectorProps.minZ = item._min;
                    }
                    if (item._max !== undefined) {
                        vectorProps.maxX = item._max;
                        vectorProps.maxY = item._max;
                        vectorProps.maxZ = item._max;
                    }
                    if (item._readonly) {
                        vectorProps.enable = false;
                    }
                    this._uiPropertyPane.addVector3_deprecated(_propertyBag, item._propertyBagName, vectorProps);
                } else if (item._propertyBagType === PropertyBagItemType.Dropdown) {
                    _schemaInterface.debug(`Adding dropdown property: ${item._propertyBagName}`);
                    if (item._enums === undefined || item._prettyEnums === undefined) {
                        throw new Error("Dropdown property must have enums defined");
                    }
                    const comboDropdownItems = item._prettyEnums?.map(((v, i) => {
                        const dropItem = {
                            label: v,
                            value: i
                        };
                        return dropItem;
                    }));
                    item._insertDataIntoOriginalObject = (_obj, _property, _oldValue, _newValue) => {
                        const propertyBagType = item._propertyBagType;
                        const originalType = item._originalType;
                        const stringValue = item._enums !== undefined ? item._enums[Number(_newValue)] : "";
                        const ok = this._insertDataIntoOriginalObject(_property, stringValue, _actualData, propertyBagType, originalType);
                        if (ok && _dataItemChangedCallback) {
                            _dataItemChangedCallback();
                        }
                    };
                    const comboProps = {
                        title: item._displayName,
                        dropdownItems: comboDropdownItems,
                        onChange: item._insertDataIntoOriginalObject
                    };
                    if (item._readonly) {
                        comboProps.enable = false;
                    }
                    comboProps.dropdownItems = comboDropdownItems;
                    this._uiPropertyPane.addDropdown(_propertyBag, item._propertyBagName, comboProps);
                }
            }
        }
        _insertDataIntoOriginalObject(_property, _newValue, _actualData, _propertyBagType, _originalType) {
            const fnInsertDataIntoObjectByPath = (_path, _value) => {
                const pathParts = _path.split("/").filter(Boolean);
                let data = _actualData;
                for (let i = 0; i < pathParts.length; i++) {
                    const part = pathParts[i];
                    if (data[part] === undefined) {
                        throw new Error(`Failed to find path element ${part}`);
                    }
                    if (i === pathParts.length - 1) {
                        data[part] = _value;
                        return true;
                    }
                    data = data[part];
                }
                throw new Error(`Failed to find path element ${_path}`);
            };
            switch (_propertyBagType) {
              case PropertyBagItemType.Number:
              case PropertyBagItemType.Slider:
                {
                    if (typeof _newValue !== "number") {
                        throw new Error(`Invalid number value for property ${_property}`);
                    }
                    switch (_originalType) {
                      case OpNodeSourceType.INTEGER:
                        fnInsertDataIntoObjectByPath(_property, Math.round(_newValue));
                        break;

                      case OpNodeSourceType.NUMBER:
                        fnInsertDataIntoObjectByPath(_property, _newValue);
                        break;

                      default:
                        throw new Error(`Invalid original type for property ${_property}`);
                    }
                }
                break;

              case PropertyBagItemType.String:
                {
                    if (typeof _newValue !== "string") {
                        throw new Error(`Invalid string value for property ${_property}`);
                    }
                    if (_originalType !== OpNodeSourceType.STRING) {
                        throw new Error(`Invalid original type for property ${_property}`);
                    }
                    fnInsertDataIntoObjectByPath(_property, _newValue);
                }
                break;

              case PropertyBagItemType.ColorRGB:
              case PropertyBagItemType.ColorRGBA:
                {
                    if (typeof _newValue !== "object") {
                        throw new Error(`Invalid color value for property ${_property}`);
                    }
                    if (_originalType === OpNodeSourceType.ARRAY || _originalType === OpNodeSourceType.MAP) {
                        if ("red" in _newValue && "green" in _newValue && "blue" in _newValue) {
                            if (_originalType === OpNodeSourceType.ARRAY) {
                                const colorComponents = [];
                                colorComponents.push(Number(_newValue.red));
                                colorComponents.push(Number(_newValue.green));
                                colorComponents.push(Number(_newValue.blue));
                                if (_propertyBagType === PropertyBagItemType.ColorRGBA && "alpha" in _newValue) {
                                    colorComponents.push(Number(_newValue.alpha));
                                }
                                for (let i = 0; i < colorComponents.length; i++) {
                                    const keyName = `${_property}/${i}`;
                                    fnInsertDataIntoObjectByPath(keyName, colorComponents[i] * 255);
                                }
                            } else if (_originalType === OpNodeSourceType.MAP) {
                                throw new Error(`Associative container of named RGB values not yet implemented`);
                            }
                        } else {
                            throw new Error(`Invalid color value for property ${_property}`);
                        }
                    } else if (_originalType === OpNodeSourceType.STRING) {
                        if ("red" in _newValue && "green" in _newValue && "blue" in _newValue) {
                            const toHex = n => {
                                const hex = Math.max(0, Math.min(255, Math.round(n * 255))).toString(16);
                                return hex.length === 1 ? "0" + hex : hex;
                            };
                            const hexString = `#${toHex(Number(_newValue.red))}${toHex(Number(_newValue.green))}${toHex(Number(_newValue.blue))}`;
                            fnInsertDataIntoObjectByPath(_property, hexString);
                        } else {
                            throw new Error(`Invalid color value for property ${_property}`);
                        }
                    } else {
                        throw new Error(`Invalid original type for property ${_property}`);
                    }
                }
                break;

              case PropertyBagItemType.Vector3:
                {
                    if (typeof _newValue !== "object" && !Array.isArray(_newValue)) {
                        throw new Error(`Invalid color value for property ${_property}`);
                    }
                    if (_originalType !== OpNodeSourceType.ARRAY && _originalType !== OpNodeSourceType.MAP) {
                        throw new Error(`Invalid original type for property ${_property}`);
                    }
                    if ("x" in _newValue && "y" in _newValue && "z" in _newValue) {
                        if (_originalType === OpNodeSourceType.ARRAY) {
                            const vectorComponents = [];
                            vectorComponents.push(Number(_newValue.x));
                            vectorComponents.push(Number(_newValue.y));
                            vectorComponents.push(Number(_newValue.z));
                            for (let i = 0; i < vectorComponents.length; i++) {
                                const keyName = `${_property}/${i}`;
                                fnInsertDataIntoObjectByPath(keyName, vectorComponents[i]);
                            }
                        } else if (_originalType === OpNodeSourceType.MAP) {
                            throw new Error(`Associative container of named XYZ values not yet implemented`);
                        }
                    } else {
                        throw new Error(`Invalid color value for property ${_property}`);
                    }
                }
                break;

              case PropertyBagItemType.Dropdown:
                {
                    if (typeof _newValue !== "string") {
                        throw new Error(`Invalid dropdown value for property ${_property}`);
                    }
                    if (_originalType !== OpNodeSourceType.STRING) {
                        throw new Error(`Invalid original type for property ${_property}`);
                    }
                    fnInsertDataIntoObjectByPath(_property, _newValue);
                }
                break;

              default:
                throw new Error(`Invalid property bag type for property ${_property}`);
            }
            return true;
        }
        addNumber(_displayName, _propertyBagName, _originalType, _min, _max, _readonly) {
            this._dataItems.push({
                _displayName,
                _propertyBagName,
                _propertyBagType: PropertyBagItemType.Number,
                _min,
                _max,
                _originalType,
                _uiCollectionComponent: false,
                _readonly: _readonly ?? false
            });
        }
        addString(_displayName, _propertyBagName, _validationRegex, _readonly) {
            this._dataItems.push({
                _displayName,
                _propertyBagName,
                _propertyBagType: PropertyBagItemType.String,
                _validationRegex,
                _originalType: OpNodeSourceType.STRING,
                _uiCollectionComponent: false,
                _readonly: _readonly ?? false
            });
        }
        addSlider(_displayName, _propertyBagName, _originalType, _min, _max) {
            this._dataItems.push({
                _displayName,
                _propertyBagName,
                _propertyBagType: PropertyBagItemType.Slider,
                _min,
                _max,
                _originalType,
                _uiCollectionComponent: false,
                _readonly: false
            });
        }
        addColor(_displayName, _propertyBagName, size, _originalType, _uiCollectionComponent) {
            this._dataItems.push({
                _displayName,
                _propertyBagName,
                _propertyBagType: size === 4 ? PropertyBagItemType.ColorRGBA : PropertyBagItemType.ColorRGB,
                _originalType,
                _uiCollectionComponent,
                _readonly: false
            });
        }
        addVector3(_displayName, _propertyBagName, _originalType, _min, _max, _readonly) {
            this._dataItems.push({
                _displayName,
                _propertyBagName,
                _propertyBagType: PropertyBagItemType.Vector3,
                _originalType,
                _min,
                _max,
                _uiCollectionComponent: true,
                _readonly: _readonly ?? false
            });
        }
        addDropdown(_displayName, _propertyBagName, _originalType, _enums, _prettyEnums, _readonly) {
            this._dataItems.push({
                _displayName,
                _propertyBagName,
                _propertyBagType: PropertyBagItemType.Dropdown,
                _originalType,
                _uiCollectionComponent: false,
                _readonly: _readonly ?? false,
                _enums,
                _prettyEnums
            });
        }
        restoreData(_propertyBag) {
            for (const item of this._dataItems) {
                const path = item._propertyBagName;
                const oldValue = _propertyBag[path];
                const newValue = _propertyBag[path];
                if (item._insertDataIntoOriginalObject) {
                    item._insertDataIntoOriginalObject(_propertyBag, path, oldValue, newValue);
                }
            }
        }
    }
    class UIComponentMap {
        constructor(session, data) {
            this._editableProperties = {};
            this._backupProperties = {};
            this._groups = [];
            this._session = session;
            this._dirty = false;
            this._currentData = JSON.parse(JSON.stringify(data));
        }
        get dirty() {
            return this._dirty;
        }
        set dirty(value) {
            this._dirty = value;
        }
        get currentData() {
            return this._currentData;
        }
        _findGroupFromPath(path) {
            const lastSlash = path.lastIndexOf("/");
            if (lastSlash <= 0) {
                return undefined;
            }
            const parentPath = path.slice(0, lastSlash);
            for (const group of this._groups) {
                if (group.path === parentPath) {
                    return group;
                }
            }
            throw new Error(`Failed to find a parent group for a non-root data item (${path})`);
            return undefined;
        }
        addDataItem(_path, _key, _type, _data, _properties) {
            const parentGroup = this._findGroupFromPath(_path);
            const fnConvertNodeTypeToDefaultEditor = _type => {
                switch (_type) {
                  case OpNodeSourceType.STRING:
                    return OpNodeEditorUIControlType.TEXT;

                  case OpNodeSourceType.NUMBER:
                  case OpNodeSourceType.INTEGER:
                    return OpNodeEditorUIControlType.FLOAT;

                  case OpNodeSourceType.BOOLEAN:
                    return OpNodeEditorUIControlType.CHECKBOX;

                  default:
                    return OpNodeEditorUIControlType.UNKNOWN;
                }
            };
            let editorControl = fnConvertNodeTypeToDefaultEditor(_type);
            const editorProperty = _properties.getProperty("OpPropertyEditorUIControl");
            if (editorProperty) {
                editorControl = editorProperty.controlType;
            }
            const labelAliases = _properties.getProperty("OpPropertyLabelAliases");
            const prettify = _properties.getProperty("OpPropertyPrettifier");
            const aliasAndPrettify = _key => {
                const alias = labelAliases?.getLabelAlias(_key) ?? _key;
                const displayName = prettify?.prettify(alias) ?? alias;
                return displayName;
            };
            const displayName = aliasAndPrettify(_key);
            if (_type === OpNodeSourceType.NULL) {
                throw new Error("I don't know what to do with nulls");
            } else if (_type === OpNodeSourceType.OBJECT || _type === OpNodeSourceType.ARRAY || _type === OpNodeSourceType.MAP) {
                this._groups.push(new DataItemGroup(displayName, _path, parentGroup, _type));
                const containerBounds = {
                    min: 0,
                    max: 0
                };
                const arrayBoundsProperty = _properties.getProperty("OpPropertyArrayBounds");
                if (arrayBoundsProperty) {
                    if (arrayBoundsProperty.minItems !== undefined) {
                        containerBounds.min = arrayBoundsProperty.minItems;
                    }
                    if (arrayBoundsProperty.maxItems !== undefined) {
                        containerBounds.max = arrayBoundsProperty.maxItems;
                    }
                } else {
                    const mapBoundsProperty = _properties.getProperty("OpPropertyMapBounds");
                    if (mapBoundsProperty) {
                        if (mapBoundsProperty.minProperties !== undefined) {
                            containerBounds.min = mapBoundsProperty.minProperties;
                        }
                        if (mapBoundsProperty.maxProperties !== undefined) {
                            containerBounds.max = mapBoundsProperty.maxProperties;
                        }
                    }
                }
                if (editorControl === OpNodeEditorUIControlType.COLOR || editorControl === OpNodeEditorUIControlType.VECTOR3) {
                    if (containerBounds.min !== containerBounds.max || containerBounds.min !== 3 && containerBounds.min !== 4) {
                        throw new Error(`Container bounds not specified - Path(${_path}), Key(${_key}) -- minItems and maxItems MUST be specified in the schema`);
                    }
                }
                if (editorControl === OpNodeEditorUIControlType.COLOR) {
                    this._groups[this._groups.length - 1].containerBounds = containerBounds;
                    this._groups[this._groups.length - 1].logicalGroupOnly = true;
                    const color = {
                        Red: 0,
                        Green: 0,
                        Blue: 0,
                        Alpha: 0
                    };
                    this._editableProperties[_path] = color;
                } else if (editorControl === OpNodeEditorUIControlType.VECTOR3) {
                    this._groups[this._groups.length - 1].containerBounds = containerBounds;
                    this._groups[this._groups.length - 1].logicalGroupOnly = true;
                    const vec3 = {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                    this._editableProperties[_path] = vec3;
                }
            } else {
                if (!parentGroup) {
                    throw new Error(`Items must have a parent group - Path(${_path}), Key(${_key})`);
                }
                if (_type !== OpNodeSourceType.STRING && _type !== OpNodeSourceType.NUMBER && _type !== OpNodeSourceType.INTEGER) {
                    return;
                }
                this._editableProperties[_path] = _data;
                const regexValidator = _properties.getProperty("OpPropertyPattern")?.pattern;
                const valueMin = _properties.getProperty("OpPropertyValueRange")?.min;
                const valueMax = _properties.getProperty("OpPropertyValueRange")?.max;
                const readonly = _properties.hasProperty("OpPropertyReadOnly");
                switch (editorControl) {
                  case OpNodeEditorUIControlType.FLOAT:
                    parentGroup.addNumber(displayName, _path, _type, valueMin, valueMax, readonly);
                    break;

                  case OpNodeEditorUIControlType.SLIDER:
                    parentGroup.addSlider(displayName, _path, _type, valueMin, valueMax);
                    break;

                  case OpNodeEditorUIControlType.TEXT:
                    parentGroup.addString(displayName, _path, regexValidator, readonly);
                    break;

                  case OpNodeEditorUIControlType.CHECKBOX:
                    throw new Error("Checkbox control not yet implemented");

                  case OpNodeEditorUIControlType.COLOR:
                    {
                        const parentPath = parentGroup.path;
                        if (_type === OpNodeSourceType.NUMBER || _type === OpNodeSourceType.INTEGER) {
                            if (parentGroup.type !== OpNodeSourceType.ARRAY) {
                                throw new Error(`Associative container of named RGB values not yet implemented`);
                            }
                            const colorSize = parentGroup.containerBounds?.max;
                            if (!colorSize) {
                                throw new Error(`Array bounds not specified - Path(${_path}), Key(${_key})`);
                            }
                            const index = Number(_key);
                            if (index >= colorSize || index < 0) {
                                throw new Error(`Array bounds exceeded - Path(${_path}), Key(${_key})`);
                            } else if (index === colorSize - 1) {
                                const componentData = [];
                                for (let i = 0; i < colorSize; i++) {
                                    const colorComponentPath = `${parentPath}/${i}`;
                                    const colorComponent = this._editableProperties[colorComponentPath];
                                    if (typeof colorComponent !== "number") {
                                        throw new Error(`Invalid color component value at path ${colorComponentPath}`);
                                    }
                                    componentData.push(colorComponent / 255);
                                }
                                if (colorSize === 3) {
                                    componentData.push(1);
                                }
                                const color = {
                                    red: componentData[0],
                                    green: componentData[1],
                                    blue: componentData[2],
                                    alpha: componentData[3]
                                };
                                this._editableProperties[parentPath] = color;
                                const groupDisplayName = aliasAndPrettify(parentGroup.displayName);
                                const _grandparentGroup = this._findGroupFromPath(parentPath) ?? parentGroup;
                                _grandparentGroup.addColor(groupDisplayName, parentPath, colorSize, parentGroup.type, true);
                            }
                        } else if (_type === OpNodeSourceType.STRING) {
                            const colorString = String(_data);
                            if (!/^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(colorString)) {
                                throw new Error("Invalid color string format");
                            }
                            const componentData = [];
                            let colorSize = 0;
                            for (let i = 1; i < colorString.length; i += 2) {
                                const component = parseInt(colorString.substring(i, i + 2), 16);
                                componentData.push(component / 255);
                                ++colorSize;
                            }
                            if (colorSize === 3) {
                                componentData.push(1);
                            }
                            const color = {
                                red: componentData[0],
                                green: componentData[1],
                                blue: componentData[2],
                                alpha: componentData[3]
                            };
                            this._editableProperties[parentPath] = color;
                            const groupDisplayName = aliasAndPrettify(parentGroup.displayName);
                            const grandparentGroup = this._findGroupFromPath(parentPath) ?? parentGroup;
                            grandparentGroup.addColor(groupDisplayName, parentPath, colorSize, parentGroup.type, true);
                        }
                    }
                    break;

                  case OpNodeEditorUIControlType.VECTOR3:
                    {
                        const parentPath = parentGroup.path;
                        if (_type === OpNodeSourceType.NUMBER || _type === OpNodeSourceType.INTEGER) {
                            if (parentGroup.type !== OpNodeSourceType.ARRAY) {
                                throw new Error(`Associative container of named XYZ values not yet implemented`);
                            }
                            const index = Number(_key);
                            if (index >= 3 || index < 0) {
                                throw new Error(`Array bounds exceeded - Path(${_path}), Key(${_key})`);
                            } else if (index === 2) {
                                const componentData = [];
                                for (let i = 0; i < 3; i++) {
                                    const componentPath = `${parentPath}/${i}`;
                                    const componentValue = this._editableProperties[componentPath];
                                    if (typeof componentValue !== "number") {
                                        throw new Error(`Invalid vector3 component value at path ${componentPath}`);
                                    }
                                    componentData.push(componentValue);
                                }
                                const vec3 = {
                                    x: componentData[0],
                                    y: componentData[1],
                                    z: componentData[2]
                                };
                                this._editableProperties[parentPath] = vec3;
                                const groupDisplayName = aliasAndPrettify(parentGroup.displayName);
                                const _grandparentGroup = this._findGroupFromPath(parentPath) ?? parentGroup;
                                _grandparentGroup.addVector3(groupDisplayName, parentPath, parentGroup.type, valueMin, valueMax, readonly);
                            }
                        }
                    }
                    break;

                  case OpNodeEditorUIControlType.DROPDOWN:
                    {
                        const enumProperty = _properties.getProperty("OpPropertyEnum");
                        if (enumProperty === undefined) {
                            throw new Error("Control type is dropdown, but no enum values specified in schema");
                        }
                        enumProperty.prettifyEnums(aliasAndPrettify);
                        const comboItems = enumProperty.enums ?? [];
                        const prettyComboItems = enumProperty.prettyEnums ?? [];
                        const index = enumProperty.getIndexOf(String(_data));
                        if (index === -1) {
                            throw new Error("Invalid enum value in data");
                        }
                        this._editableProperties[_path] = index;
                        parentGroup.addDropdown(displayName, _path, _type, comboItems, prettyComboItems, readonly);
                    }
                    break;

                  default:
                    throw new Error(`Unknown control type encountered - ${JSON.stringify(editorControl)}`);
                }
            }
        }
        constructUIComponents(_rootPane, _schemaInterface) {
            if (this._currentData === undefined) {
                throw new Error("No data object to build UI components from");
            }
            if (_rootPane === undefined) {
                throw new Error("No root pane to build UI components in");
            }
            this._editableProperties = (0, server_editor_namespaceObject.bindDataSource)(_rootPane, this._editableProperties);
            for (const group of this._groups) {
                group.createPropertyPane(_rootPane, this._editableProperties, this._currentData, _schemaInterface, (() => {
                    this._dirty = true;
                }));
            }
        }
        backupProperties() {
            this._backupProperties = JSON.parse(JSON.stringify(this._editableProperties));
        }
        restoreProperties() {
            for (const key in this._backupProperties) {
                const value = this._backupProperties[key];
                this._editableProperties[key] = value;
            }
            for (const group of this._groups) {
                group.restoreData(this._editableProperties);
            }
        }
    }
    class JSONPropertyPane {
        _logInfo(message) {
            this._session.log.info(message);
        }
        _logError(message) {
            this._session.log.error(message);
        }
        _logDebug(message) {
            this._session.log.debug(message);
        }
        constructor(session) {
            this._errorCollection = [];
            this._session = session;
            this._tickHandle = -1;
            this._asyncOperationWorking = false;
            this._schemaInterface = new logInterface;
            this._schemaInterface._debug = _msg => {};
            this._schemaInterface._error = _msg => {
                this._logError(_msg);
                this._errorCollection.push(_msg);
            };
            this._schemaInterface._onStep = (_path, _key, _type, _data, _properties) => {
                this._schemaInterface.debug(`Step: Path(${_path}) - Key(${_key}) - Type(${_type}) - Data(${JSON.stringify(_data)}), Properties(${_properties.toString()})`);
                this._uiComponentMap?.addDataItem(_path, _key, _type, _data, _properties);
            };
            const transferManager = server_editor_bindings_namespaceObject.editorInternal.getDataTransferManager(this._session.extensionContext.player);
            const accessorList = transferManager.getRegisteredAccessors();
            this._rootPane = this._session.createPropertyPane({
                title: "Settings Editor"
            });
            this._rootPropertyBag = (0, server_editor_namespaceObject.bindDataSource)(this._rootPane, {
                _selectedAccessorIndex: -1
            });
            this._rootPane.onPropertyPaneVisibilityUpdated.subscribe((eventData => {
                if (eventData.isVisible && this._currentAccessor !== undefined) {
                    const accessorName = this._currentAccessor;
                    this._startDirtyWatcher(transferManager, accessorName);
                } else {
                    this._stopDirtyWatcher();
                }
            }));
            const accessorDropdownItems = accessorList.map(((v, i) => {
                const item = {
                    label: v.nameStringId,
                    value: i
                };
                return item;
            }));
            this._rootPane.addDropdown(this._rootPropertyBag, "_selectedAccessorIndex", {
                title: "Settings Selector",
                dropdownItems: accessorDropdownItems,
                onChange: (_obj, _property, _oldValue, _newValue) => {
                    const oldIndex = Number(_oldValue);
                    const newIndex = Number(_newValue);
                    if (oldIndex === newIndex) {
                        return;
                    }
                    if (this._asyncOperationWorking) {
                        this._logInfo("Async operation already in progress - ignoring request for now");
                        this._rootPropertyBag._selectedAccessorIndex = oldIndex;
                        return;
                    }
                    if (this._rootPropertyBag._selectedAccessorIndex < 0 || this._rootPropertyBag._selectedAccessorIndex >= accessorList.length) {
                        this._logError("Invalid accessor index selected - this shouldn't be possible");
                        return;
                    }
                    const accessor = accessorList[this._rootPropertyBag._selectedAccessorIndex];
                    this._currentAccessor = accessor.uniqueId;
                    this._changeSettingPage(transferManager, accessor.uniqueId);
                }
            });
            this._session.menuBar.getMenu(server_editor_namespaceObject.CoreMenuType.View).then((menu => {
                this._menu = menu.addItem({
                    label: "resourcePack.editor.deferredLightingSettings.menu.title",
                    uniqueId: "DeferredLightingSettingsMenuItem"
                }, this._session.actionManager.createAction({
                    actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                    onExecute: () => {
                        this._rootPane.show();
                    }
                }));
            })).catch((() => {
                this._logError("Failed to add root menu item for this tool");
            }));
        }
        _buildErrorUI(msg) {
            if (this._settingsPane) {
                this._settingsPane.hide();
                this._rootPane.removePropertyPane(this._settingsPane);
                this._settingsPane = undefined;
            }
            this._settingsPane = this._rootPane.createPropertyPane({
                title: "Error(s) occurred"
            });
            const errorMessages = msg.split("\n");
            for (const msg of errorMessages) {
                this._settingsPane.addText(msg, {
                    border: false
                });
            }
            this._asyncOperationWorking = false;
            this._settingsPane?.show();
            this._rootPane?.show();
        }
        _changeSettingPage(_transferManager, _accessorName) {
            if (this._asyncOperationWorking) {
                this._logError("Async operation already in progress - ignoring request");
                return;
            }
            this._errorCollection = [];
            if (this._settingsPane) {
                this._settingsPane.hide();
                this._rootPane.removePropertyPane(this._settingsPane);
                this._settingsPane = undefined;
            }
            this._asyncOperationWorking = true;
            _transferManager.requestData(_accessorName).then((data => {
                this._schemaInterface.debug("Received data from transfer manager");
                this._asyncOperationWorking = false;
                let dataObject;
                let schemaObject;
                this._errorCollection = [];
                this._uiComponentMap = undefined;
                try {
                    dataObject = JSON.parse(data.data);
                    this._schemaInterface.debug("Parsed incoming JSON object - OK");
                    schemaObject = JSON.parse(data.schema);
                    this._schemaInterface.debug("Parsed incoming JSON schema - OK");
                } catch (e) {
                    this._schemaInterface.error(`Failed to parse incoming JSON object - ${JSONPropertyPane_stringFromException(e)}`);
                    this._buildErrorUI(this._errorCollection.join("\n"));
                    return;
                }
                this._uiComponentMap = new UIComponentMap(this._session, dataObject);
                try {
                    const schemaBuilder = new SchemaBuilder(this._schemaInterface);
                    const builtSchema = schemaBuilder.build(schemaObject);
                    const validatedFlag = schemaBuilder.validate(dataObject);
                    if (!validatedFlag) {
                        throw new Error("Failed to validate incoming JSON object");
                    }
                    this._uiComponentMap.backupProperties();
                } catch (e) {
                    this._schemaInterface.error(`Failed to validate schema - ${JSONPropertyPane_stringFromException(e)}`);
                    this._buildErrorUI(this._errorCollection.join("\n"));
                    this._uiComponentMap = undefined;
                    return;
                }
                try {
                    this._settingsPane = this._rootPane.createPropertyPane({
                        title: "Settings"
                    });
                    this._settingsPane.addButton((() => {
                        if (this._uiComponentMap !== undefined) {
                            this._schemaInterface.debug("Resetting to defaults");
                            this._uiComponentMap.restoreProperties();
                            this._uiComponentMap.dirty = true;
                        }
                    }), {
                        title: "Revert changes"
                    });
                    this._settingsPane.addDivider();
                    this._uiComponentMap?.constructUIComponents(this._settingsPane, this._schemaInterface);
                    this._settingsPane.addDivider();
                    this._settingsPane.addButton((() => {
                        if (this._uiComponentMap !== undefined) {
                            this._logInfo("Exporting current settings to clipboard");
                            const data = JSON.stringify(this._uiComponentMap.currentData);
                            _transferManager.sendDataToClipboard(data);
                        }
                    }), {
                        title: "Export to clipboard"
                    });
                    this._settingsPane.addDivider();
                    server_namespaceObject.system.runTimeout((() => {
                        this._logInfo("Showing settings pane");
                        this._settingsPane?.show();
                        this._rootPane?.show();
                    }), 1);
                } catch (e) {
                    this._schemaInterface.error(`Failed to build UI components - ${JSONPropertyPane_stringFromException(e)}`);
                    this._buildErrorUI(this._errorCollection.join("\n"));
                    return;
                }
                this._startDirtyWatcher(_transferManager, _accessorName);
            })).catch((e => {
                this._schemaInterface.error(`Failed to transfer data from client - ${JSONPropertyPane_stringFromException(e)}`);
                this._buildErrorUI(this._errorCollection.join("\n"));
            }));
        }
        _stopDirtyWatcher() {
            if (this._tickHandle !== -1) {
                server_namespaceObject.system.clearRun(this._tickHandle);
                this._tickHandle = -1;
            }
        }
        _startDirtyWatcher(_transferManager, _accessorName) {
            if (this._tickHandle !== -1) {
                this._stopDirtyWatcher();
            }
            if (this._tickHandle === -1) {
                this._tickHandle = server_namespaceObject.system.runInterval((() => {
                    if (this._uiComponentMap?.dirty) {
                        this._uiComponentMap.dirty = false;
                        this._schemaInterface.debug("Data is dirty - pushing to client");
                        const data = JSON.stringify(this._uiComponentMap.currentData);
                        _transferManager.sendData(_accessorName, data);
                    }
                }), 1);
            }
        }
        teardown() {
            this._stopDirtyWatcher();
        }
    }
    function createCoreUI(uiSession) {
        if (!uiSession.scratchStorage) {
            throw new Error("Core UI initialization order incorrect");
        }
        const player = uiSession.extensionContext.player;
        const exportAsWorldAction = uiSession.actionManager.createAction({
            actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
            onExecute: () => {
                player.runCommandAsync("project export world").catch((_ => uiSession.log.error("Unable to export project as world due to unknown error.")));
            }
        });
        const showUISettingsAction = uiSession.actionManager.createAction({
            actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
            onExecute: () => {
                uiSession.builtInUIManager.updateUISettingsPanelVisibility(true);
            }
        });
        const pauseScreenAction = uiSession.actionManager.createAction({
            actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
            onExecute: () => {
                uiSession.builtInUIManager.navigateToPauseScreen();
            }
        });
        const showLoggingPaneAction = uiSession.actionManager.createAction({
            actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
            onExecute: () => {
                uiSession.builtInUIManager.updateLogPanelVisibility(true);
            }
        });
        const overworldAction = uiSession.actionManager.createAction({
            actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
            onExecute: () => {
                const rotation = player.getRotation();
                player.teleport(player.location, {
                    dimension: server_namespaceObject.world.getDimension("overworld"),
                    rotation,
                    keepVelocity: false
                });
            }
        });
        const netherAction = uiSession.actionManager.createAction({
            actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
            onExecute: () => {
                const rotation = player.getRotation();
                player.teleport(player.location, {
                    dimension: server_namespaceObject.world.getDimension("nether"),
                    rotation,
                    keepVelocity: false
                });
            }
        });
        const endAction = uiSession.actionManager.createAction({
            actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
            onExecute: () => {
                uiSession.extensionContext.transactionManager.openTransaction("Transaction dimension change");
                const rotation = player.getRotation();
                player.teleport(player.location, {
                    dimension: server_namespaceObject.world.getDimension("the_end"),
                    rotation,
                    keepVelocity: false
                });
                uiSession.extensionContext.transactionManager.commitOpenTransaction();
            }
        });
        const quickStartAction = uiSession.actionManager.createAction({
            actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
            onExecute: () => {
                uiSession.builtInUIManager.updateWelcomePanelVisibility(true);
            }
        });
        const documentationAction = uiSession.actionManager.createAction({
            actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
            onExecute: () => {
                uiSession.builtInUIManager.navigateToDocumentation();
            }
        });
        const feedbackAction = uiSession.actionManager.createAction({
            actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
            onExecute: () => {
                uiSession.builtInUIManager.navigateToFeedback();
            }
        });
        let cursorProjectMenuItem = undefined;
        const cursorProjectAction = uiSession.actionManager.createAction({
            actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
            onExecute: () => {
                if (cursorProjectMenuItem) {
                    const props = uiSession.extensionContext.cursor.getProperties();
                    props.projectThroughLiquid = !props.projectThroughLiquid;
                    cursorProjectMenuItem.checked = props.projectThroughLiquid;
                    uiSession.extensionContext.cursor.setProperties(props);
                }
            }
        });
        const initialCursorProjection = uiSession.extensionContext.cursor.getProperties().projectThroughLiquid;
        const cursorChangeHandle = uiSession.extensionContext.afterEvents.cursorPropertyChange.subscribe((event => {
            if (event.properties.projectThroughLiquid !== undefined && cursorProjectMenuItem) {
                cursorProjectMenuItem.checked = event.properties.projectThroughLiquid;
            }
        }));
        uiSession.scratchStorage.cleanupHandles.push((() => uiSession.extensionContext.afterEvents.cursorPropertyChange.unsubscribe(cursorChangeHandle)));
        uiSession.inputManager.registerKeyBinding(server_editor_namespaceObject.EditorInputContext.GlobalToolMode, pauseScreenAction, {
            key: server_editor_namespaceObject.KeyboardKey.KEY_Q,
            modifier: server_editor_namespaceObject.InputModifier.Control
        }, {
            uniqueId: "editor:toolModeKeyBinding:showGameMenu",
            label: "resourcePack.editor.core.keyBinding.showGameMenu"
        });
        uiSession.inputManager.registerKeyBinding(server_editor_namespaceObject.EditorInputContext.GlobalToolMode, showLoggingPaneAction, {
            key: server_editor_namespaceObject.KeyboardKey.KEY_H,
            modifier: server_editor_namespaceObject.InputModifier.Control
        }, {
            uniqueId: "editor:toolModeKeyBinding:showLogPanel",
            label: "resourcePack.editor.core.keyBinding.showLogPanel"
        });
        const file = uiSession.menuBar.createMenu({
            label: "resourcePack.editor.menuBar.file",
            uniqueId: server_editor_namespaceObject.CoreMenuType.File
        });
        const edit = uiSession.menuBar.createMenu({
            label: "resourcePack.editor.menuBar.edit",
            uniqueId: server_editor_namespaceObject.CoreMenuType.Edit
        });
        const extensions = uiSession.menuBar.createMenu({
            label: "resourcePack.editor.menuBar.extensions",
            uniqueId: server_editor_namespaceObject.CoreMenuType.Extensions
        });
        const view = uiSession.menuBar.createMenu({
            label: "resourcePack.editor.menuBar.view",
            uniqueId: server_editor_namespaceObject.CoreMenuType.View
        });
        const worldOptions = uiSession.menuBar.createMenu({
            label: "resourcePack.editor.menuBar.worldOptions",
            uniqueId: server_editor_namespaceObject.CoreMenuType.WorldOptions
        });
        const experimental = uiSession.menuBar.createMenu({
            label: "resourcePack.editor.menuBar.experimental",
            uniqueId: server_editor_namespaceObject.CoreMenuType.Experimental
        });
        const help = uiSession.menuBar.createMenu({
            label: "resourcePack.editor.menuBar.help",
            uniqueId: server_editor_namespaceObject.CoreMenuType.Help
        });
        const exportMenu = file.addItem({
            label: "resourcePack.editor.menuBar.file.export"
        });
        exportMenu.addItem({
            label: "resourcePack.editor.menuBar.file.export.world"
        }, exportAsWorldAction);
        file.addItem({
            label: "resourcePack.editor.menuBar.file.settings"
        }, showUISettingsAction);
        const cursorMenu = file.addItem({
            label: "resourcePack.editor.menuBar.file.cursor"
        });
        cursorProjectMenuItem = cursorMenu.addItem({
            label: "resourcePack.editor.menuBar.file.cursor.projectThroughLiquid",
            checked: initialCursorProjection
        }, cursorProjectAction);
        file.addItem({
            label: "resourcePack.editor.menuBar.file.pauseScreen"
        }, pauseScreenAction);
        view.addItem({
            label: "resourcePack.editor.menuBar.view.logging"
        }, showLoggingPaneAction);
        if (!uiSession.scratchStorage.pauseBehavior) {
            throw new Error("pauseBehavior undefined - Core UI initialization order incorrect");
        }
        uiSession.scratchStorage.pauseBehavior.createPauseMenu(worldOptions);
        const changeDimension = worldOptions.addItem({
            label: "resourcePack.editor.menuBar.worldOptions.changeDimension"
        });
        changeDimension.addItem({
            label: "resourcePack.editor.menuBar.worldOptions.changeDimension.overworld"
        }, overworldAction);
        changeDimension.addItem({
            label: "resourcePack.editor.menuBar.worldOptions.changeDimension.nether"
        }, netherAction);
        changeDimension.addItem({
            label: "resourcePack.editor.menuBar.worldOptions.changeDimension.end"
        }, endAction);
        help.addItem({
            label: "resourcePack.editor.menuBar.help.quickStart"
        }, quickStartAction);
        help.addItem({
            label: "resourcePack.editor.menuBar.help.documentation"
        }, documentationAction);
        help.addItem({
            label: "resourcePack.editor.menuBar.help.feedback"
        }, feedbackAction);
        file.show();
        edit.show();
        worldOptions.show();
        help.show();
        return {
            file,
            edit,
            extensions,
            view,
            worldOptions,
            experimental,
            help
        };
    }
    function disableWeatherCycle() {
        server_namespaceObject.world.getDimension("overworld").runCommand(`/gamerule doweathercycle false`);
        server_editor_namespaceObject.editor.log.info(`Use weather cycle is now disabled`, {
            tags: [ "Editor", "Weather" ]
        });
    }
    function registerCoreEditorExtension() {
        (0, server_editor_namespaceObject.registerEditorExtension)("CoreEditor", (uiSession => {
            uiSession.log.debug(`Initializing ${uiSession.extensionContext.extensionInfo.name} extension`);
            uiSession.scratchStorage = {
                cleanupHandles: []
            };
            uiSession.toolRail.show();
            uiSession.scratchStorage.pauseBehavior = new PauseBehavior(uiSession);
            uiSession.scratchStorage.coreMenuItems = createCoreUI(uiSession);
            const transactions = new UndoRedoBehavior(uiSession, uiSession.scratchStorage.coreMenuItems);
            const selectBehavior = new SelectionBehavior(uiSession);
            const crossModuleBrushBehavior = new CrossModuleBrushBehavior(uiSession);
            uiSession.scratchStorage.pastePreview = new PastePreviewBehavior(uiSession, selectBehavior.toolId);
            uiSession.scratchStorage.deleteBehavior = new DeleteBehavior(uiSession, uiSession.scratchStorage.coreMenuItems);
            uiSession.scratchStorage.playerCountBehavior = new PlayerCountBehavior(uiSession);
            const playtest = new PlaytestBehavior(uiSession);
            const navigationStack = new NavigationStackBehavior(uiSession);
            const line = new LineBehavior(uiSession);
            const summonTool = new SummonTool(uiSession);
            const timeOfDay = new TimeOfDayBehavior(uiSession, uiSession.scratchStorage.coreMenuItems.worldOptions);
            const jsonPropertyPane = new JSONPropertyPane(uiSession);
            disableWeatherCycle();
            const weather = new WeatherBehavior(uiSession, uiSession.scratchStorage.coreMenuItems.worldOptions);
            const blockPalette = new BlockPaletteBehavior(uiSession);
            uiSession.log.debug("CoreEditor Extension Initialized\n");
            return [ selectBehavior, uiSession.scratchStorage.deleteBehavior, uiSession.scratchStorage.playerCountBehavior, uiSession.scratchStorage.pauseBehavior, uiSession.scratchStorage.pastePreview, crossModuleBrushBehavior, transactions, playtest, navigationStack, line, summonTool, timeOfDay, weather, jsonPropertyPane, blockPalette ];
        }), (uiSession => {
            uiSession.log.debug(`Shutting down ${uiSession.extensionContext.extensionInfo.name} Extension\n`);
            if (uiSession.scratchStorage) {
                uiSession.scratchStorage.cleanupHandles.forEach((handle => handle()));
            }
        }), {
            description: "Minecraft Core Editor Built-in Extensions",
            notes: "https://github.com/Mojang/minecraft-editor"
        });
    }
    function flyCameraToTarget(uiSession, viewTarget, radius) {
        if (uiSession.scratchStorage) {
            const player = uiSession.extensionContext.player;
            const eyeHeight = lib.Vector3Utils.subtract(player.getHeadLocation(), player.location);
            const viewVector = player.getViewDirection();
            radius = Math.max(radius, 1);
            const halfFOV = uiSession.scratchStorage.playerFOV / 2;
            const distanceAway = radius / Math.tan(halfFOV * Math.PI / 180);
            const destCameraLocation = lib.Vector3Utils.subtract(viewTarget, lib.Vector3Utils.scale(viewVector, distanceAway));
            const destPlayerLocation = lib.Vector3Utils.subtract(destCameraLocation, eyeHeight);
            const easeTimeInSeconds = uiSession.scratchStorage.easeTimeInSeconds;
            player.camera.setCamera("minecraft:free", {
                location: {
                    x: destCameraLocation.x,
                    y: destCameraLocation.y,
                    z: destCameraLocation.z
                },
                rotation: {
                    x: player.getRotation().x,
                    y: player.getRotation().y
                },
                easeOptions: {
                    easeTime: easeTimeInSeconds,
                    easeType: server_namespaceObject.EasingType.InOutQuad
                }
            });
            uiSession.scratchStorage.latestRunId = server_namespaceObject.system.runTimeout((() => {
                player.teleport(destPlayerLocation);
                player.camera.clear();
                if (uiSession.scratchStorage) {
                    uiSession.scratchStorage.latestRunId = undefined;
                }
            }), easeTimeInSeconds * server_namespaceObject.TicksPerSecond);
        }
    }
    function registerGrappleExtension() {
        (0, server_editor_namespaceObject.registerEditorExtension)("Grapple", (uiSession => {
            uiSession.log.debug(`Initializing ${uiSession.extensionContext.extensionInfo.name} extension`);
            uiSession.scratchStorage = {
                latestRunId: undefined,
                easeTimeInSeconds: 1.5,
                playerFOV: 66
            };
            const grappleAction = uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    if (uiSession.scratchStorage?.latestRunId) {
                        return;
                    }
                    let destBlockLoc = undefined;
                    const cursor = uiSession.extensionContext.cursor;
                    if (cursor.isVisible && cursor.getProperties().controlMode !== server_editor_namespaceObject.CursorControlMode.Fixed) {
                        destBlockLoc = cursor.getPosition();
                    } else {
                        const result = uiSession.extensionContext.player.getBlockFromViewDirection();
                        if (!result) {
                            uiSession.log.warning("No Block Found.  Aborting Grapple");
                            return;
                        }
                        destBlockLoc = result?.block.location;
                    }
                    const viewTarget = lib.Vector3Utils.add(destBlockLoc, {
                        x: .5,
                        y: .5,
                        z: .5
                    });
                    flyCameraToTarget(uiSession, viewTarget, 2);
                }
            });
            const frameAction = uiSession.actionManager.createAction({
                actionType: server_editor_namespaceObject.ActionTypes.NoArgsAction,
                onExecute: () => {
                    if (uiSession.scratchStorage?.latestRunId) {
                        return;
                    }
                    const selection = uiSession.extensionContext.selectionManager.selection;
                    if (selection.isEmpty) {
                        return;
                    }
                    const bounds = selection.getBoundingBox();
                    bounds.max = lib.Vector3Utils.add(bounds.max, {
                        x: 1,
                        y: 1,
                        z: 1
                    });
                    const halfSize = lib.Vector3Utils.scale(lib.Vector3Utils.subtract(bounds.max, bounds.min), .5);
                    const viewTarget = lib.Vector3Utils.add(bounds.min, halfSize);
                    const radius = Math.sqrt(halfSize.x * halfSize.x + halfSize.y * halfSize.y + halfSize.z * halfSize.z);
                    flyCameraToTarget(uiSession, viewTarget, radius);
                }
            });
            uiSession.inputManager.registerKeyBinding(server_editor_namespaceObject.EditorInputContext.Viewport, grappleAction, {
                key: server_editor_namespaceObject.KeyboardKey.KEY_G
            }, {
                uniqueId: "editor:viewportKeyBinding:flyToCursor",
                label: "resourcePack.editor.grapple.keyBinding.flyToCursor"
            });
            uiSession.inputManager.registerKeyBinding(server_editor_namespaceObject.EditorInputContext.Viewport, frameAction, {
                key: server_editor_namespaceObject.KeyboardKey.KEY_F
            }, {
                uniqueId: "editor:viewportKeyBinding:flyToSelection",
                label: "resourcePack.editor.grapple.keyBinding.flyToSelection"
            });
            return [];
        }), (uiSession => {
            uiSession.log.debug(`Shutting down ${uiSession.extensionContext.extensionInfo.name} extension`);
            if (uiSession.scratchStorage?.latestRunId) {
                server_namespaceObject.system.clearRun(uiSession.scratchStorage.latestRunId);
                uiSession.scratchStorage.latestRunId = undefined;
            }
        }));
    }
    const DimensionIds = {
        "minecraft:overworld": 0,
        "minecraft:nether": -1,
        "minecraft:the_end": 1
    };
    const TicksRefreshRate = 5;
    const UnknownBlockType = `--`;
    function getDimensionName(dimensionId) {
        for (const key in DimensionIds) {
            const value = DimensionIds[key];
            if (value === dimensionId) {
                return key;
            }
        }
        return "minecraft:overworld";
    }
    function movePlayer(location, extensionContext, dimensionId = Number.MIN_SAFE_INTEGER) {
        const player = extensionContext.player;
        const targetDimension = dimensionId !== Number.MIN_SAFE_INTEGER ? server_namespaceObject.world.getDimension(getDimensionName(dimensionId)) : player.dimension;
        const rotation = player.getRotation();
        player.teleport(location, {
            dimension: targetDimension,
            rotation,
            keepVelocity: false
        });
    }
    function getDeltaPosFormat(_delta) {
        return `Δ (${_delta?.x ?? UnknownBlockType},${_delta?.y ?? UnknownBlockType},${_delta?.z ?? UnknownBlockType})`;
    }
    const updateStatusBarText = (statusBarItem, playerLocation, extensionContext) => {
        let cursorDeltaFromPlayerText = "";
        let blockTypeText = UnknownBlockType;
        const cursorLocation = extensionContext.cursor.getPosition();
        if (extensionContext.cursor.isVisible) {
            const dimension = extensionContext.player.dimension;
            cursorDeltaFromPlayerText = getDeltaPosFormat(lib.Vector3Utils.subtract(cursorLocation, playerLocation));
            try {
                blockTypeText = dimension.getBlock(cursorLocation)?.typeId ?? UnknownBlockType;
            } catch (error) {
                server_editor_namespaceObject.editor.log.error(stringFromException(error), {
                    player: extensionContext.player
                });
            }
        } else {
            cursorDeltaFromPlayerText = getDeltaPosFormat();
        }
        statusBarItem.text = `P (${Math.floor(playerLocation.x)},${Math.floor(playerLocation.y)},${Math.floor(playerLocation.z)}) | ${cursorDeltaFromPlayerText} | C (${Math.floor(cursorLocation.x)},${Math.floor(cursorLocation.y)},${Math.floor(cursorLocation.z)}) | ${blockTypeText}`;
    };
    function registerPlayerPositionExtension() {
        (0, server_editor_namespaceObject.registerEditorExtension)("PlayerPosition", (uiSession => {
            uiSession.log.debug(`Initializing ${uiSession.extensionContext.extensionInfo.name} extension`);
            uiSession.scratchStorage = {
                isDisposed: false,
                latestRunId: -1
            };
            const player = uiSession.extensionContext.player;
            let currentPlayerLocation = player.location;
            let currentCursorLocation = uiSession.extensionContext.cursor.getPosition();
            const pane = uiSession.createPropertyPane({
                title: "resourcePack.editor.playerPositionExtension.pane"
            });
            const playerPosition = (0, server_editor_namespaceObject.bindDataSource)(pane, {
                position: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                dimensionId: DimensionIds[player.dimension.id]
            });
            const subPaneDimension = pane.createPropertyPane({
                title: "resourcePack.editor.playerPositionExtension.worldSettings"
            });
            subPaneDimension.addDropdown(playerPosition, "dimensionId", {
                title: "resourcePack.editor.playerPositionExtension.dimension",
                dropdownItems: [ {
                    label: "resourcePack.editor.playerPositionExtension.overworld",
                    value: DimensionIds["minecraft:overworld"]
                }, {
                    label: "resourcePack.editor.playerPositionExtension.nether",
                    value: DimensionIds["minecraft:nether"]
                }, {
                    label: "resourcePack.editor.playerPositionExtension.theEnd",
                    value: DimensionIds["minecraft:the_end"]
                } ],
                onChange: (_obj, _property, _oldValue, _newValue) => {
                    movePlayer(player.location, uiSession.extensionContext, playerPosition.dimensionId);
                }
            });
            const positionStatusItem = uiSession.createStatusBarItem(server_editor_namespaceObject.EditorStatusBarAlignment.Left, 70);
            updateStatusBarText(positionStatusItem, currentPlayerLocation, uiSession.extensionContext);
            let ticks = 0;
            const onTick = () => {
                if (ticks++ % TicksRefreshRate === 0) {
                    ticks = 0;
                    const playerLoc = lib.Vector3Utils.floor(player.location);
                    const cursorLoc = lib.Vector3Utils.floor(uiSession.extensionContext.cursor.getPosition());
                    if (!lib.Vector3Utils.equals(playerLoc, currentPlayerLocation) || !lib.Vector3Utils.equals(cursorLoc, currentCursorLocation)) {
                        currentPlayerLocation = playerLoc;
                        currentCursorLocation = cursorLoc;
                        updateStatusBarText(positionStatusItem, currentPlayerLocation, uiSession.extensionContext);
                    }
                }
                if (uiSession.scratchStorage && !uiSession.scratchStorage.isDisposed) {
                    uiSession.scratchStorage.latestRunId = server_namespaceObject.system.run(onTick);
                }
            };
            uiSession.scratchStorage.latestRunId = server_namespaceObject.system.run(onTick);
            return [];
        }), (uiSession => {
            if (uiSession.scratchStorage && uiSession.scratchStorage.latestRunId !== -1) {
                uiSession.scratchStorage.isDisposed = true;
                server_namespaceObject.system.clearRun(uiSession.scratchStorage.latestRunId);
            }
            uiSession.log.debug(`Shutting down ${uiSession.extensionContext.extensionInfo.name} extension`);
        }), {
            description: "Keeps track of player position and allow to modify it into the pane."
        });
    }
    registerCoreEditorExtension();
    registerPlayerPositionExtension();
    registerGrappleExtension();
})();