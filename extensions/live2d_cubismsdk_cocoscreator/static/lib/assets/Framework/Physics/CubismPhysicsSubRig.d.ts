/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import CubismPhysicsInput from './CubismPhysicsInput';
import CubismPhysicsNormalization from './CubismPhysicsNormalization';
import CubismPhysicsOutput from './CubismPhysicsOutput';
import CubismPhysicsParticle from './CubismPhysicsParticle';
import type CubismPhysicsRig from './CubismPhysicsRig';
export default class CubismPhysicsSubRig {
    input: Array<CubismPhysicsInput>;
    output: Array<CubismPhysicsOutput>;
    particles: Array<CubismPhysicsParticle>;
    normalization: CubismPhysicsNormalization | null;
    private _rig;
    get rig(): CubismPhysicsRig | null;
    set rig(value: CubismPhysicsRig | null);
    private _currentRigOutput;
    private _previousRigOutput;
    /**
     * Applies the specified weights from the latest and one previous result of the pendulum operation.
     * @param weight Weight of latest results.
     */
    interpolate(weight: number): void;
    /**
     * Updates parameter from output value.
     * @param parameter Target parameter.
     * @param parameterValue Target parameter Value.
     * @param translation Translation.
     * @param output Output value.
     * @returns Changed parameter value.
     */
    private updateOutputParameterValue;
    /**
     * Updates particles in every frame.
     * @param strand Particles.
     * @param totalTranslation Total translation.
     * @param totalAngle Total angle.
     * @param wind Direction of wind.
     * @param thresholdValue Value of threshold.
     * @param deltaTime Time of delta.
     */
    private updateParticles;
    /**
     * Updates particles in stabilization function.
     * @param strand Particles
     * @param totalTranslation Total translation.
     * @param totalAngle Total angle.
     * @param wind Direction of wind.
     * @param thresholdValue Value of threshold.
     */
    private updateParticlesForStabilization;
    /** Initializes this. */
    initialize(): void;
    /**
     * Evaluate rig in every frame.
     * @param deltaTime
     */
    evaluate(deltaTime: number): void;
    /** Calculate the state in which the physics operation stabilizes at the current parameter values. */
    stabilization(): void;
}
