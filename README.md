# jano.js
jano.js transforms [callback hell](http://callbackhell.com/) into tuneful heaven. The true reason why programmers started to use this nasty word "hell" is, they have never found a pleasure in callbacks. jano.js allows you to enjoy every single callback nesting by turning it into melody. The more nesting, the better!

## Why woud I use this?
You love music. Or do you read this text in silence? :O

Now, imagine you are a composer. A famous one. Do you already hear a new song arising from the depths of your heart? Now, write it down. Not on the sheet of paper! In JavaScript. You are a programmer, after all.

"How would I do that?" Man, jano.js is here for you.

## [Example first](https://senky.github.io/jano.js/index.html)
```javascript
new jano(1, 300).play(function(){
	this.play()
}, function(){
	this.play(function(){
		this.play()
	})
}).start()
```
Yay, what the h**l is this mess of callbacks? Let's dive into it.

## How it works
There is a music notation which describes a melody in a series of a notes. Deeper tones are written in lower positions than higher tones. We read the notation from the left to the right.

In JavaScript, we rotate this notation by 90 degree. We read from the top to the bottom and deeper tone is positioned more to the left than higher tone (well, that depends on indentation only, but think not of your ugly thoughts to indent otherwise). So the example song plays depper tone first and higher tone afterwards. Note, that only 0-parameters `play()` calls produce the tone. This allows us to define higher tones by nesting `play()` method. The more nesting, the higher tone. Simple, right?

Now, as a famous composer, you obviously know, that music is not tones only. How do we define a tempo? And what about note durations? They aren't all whole notes, after all.

## Options
`jano` class accepts 2 parameters:
##### tone_base `Int` `1`
Sets lowest tone you want to use. Accepts integer in range `1-27`. We are programmers. We use integers, not some random alphabet like "cdefgab".
##### default_timeout `Int` `300`
Sets default timespan between two tones in `ms`. We are programmers, not dirigents to use such innacurate tempo names as "Larghetto" or "Presto" (as we are not Italians, too, man!).


`play` method accepts 1 parameter, too:
##### timeout `Int` `300`
If specified, timespan between this tone and next one will be `timeout`ms. Otherwise, `default_timeout` will be used to calculate duration.

### [Turn Up the Music!](https://www.youtube.com/watch?v=eQWG8BVeryU)
In order to fire your melody up, call `start()` method. Thats it. Enjoy and share!

## Showcase
- [Kohutík jarabí](https://senky.github.io/jano.js/kohutik.html) (melody of simplest Slovak song)

Have you composed a cripsy melody to share with the world? Send a Pull Request adding link to your melody here in the showcase list!

## Contribution
Do you feel like this package needs something to add? Feel free to post a Pull Request!

## License
Copyright (c) 2016 Jakub Senko.

Released under the MIT License.
