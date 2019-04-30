import { byte } from '../track/playback/AudioFrame';

export abstract class AudioDataFormat {
    public constructor(public channelCount: number, public sampleRate: number, public chunkSampleCount: number) { }

    public totalSampleCount(): number {
        return this.chunkSampleCount * this.channelCount;
    }

    public frameDuration(): number {
        return this.chunkSampleCount * 1000 / this.sampleRate;
    }

    public abstract codecName(): string;

    public abstract silenceBytes(): byte[]

    public abstract expectedChunkSize(): number;

    public abstract maximumChunkSize(): number;
}
