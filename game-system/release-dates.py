import pandas as pd 
import matplotlib.pyplot as plt

df = pd.read_csv("game-ratings-by-release-dates.csv")

df["first_release_date"] = pd.to_datetime(df["first_release_date"])

# Analyze data trough visualization
plt.scatter(df["first_release_date"], df["first_release_date"], color = "blue", label = "Critic Ratings")
plt.scatter(df["first_release_date"], df["user_rating_value"], color = "red", label = "User Rating")

plt.legend(loc = "upper left")

plt.show()
