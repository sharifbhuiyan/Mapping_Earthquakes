## **<h1 align="justify"> Mapping_Earthquakes**
  
  Create earthquake map with two different maps and the earthquake overlay
	
---
## Overview of the PyBer_Analysis: 
<p align="justify">The objective of this project is to gather earthquake GeoJSON data from the USGS API, create and explore interactive maps of earthquakes around the world.
The earthquake data is represented on the maps in relation to the tectonic plates’ location on the earth, and according to each event's magnitude. <p>
	
---

<p align="justify">This analysis consists of two technical analysis.<p>

- Deliverable 1: Create a Horizontal Bar
- Deliverable 2: Create a Bubble Chart
- Deliverable 3: Create a Cauge Chart
- Deliverble 4: Customize the Dashboard  

 PyBer Analysis ipynb file link -  [ PyBer Analysis](https://github.com/sharifbhuiyan/PyBer_Analysis/blob/main/PyBer_Challenge.ipynb)  

  
- Resources :
  - Data source : city_data.csv, ride_data.csv
  - Software : Pandas library, Matplotlib library. Jupyter Notebook

<p align="center">
  <img width="500" src=https://github.com/sharifbhuiyan/PyBer_Analysis/blob/main/analysis/pyber%20summary.png
</p>  
  
  
Command is used for Pivot table to get the total fares for each type of city by the date. 

```ruby
  pyber_fare_pivot_df = pd.pivot_table(pyber_fare_df,values='fare',index=['date'], columns=["type"])
```	

	
 
 

    
