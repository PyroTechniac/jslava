import { AudioFrame } from './AudioFrame';

export interface AudioFrameProvider {
    provide(): AudioFrame;
    provide(timeout: number, unit: any): AudioFrame;
    provide();
}
