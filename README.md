## Making a plan
1. HTML Needed
    - Radio Buttons for Pokemon
    - Pokeball Button
2. State
    - Encounter, captured for each pokemon
        - const pokedex = []
        - let captures = 0
3. Events
    - On Click
        - Add encountered pokemon to cart
        - send selected pokemon to pokedex
            - figure out which pokemon is selected
            - grab our pokedex from local storage
            - increment caprture quantity
            - if captures state is 10 redirect
    - On Load
        - Generate 3 Pokemon
        - add the to encountered
4. Functions
    - Generate 3 new pokemon
        - start w/ raw array of pokedata
        - math.random to get 3 random array indexes(unique)
        - use 3 indexes to get 3 pokemon
        - increment encountered for all
        - is it in pokedex yet?
            - if not, { pokemon: , captured: 0, increment: 1}
        - Capture pokemon (selected)
            - grab pokedex from local storage
5. Local Storage Utils
    - get pokedex
    - encounter pokemon
    - capture pokemon