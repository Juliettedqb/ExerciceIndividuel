"""
Version Théo
"""

import random

matches = 50


def remove_matches(x):
    global matches
    matches = matches - x
    print("There are", matches, "matches left !")

def askHowManyMatches(nbPlayer):
    try:
        matchesToRemove = int(input("Player " + str(nbPlayer) + " how many matches do you want to remove? "))
        if matchesToRemove > 6 or matchesToRemove < 1:
            print("You can only remove 1, 2, 3, 4, 5 or 6 matches\n")
            return askHowManyMatches(nbPlayer)
        return matchesToRemove
    except ValueError:
        print("You must enter a number")
        return askHowManyMatches(nbPlayer)

def askHowManyPlayers():
    try:
        players = int(input("How many players? "))
        return players
    except ValueError:
        print("You must enter a number")
        return askHowManyPlayers()

def main():
    players = askHowManyPlayers()
    print("There are", matches, "matches\n")
    while matches > 0:
        for i in range(players):
            remove_matches(askHowManyMatches(i + 1))
            if matches == 0:
                print("\nPlayer", i+1, "wins!")
                break
            if matches < 0:
                print("\nPlayer", i+1, "looses!")
                break


main()

"""
Version Sarah
"""

"""
matches = 50
numOfPlayer = 0

def initPlayers():
    global numOfPlayer
    while numOfPlayer < 1:
        numOfPlayer = int(input("Give a number of player "))

def askUserHowMany():
    num = 0
    while num < 1 or num > 6:
        num = int(input("Give a number of matches to remove between 1 to 6 "))

    return num

def removeMatch(numberOfMatch):
    global matches
    if matches - int(numberOfMatch) == 0:
        matches -= int(numberOfMatch)
        print("You 're a winner!")
    elif matches - int(numberOfMatch) > 0:
        matches -= int(numberOfMatch)

def play():
    initPlayers()
    iPlayer = 1

    while matches > 0:
        print("There are " + str(matches) +" matches left")
        print("Player " + str(iPlayer) + " is playing")

        num = askUserHowMany()
        removeMatch(num)

        iPlayer += 1
        if iPlayer > numOfPlayer:
            iPlayer = 1
play()
"""