import { AudioDataFormat } from '../../format/AudioDataFormat';
import { AudioFrame } from './AudioFrame';

export abstract class AbstractMutableAudioFrame implements AudioFrame {
    private _timecode: number;
    private _volume: number;
    private _format: AudioDataFormat;
    private _terminator: boolean;

    public get timecode(): number {
        return this._timecode;
    }

    public set timecode(timecode: number) {
        this._timecode = timecode;
    }

    public get volume(): number {
        return this._volume;
    }

    public set volume(volume: number) {
        this._volume = volume;
    }

    public get format(): AudioDataFormat {
        return this._format;
    }

    public set format(format: AudioDataFormat) {
        this._format = format;
    }

    public isTerminator(): boolean {
        return this._terminator;
    }

    public set terminator(terminator: boolean) {
        this._terminator = terminator;
    }
}
