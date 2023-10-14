/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { math } from 'cc';
import CubismPhysicsSourceComponent from './CubismPhysicsSourceComponent';
import type CubismPhysicsParticle from './CubismPhysicsParticle';
import type CubismParameter from '../../Core/CubismParameter';
/**
 * Delegation of function of getting output value.
 * @param translation Translation.
 * @param parameter Parameter.
 * @param particles Particles.
 * @param particleIndex Index of particle.
 * @param gravity Gravity.
 * @returns Output value.
 */
type ValueGetter = (translation: math.Vec2, particles: CubismPhysicsParticle[], particleIndex: number, gravity: math.Vec2) => number;
/**
 * Delegation of function of getting output scale.
 * @returns Output scale.
 */
type ScaleGetter = () => number;
/** Output data of physics. (struct) */
export default class CubismPhysicsOutput {
    /**
     * Gets output for translation X-axis.
     * @param translation Translation.
     * @param parameter Parameter.
     * @param particles Particles.
     * @param particleIndex Index of particle.
     * @param gravity Gravity.
     * @returns Output value.
     */
    private getOutputTranslationX;
    /**
     * Gets output for translation Y-axis.
     * @param translation Translation.
     * @param parameter Parameter.
     * @param particles Particles.
     * @param particleIndex Index of particle.
     * @param gravity Gravity.
     * @returns Output value.
     */
    private getOutputTranslationY;
    /**
     * Gets output for angle.
     * @param translation Translation.
     * @param parameter Parameter.
     * @param particles Particles.
     * @param particleIndex Index of particle.
     * @param gravity Gravity.
     * @returns Output value.
     */
    private getOutputAngle;
    /**
     * Gets output scale for translation X-axis.
     * @returns Output scale.
     */
    private getOutputScaleTranslationX;
    /**
     * Gets output scale for translation Y-axis.
     * @returns Output scale.
     */
    private getOutputScaleTranslationY;
    /**
     * Gets output scale for angle.
     * @returns Output scale.
     */
    private getOutputScaleAngle;
    initializeGetter(): void;
    /** Parameter ID of destination. */
    destinationId: string | null;
    /** Index of particle. */
    particleIndex: number;
    /** Scale of transition. */
    translationScale: math.Vec2;
    /** Scale of angle. */
    angleScale: number;
    /** Weight. */
    weight: number;
    /** Component of source. */
    sourceComponent: CubismPhysicsSourceComponent;
    /** True if value is inverted; otherwise. */
    isInverted: boolean;
    /** The value that below minimum. */
    valueBelowMinimum: number;
    /** The value that exceeds maximum. */
    valueExceededMaximum: number;
    /** Destination data from parameter. */
    destination: CubismParameter | null;
    /** Function of getting output value. */
    getValue: ValueGetter | null;
    /** Function of getting output scale. */
    getScale: ScaleGetter | null;
}
export {};
