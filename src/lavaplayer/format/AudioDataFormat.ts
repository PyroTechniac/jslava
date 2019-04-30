export abstract class AudioDataFormat {
	public constructor(public channelCount: number, public sampleRate: number, public chunkSampleCount: number) { }
}
