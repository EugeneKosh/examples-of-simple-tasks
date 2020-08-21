# Decode the QR-Code (JavaScript)

Task is to decode a qr code. You get the qr code as 2 dimensional array, filled with numbers. <br /> 1 is for a black field and 0 for a white field. It is always a qr code of version 1 (21*21), it is always using mask 0 ((x+y)%2), it is always using byte mode and it always has error correction level H (up to 30%). <br /> The qr code won't be positioned wrong and there won't be any squares for positioning exept the three big ones in the corners.

<hr />

Decoding information<br />
We have to build a bit sequence now. In order to do that we will use mask 0 definition which is ((x+y)%2)==0, where:

x and y are the indexes of our 2 dimensional array (0-based)<br />
if the condition of our mask is true, we have to convert the pixel: black -> 0 and white -> 1<br />
A mask is used to prevent long sequences of identical bits so that a scanner can better recognize the code
For each black field add 1 to our bit sequence and for each white field add 0 to our bit sequence, don't forget that many bits get converted because of mask 0.

<hr />

Important (!): Since we're limiting ourselves to version 1, we have to continue that process only until our bit sequence is 76 long, because the input will never be longer than eight characters.