# Reversi
My own implementation of Reversi (later variation trademarked as "Othello" by Mattel)

## Overview

The original Reversi was likely invented by one of two Englishmen in 1883 (each claimns the other is a fraud): Lewis Waterman or John W. Mollett. The most common variation is [Othello](https://service.mattel.com/instruction_sheets/52551.pdf), a trademark of Mattel.

Reversi is a two-player game played on an 8x8 grid, on which discs are played. Each disk is black on one side, white on the other, with each color representing a player. On each player's turn, that player places one disc with her color showing on the board, and all opposing discs in adjacent cardinal or intercardinal lines with the same player's disc on the other end of each line turns over to the current player's color.

The object of the game is to have the greatest number of discs showing ot the end.

## Rules

The game begins with two black and two white discs placed on the center of the board in an alternating pattern:

| | | | | | |
|-|-|-|-|-|-|
| &nbsp; | | | | | |
| | | W | B | | |
| | | B | W | | |
| &nbsp; | | | | | |

Black moves first, and each player places only one disc per turn.

Each move must "reverse" one or more opponent's discs, by placing a new disc in a location that has opponent discs in a continuous straight line or lines (horizontal, vertical, or diagonal) between an existing disc by the current player and the new disc.

Example; ***[B]*** represents the newly-placed disc, and ***{b}*** represents discs flipped as a result of the new placement:

| | | | |
|-|-|-|-|
| B | W  | B |
|  | W | W |
| | W | ***[B]*** |
| | | W |
| | | B |

| | | | |
|-|-|-|-|
| B |  W | B |
|  | ***{b}*** | ***{b}*** |
| | W | ***[B]*** |
| | | ***{b}*** |
| | | B |

If a player cannot reverse any opponent's discs, she must forfeit her turn. If any legal move is available, then the player must place a disc.

Discs that do not fall in a direct line from the newly placed discs are not affected.

| | | |
|-|-|-|
| B | |
| W | |
| W | W | B |
| ***[B]*** | | |

| | | |
|-|-|-|
| B | |
| ***{b}*** | |
| ***{b}*** | **W*** | B |
| ***[B]*** | | |

Note that **W**\* is not affected.

All discs affected must be flipped.

If a player fails to flip a disc or flips a disc by accident, she may correct the mistake only before her opponent makes a move. After the opponent has played, discs affected by prior moves may not be turned.

When it is no longer possible for either player to move, the game ends.

## Strategy

Corners are powerful: Once taken, they cannot be changed.

## Handicap

There is a slight advantage in going first. Players may choose to allow the less experienced player to play black (and therefore play first).

Players may also choose to allow a less-skilled player to begin the game with one or more corner discs pre-placed with her color:

| | | | | | |
|-|-|-|-|-|-|
| B | | | | | B |
| &nbsp; | | | | | |
| | | B | W | | |
| | | W | B | | |
| &nbsp; | | | | | |
| B | | | | | B |
