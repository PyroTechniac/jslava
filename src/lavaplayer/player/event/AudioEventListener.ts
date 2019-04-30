import { AudioEvent } from './AudioEvent';

export interface AudioEventListener {
    onEvent(event: AudioEvent): void;
}
