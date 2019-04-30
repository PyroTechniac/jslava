import { AudioDataFormat } from '../../format/AudioDataFormat';

export interface AudioFrame {
    timecode: number;
    volume: number;
    format: AudioDataFormat;
    terminator: boolean;
    isTerminator(): boolean;
}

export type byte = any;
