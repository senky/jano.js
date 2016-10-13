/*!
 * jano.js
 * Copyright(c) 2016 Jakub Senko
 * MIT Licensed
 */

class jano {
	/**
	 * Prepares attributes and loads all sounds
	 *
	 * @param	int	tone_base		Lowest tone
	 * @param	int	default_timeout	Timespan between two tones in miliseconds
	 */
	constructor(tone_base = 1, default_timeout = 300) {
		this.i = tone_base - 1
		this.timeout = default_timeout
		this.queue = []
		this.sounds = []

		// preload sounds
		for (let i = 1; i <= 27; i++) {
			this.sounds.push(new Howl({
				src: ['sounds/' + i + '.mp3', 'sounds/' + i + '.ogg']
			}))
		}
	}

	play() {
		// called as leaf, enqueue tone
		if (!arguments.length) {
			this.enqueue(this.sounds[this.i])
		}
		// called as leaf with defined timeout
		else if (typeof arguments[0] == "number") {
			this.enqueue(this.sounds[this.i], arguments[0])
		}
		else
		{
			// mark that we are one level deeper and continue nesting
			for (let argument of arguments) {
				this.i++
				argument.apply(this)
				this.i--
			}
		}

		// allow method chaining
		return this
	}

	enqueue(sound, timeout) {
		this.queue.push([sound, timeout])
	}

	// this method ensures first two tones are played correctly according to defined timeout
	// without this, first two tones would be played simultaneously
	start() {
		setTimeout(() => this.startNext(), this.timeout)
	}

	startNext() {
		let [sound, timeout] = this.queue.shift()
		if (this.queue.length) {
			setTimeout(() => this.startNext(), timeout ? timeout : this.timeout)
		}
		sound.play()
	}
}
