9iufunction submit() {
a = getinput("in")
c = encodeURIComponent(b)
sout = c.replace("?x=", "")
savehref("out", "https://www.google.com/search?q=site%3A.org+" + sout +  "&lr=lang_en&tbs=sur%3Afmc%2Cqdr%3Ay%2Clr%3Alang_1en&ei=vLVdYqehB_TBytMPvMysiAQ&ved=0ahUKEwin77aypp73AhX0oHIEHTwmC0EQ4dUDCA4&uact=5&oq=site%3A.org+site&gs_lcp=Cgdnd3Mtd2l6EANKBAhBGAFKBAhGGABQzEFY-VZgyFpoAHAAeACAAdADiAHqCZIBBzYuMy0xLjGYAQCgAQHAAQE&sclient=gws-wiz&safe=active&ssui=on")
}