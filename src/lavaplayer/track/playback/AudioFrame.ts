import { AudioDataFormat } from '../../format/AudioDataFormat';

export interface AudioFrame {
    getTimecode(): bigint;
    getVolume(): number;
    getDataLength(): number;
    getData(): byte[];
    getData(buffer: byte[], offset: number): void;
    getFormat(): AudioDataFormat;
    isTerminator(): boolean;
}

export type byte = any;
