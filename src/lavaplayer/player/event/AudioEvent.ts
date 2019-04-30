import { AudioPlayer } from '../AudioPlayer';

export abstract class AudioEvent {
    public constructor(public player: AudioPlayer) { }
}
