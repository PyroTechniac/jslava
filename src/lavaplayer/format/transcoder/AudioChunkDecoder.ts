import { byte } from '../../track/playback/AudioFrame';

export interface AudioChunkDecoder {
    decode(encoded: byte[], buffer: ArrayBuffer): void;
    close(): void;
}
