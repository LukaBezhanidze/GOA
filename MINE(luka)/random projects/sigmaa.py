def two_oldest_ages(ages):
    oldest_age = 0
    scnd_oldest_age = 0
    
    
    for number in ages:
        if number > oldest_age:
            oldest_age = number
        elif number < oldest_age and number > scnd_oldest_age:
            scnd_oldest_age = number
        
    return[oldest_age, scnd_oldest_age]