# #information = []

# #saxeli = input("Sheikvanet saxeli:  ")
# #information.append(saxeli)

# #gvari = input("Sheikvanet gvari:  ")
# #information.append(gvari)

# #asaki = int(input("Sheikvanet asaki:  "))
# information.append(asaki)

# simagle = float(input("Sheikvanet simagle:  "))
# information.append(simagle)

# tarigi = input("Sheikvanet tarigi:  ")
# information.append(tarigi)

# sqesi = input("Sheikvanet sqesi:  ")
# information.append(sqesi)

# qveyana = input("Sheikvanet qveyana:   ")
# information.append(qveyana)

# qalaqi = input("Sheikvanet qalaqi:  ")
# information.append(qalaqi)


# print(information)
information = []
questions = ["saxeli: ", "gvari: ", "asaki: " , "simagle: ", 
             "tarigi: ", "sqesi: ", "qveyana: ", "qalaqi: "]

for i in range(8):
    statistikebi = input(questions[i])
    information.append(statistikebi)

print(information)