import { byte } from '../../track/playback/AudioFrame';

export interface AudioChunkEncoder {
    encode(buffer: ArrayBuffer): byte[];
    encode(buffer: ArrayBuffer, out: ArrayBuffer): void;
    close(): void;
}
