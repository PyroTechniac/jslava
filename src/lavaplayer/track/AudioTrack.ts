import { AudioItem } from './AudioItem';
import { AudioTrackInfo } from './AudioTrackInfo';
import { AudioTrackState } from './AudioTrackState';

export interface AudioTrack extends AudioItem {
    info: AudioTrackInfo;
    identifier: string;
    state: AudioTrackState;
    stop(): void;
    isSeekable(): boolean;
    position: number;
    duration: number;
    makeClone(): AudioTrack;
}
