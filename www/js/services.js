angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  var operators = [{
    id: 0,
    name: 'AXIS',
	info: 'Paket pulsa & data',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAE40lEQVR42u3YCUxTdxwH8GcyZjInEzkkAyEeyDRL5jAumriEbItxoEQT2cgWg5nZiHFxYR0CBa8NA8UyQEC3IacjTOdQNC5YAXUwhXLKYaAHUG5qOXrRvrbw3a+FqUQlatKny3jJN++l+ff1k9//eP8+Bv+Rg5mDzkH/z1BpXhVM5TIYyiQwlEpgLJdivHOYG6hRbXjqtiVb0sGebYA6pxoaijpPDG1WNdhnuMdzQ9WdKshFrZCIWmZtV5FbCZF/MvRJNzBy7JotwwmlGImjc1qF/aGqtkGC3kVrYQ1qTt5E44W6x7YTJYtwdZ0A6v1FGAo7B+Vea36Hch9lVwGUV5rtP0blV1vReraWoDdQFlmES2FnUF9UO6NNXvAplLwdB1VQFvoDM9G/lRJ02pa+gEwMhBbYH6qnMdZSILZBrx8qRuHWdAhdecjcmIBzoaeR85EQPziHQ+RzFENrhVC8cxzda49D8S5d+wlt5276TKfU2H/WSyrbIU4pRXlMMX7bnoGTqw9D6MKDcHE4ktx4EHhG4k93PnqdYyFzmUqH60HI3ayJhfz1KHRn3+JmearPqcS1iPMo3JaODN9DSH4zEilLo2wReFmh0ehZxIfscXH4Dl0JIu7W0bIDRSgIPIEMHyv0wBTUMwoJBC1xp6o5xUC2OAbyhyJzIuirEVAIOITeonF65oNkpK2MfQClxC+NRLlb9JOhDjx0p93gDtp+W4r895OQtjzmQddTReOponUu/CdC5fO+xcDlJm4fobmbEpG6LGbGGLVCJc58dNmgBHsosoWRkK+I4/ZZP6ZUI3tjPFK9o+9DhdTtpzyi0L9oGmnFOh6EbMFhyhFImP3oSRRxC607W4OsDQT1IqinFRppm0iXaMb3LTwIybxjaGfiIV1wCJ3L96Nj2T5IHXnc755KYy8ia6MAKR58CGndTKQ18sfFh3F3/hF0LuGhPyAY2nwvsLUMTG0MLC0MtJJd3EKt3X75i0Jkrk/FCe8IZL/3JY3X3WjYuwm6lNUw/L0SlnYPmJpfg7GKgbGCAXudwdBQPbdQ8U8VuLz7e/wRFIKLO3bgSsjHqI1ZB/S6YKLPhyroC7bBh5BLYKx8BUZCqhuDud8434wNQknYhzi/bSdy/fag7OvNMEiWY7LnLZjb1sDc7AtjwyoYqz3BVs4HW8ZA1XWeW2hTvj9u8tfjwiefosA/FGLBBsC0ABj0gFm2CiYJYVtXgW2k61pvsLffsEEH+8TcQRU1qagW+ODaNwEoDd8CVZMzwDKYHHLERI87LB3uMLe7wNLsDtOdZTDVrQBb5QTjXwzGx8c4+iti0OLOLytwt3ANRqVOU7cwUlSUAZrVvW7Q9PJwb0CEMUUSDC1+BHUBK3aFgbrfbGa5gQ61BEKroOqZ6asWyjiDCTWdhxkYlP7Qj997dP/aup2gVF2a9QN99faHajVHp6pH3Qw9RTd91jDQj4TMvtlu2gyLdWnqvWVfqHKkHpM6h5nA6ejVe57qHixVVKUoti/UovOdgfs345rPn/rHhuWnMSYV2A+q00Q8iqSqatX8Z/7B4a5f7QMdHi2Z2dV0PaF1x8ho0cv1SmdC5zqzq9XBeBHHrFC99rP7VZzUu1EVz7x8L8nGxn62ISd1Ts81FjmDTuq8adn5Ciazfu796Bx0DjoHfQHHPwFXrbN4gOo7AAAAAElFTkSuQmCC'
  }, {
    id: 1,
    name: 'INDOSAT',
	info: 'Paket pulsa & data',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAEz0lEQVR42u2Yf0yUdRzHv5SWOWmNVZZzK+fKTRLEIARFpNCaOC1/RJbggEYLMxOL5WKltqx/dDUT5DcCBlgCykg47ifIHQdyCHec3B33PM89d0RzrfVXfzi2d5/nnkOg+I8fe5p323vf54/vvnvd5/v5vD+f52H4n/xYEDQI+iCBek0q2AtOKB/UuS0UtscZRhrOKBfU1VIC90sMYiwDdyhKuaDC4TgIrzDwCaTXlsA3aFIeqMdqgnvTQxAI0pPI4HqZYfCnr5QH6utsgjuaQSBIfiuJQPkPY5UH6qw/C1ckgW4NKJ7BncwWDrTTdRdxDV2IvX4TOVo7rgzz+Pvevf/sc+QmQYwKRJPkoRSwbp75aK+oolTJAW+JgWCJIB2dPWj1gAj2fQtYqRasRE1qR0ipGqurDDhltN/fN/rucn8hCQFQ7xaGvvWTR3s9VRBubQKveR6chva0k9SkVtLN8Lm5+sgr3WDFGrBLerAKUjmJYNmFNjxV24EMnQu9b66CJ44iKUWTIikQqGsjQTQkU8QSwKnIsghM0JJ0JL288upFED01cwMq/PkXwqoooqU6sEpJ+oCk506EVhig2vUi9JSXFgJ1bicvTSeQd0gXCaaTNAGnnwpJf2r45NwWU7NbACtTySlQEYCV1moj1hVdhzE5FB0USdWrDF3ZDKMZBLGfgIqkq/0XKD1LERaGcuev6p+rla5dI0NKqrVgw8VG3CJICVRHEbUS4GgmRVYCLWfwmWk1BGDp6nntMnic5+bfnnY2W+ScrRtE/PkanMj/HFf3h0OX9DC6KE+F10nvMxgPMlz9aA0sBUvwu4kKjFKA0z0GcaRu4Xz0m14H3so7ifq0JNQejEFpxnZUpiWiKWUltIcZmrKfRm16BIrT3kDB3h3o+PQZuK+tWHjDv2vPh/MsQ13GGvy4JwXFmcmozoyCKusJdKUyVB3YiIIP9uBS+hY0pkbgeG4+1pW0LByo12uGu3s5eCqGsf5Hwd1YDdWXL8B09BHwVEB/ULU7qfrbyZ5aUp5F/XvRyDj1NVi9jXLaCFbYikKrc35BfaP94A1r/bbitxeSaF4KXyNV+F56PiTbkp36fTupn/p9ft4RLLrcSx5skO2sTIuQCg1+GHDOD6goNoPTBgx7qhd20fozaTfzR1QkDVHl/0rqi2E49kUe2OUeiqZ20n8lt7jQin3Nt+cW1DvaB04fNh1SP9lh/BH+hNY0AiWTH6Zo6gnURqDpx48QWPd00AldVCFHbZs7UMEc6+/N0wDVsmnzxvUQbKng3l4mDyTxcr8fk1op9frzlWVIbBtASAnZWZHKf/X+NiylgdSKqYlUDrlmDyo4ToNrlfORDwwTUs/meqPgdZTf32c8sNI/LE8MJdI6snby6BaHB8cMdoTVGGRgCVxSYTtWUf7OGtT3Wyf47gTwpl3gbfvA38mbcd/QuY8hREyfnszRMx+tcYwh23AbKRozkq4ZcbrHunCDs4MGZ0fklIhSCrh2LFXehC+2VWBkw+SriIeGaO67LOWBjo+Pg9+5AsLmQH5SGgxXnVEeqPSz5iRAoGFZehN1Jy2GMNChTFC+9DN4wslL6ZXkTlaEsj/pOLYtBv8k5WfHL8oGHeq5Aa7+2+BnxyBoEDQI+iCB/gP4kjXbh9lUsAAAAABJRU5ErkJggg=='
  },{
    id: 2,
    name: 'TELKOMSEL',
	info: 'Paket pulsa & data',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAFFUlEQVR42u2YC1BUVRjHL/LaxXCAXXblvW92YVlYjMGRlzgKZrxSa6ZJa0YbRzJGcJSHoAiJ4URRUw0+McpkogyS8g1GgobVVIw1wvLSNplGHo0CUg38+/YuLig0gaPtNnJnvj3n3nvumd9+5zvf4zD4n1zMDOgM6KMKerqmDp9UVVsu6InTNQjWBMFfocRcHh/J6zdA137VskCPVByFzEdKIoFG5c+2bgIhsrZusyxQjX8AVEoV5GIRpF4+aGy4yD5PTl6PPfsPWQZoZkY2Av3V8PIWI3xZ3IT3W9IzzA965Ggl3Nw84OurwhPRUeg/+D769h6ALmf7XeM+P3nWfKDtK5696/7X1DRcYxj8wHDRQe2PcjUYjh0+KK8wn0bbM3PRFRyCkdH7vwZuoZmxxhUCbCYxgHaThJMwJNXm0mgHQQ18OKapP3/vw63aL4w3w8NjA6kfn5iAxMTl2EMmYbgGbw89fNBOfRc+KnoLfWVlwMjIlL+LjIiAG98VEokYSpkcWVnZeKdkHyqPHX+woGfOncei6EWIiV2Go9WjmhsZNi79yPCU5tAGauGr8IVKpoRMLIbES4yYJTF4evkzDwY0KXEFRB7eUErl5C/VRkaD3KPRkcF+DBwoRXdBIbpfKUDPLmoLXkXvwVJa737UN1+GWC6DUixFcFAw/FVqCg5qKMQyhM4PvX/QmroGdkIPoQBajQazObYo/6zqDpbpV/9SCrvb25hZ7EZqIvttof4Vklbq/0zPOqnfwziwG4tP4TUpPgkBfgGQisQUJKSIjopG8ZtvTx/UYDtPLo2DD/lID/5caOV+mOPuhMHvv4Fucew4VOC3hEQC4qDT3hntHB5aSXQkzfY8dFDbYu8CWDnhea4jCyoiMMN17kIj0jO2wsfTm+xXgA0bUqYPGpeQAC+hB8JCw5CdnYuMHGPM7g1fjBY77rjlHoTeVQKdjSPauDy02/NN0sbhQ2/LQye1P3EFcLayZkG3bc8zfV9X34hE+qOeQjcUFr42PdBDZYchEokQ6KdGaMj8ia6pqNikzZ5vL+EyLWunvdMYKGcMtpXjgi4HHnbaGbWpDQicMF98XAKrkGnbaOHu1+HuKmBtqPVf0rSBhkbWubfZ80xaNLY8VnRcF9y0EYDhcljQrHHavLMPVq96AfWXvps+6MefHkNszFKEaOdN+r6oZL+pP9TwNW0ixqhFzijoKKyONHzTho+Cx1xYSKFw7oS53i3Zixu9fffvnnbk7USQRjtp4lu67z34KVTs8t8+30gbicE12jAG6SAxwHZwXNHKdcKQrQvk1jYsqOAe0M3pWQ8mMlVWn0DS8qcm2vDhcggdeXg5OxNoajJq1MoBerLHG7ZO0M9yQBd5gS5yR7sZOxaS3UQ78h9urK/96gJycvPG2VU9fKQyOBNQcdEb+KPqOFauWm0C4vh4Y8naNViZtgnPpWxEckoqqo6fMk9SIpdQ2eEpQvLGNNOzs/SHas9ftKwq1FB2KOQKREVEWna5HBW5EHIq5rTqQJw6++U/jktJ3WRe0Lz8AmgoICglCqxdu27SMUGULZldo52/XEdwgBZiDy9EhEVg85axAm7Ni+sQFxePqinkmv9JzWSI2VJvEZuqqamWN2RBvpQKOs+eg/y8XZZ1UhIS9DhkIiOgP1WiIsqEFkZG46r+umWBHj5SgXmaYHgK3CEmyAULwli/a7GHZPk7d+HkmdqZY8cZ0BnQGdBHBdRwxvE3vvT2QoM9440AAAAASUVORK5CYII='
  }, {
    id: 3,
    name: 'THREE',
	info: 'Paket pulsa & data',
    logo: 'data:image/png;base64,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'
  }, {
    id: 4,
    name: 'XL',
	info: 'Paket pulsa & data',
    logo: 'data:image/png;base64,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'
  }, {
    id: 5,
    name: 'SMARTFREN',
	info: 'Paket pulsa',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAFIklEQVR42u2YeUxUVxSHh8UKIjDMwrANjGxKqTuIBaRqpDZGrVXUSmtaE5dG05pIt9Sljam2aUw1VhtN1Wjc6lK1tVQtFKkQ0dalCKIDOMww22MZEAREtq9XmzQx0W5ooenc5OT9Mefd98257/zOOU/Gf2TJnKBOUCeoE/R/BGo5lYPlwFEsW3di3bjlnlk+34Z59wHM337fs6C2Dz7CHpeEfdAwpNBo7IEDsKtCkBRB98ymDMamCcMSEolR+JRPm82NzV/8O6CGHbsxzpqL3T+UKrmGKo24BoT9ZoG6+01AShrdPViT8C8Vf6K4v5qL2ih+eW3p4wG9KiJxYfhoStRaTMLswRFU+WuRwgYiDYlHik9GEtGVElKQxkxAeuZZpJRU7KNSsMUlYxrxNKUislfEfeeF5fj6c3r8c48OtHDTNrKCIznrpaZQHG25eFhlgA7JS4l9zitYT+f/5b2Mew5SKCJ7TkQ0W5xA1uiURwNatGwxPw3250JYKFcjItCLSBhVWqwicrYjx//2qRj3HqZQHsB5AZqjDiF3Slr3QUsWLaAsqT/Wyf7oowdg1MipVCswr/74nyVeURmlkbEUBYVzXliWWz+uf3Oye6COAB8sMYG0bvDm1jviiIN8RASPPdC3qiCTpk/T6DjiRZfRnTu54UiXTv/+e2dHBw1r51M1QoHeP4Ji8fpcDI+hPCeve8lky8+jLURG0xQ/2o960fyWF1VjEx/su2sXrXNd6Vgoo/OoO9TI6DjgQssaHdXXD1N3bCUts0JoH+cqEkuLXh1OUX8V5dt3d1+eHAkJtE10p/3lftQmBlM9PeGhvtYFL1E9VMWt+Spa13vTedGTO1vkdJ11g1wZXV8L8M/caF3kS2V4KGW6GCr2H+6+jlq//IpaD18aPRQ09/HD4OaP8dB3D9fUySmYYwKwDw/DPnQAdemhdJU9QZfena48N7oyXeC4jLZ1MiyJsVRm5z6aylQWGomhrxfVnt5YXPqQl/HeH250adkq8vsGcFkZhV4ZjSkogvYdHnQedKHzjAD8IYCmnDSkyoJHW0KvCThDPzmNT3hy1sOHrPfX/Olm+rXrKZn6IqXDkqgYkkzLjiE0nppHTcle7KbLj6cpMchkVLl7UealYKcQ9WOiuvTK7sk4N51rWl/ORYXzoyaafJWOK5NmYDiR3fvavMq0UdTOVuOYIzqfYeGY5Doq3YWuZmb3LlDriUxqh3rSMD2Y5oUaIVEDkHwjsQUOwjbjVSwFl3sH6N1VvzSWW1PcaJipoOlNJY7poTimBlGTrMHip8QYMx7ThxtplGp6vsOXLpykcc1TtCx34fZWT+qXK2hY4Uf9Ejm33vDkRqofP0fFUTxhEuVjU4VNpGziVEpXre6ZUaR63woa3hUNyUw5huc12JcocLztze1NHhQkain2FkVBrsKiDsTiH4RB7SvKZXzPzExtd1rRz3mS2s2utIuy2L5PlMftrmIUkaNXabAqA6nTBlMXpaUmTkeLwp2b48b23HBXb9iEIz8Dx6EXqM+Q0biyLzen+NAQK97lWA0tyYE0pQbTMkZDk6cHVbv29PwUWrltMeZZrpgnKWlOV9A+TUV7upq2BXeVQqhE/0Csn2zoHeNy6bzBlCfJMcUHIyVHUJ+qo2b0XSmLEBNoCJacM70DVL8ug6LBvpTHKKkIiBLJFInZLwyzdiDmha/3rg8QpQf2Uzx7JuWDRmKMHUlFykRM2Wd6Juud356coE5QJ6gT9L71K+LzbMKdVDNdAAAAAElFTkSuQmCC'
  }, {
    id: 6,
    name: 'PLN',
	info: 'Token listrik',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAD4UlEQVR42u2Ye0hTURzHz+4qm4Uz19uBVmiY1iyLyqjoj+ovoyythRk9RHsX9KKi0iDMIsgoMIgitNAMysiKMBHKnhBpf0hYWSKhMvZw6tZ277efc2ze3NqCWxrcC1/OuWfn8eF3fr/fOXcM/8nDZFAZVAaVQf9jUKcz0t01gB6QRpLGk9SkNBbUOLP1kDSgPxyxQS3Ij1NQwTwSOhVBjTN1nPyHoJ+UVHhBBaoLYIMLtAeIz+fckL2wwjhlcO7yT0HNZL1YTmRN/jY3sKBOZwjMFg0cDpV3sVom2nasDuDLvApWa5j0oMAkV9fCwlNISmqAVmtCQvwnVFXp8d06A8ZHkaJt/zw9ATtyS3H5Ui4ePtyIhoaFMBqnoblZh8rKTCTqGhEV9R1ZW+/AbguBtfuoNKAGw1yPscLVVkRHfYVGY/a0fWTJItA+ge9TERMtiNS2uupjx36mFXKkAW1tW+CatKwsB2bTBNcwu02DvPyLWJv+qs+295bnn5zDy5dLcffeDpy/kI/sPeVI2fIa+oNVKLhWgK760YAQijdvlyEj4w7Nt1saULsjHna72rfPPRGbS9D6iPYmUgkpixRJyvk14Z+QBpTnp7i61j5Pwa5dV6HXl2LTllIYu6h9SR9QJUX/4SEQtlJ9HUEvo/dpFP2cN9B4pkT2hnKkkyWvX9/vmtciFegPRxz27S3p52uzWJMfR1T4ddBuNlzUtGjRc1phuzSg7e3JnoknT7FgVeorjJkKFLCzv42aarYJXUwtgn/MMhAWQxux5IurmVOYaIVsaUCtnYlo+jKnv+8p3AAK2uIkDvwBJYQKpffo/EYK6XNaTeT8XEqOS3V7ivEdSAtJZ0jv/ST3+7+4wr6/fDIJ7oR/pSgPOl0LVKFAXKwRVXVr0NiuQ5spllJYDBobZ6K+fg6Kiw9gz9FbeLd+ucgVPj6bjcc16YiPb6f8KSArqwJGQxg6bUekATVbZtGJ9MGzpkYjeOpDhwKjwm0ID+/GsGFiN73LtnlezrE8MJX3N5W7nqh7I10wtVHCD6WJb93cSW8jPFt27EgRUlJqMH9eHRYkv8fKldXIzKxESfFe1Dakoys6otc31SOwOfUeVqTVIPdkIY0d4hpfV7cY+nXl0iV8my0Bzd/i/F80hOFUhvRvH+M+BNJ6LtB+LtEC5dFOiYLJ4S+YAokpe/f3oGIQ3fB9gnJkMLJoCzfYQenI3MYF/CQZUFABZMXoHsjAH3gDCsq3EOyN4L6bJAN1OrV/vu0Vwfc1WyVK+AZzEYwdp0lnglM36cVZGG35AfuaOnLRangq//ckg8qgMqgM+pefn+yTQTosejWgAAAAAElFTkSuQmCC'
  }];

  var grup = [{
    id: 0, // AXIS
		items: [{
			id: 0,
			kode: 'XR5H',
			info: 'Axis 5 ribu'
		}, {
			id: 1,
			kode: 'XR10H',
			info: 'Axis 10 ribu'
		},{
			id: 2,
			kode: 'XR15H',
			info: 'Axis 15 ribu'
		}, {
			id: 3,
			kode: 'XR25H',
			info: 'Axis 25 ribu'
		}, {
			id: 4,
			kode: 'XR30H',
			info: 'Axis 30 ribu'
		}, {
			id: 5,
			kode: 'XR50H',
			info: 'Axis 50 ribu'
		}, {
			id: 6,
			kode: 'XR100H',
			info: 'Axis 100 ribu'
		}, {
			id: 7,
			kode: 'BRO10',
			info: 'Bronet Kuota 1GB 30 Hari'
		}, {
			id: 8,
			kode: 'BRO20',
			info: 'Bronet Kuota 2GB 60 Hari'
		}, {
			id: 9,
			kode: 'BRO35',
			info: 'Bronet Kuota 3GB 60 Hari'
		}]
  }, {
    id: 1, // INDOSAT
		items: [{
			id: 0,
			kode: 'I5H',
			info: 'Indosat 5 ribu'
		}, {
			id: 1,
			kode: 'I10H',
			info: 'Indosat 10 ribu'
		},{
			id: 2,
			kode: 'I20H',
			info: 'Indosat 20 ribu'
		}, {
			id: 3,
			kode: 'I25H',
			info: 'Indosat 25 ribu'
		}, {
			id: 4,
			kode: 'I30H',
			info: 'Indosat 30 ribu'
		}, {
			id: 5,
			kode: 'I50H',
			info: 'Indosat 50 ribu'
		}, {
			id: 6,
			kode: 'I100H',
			info: 'Indosat 100 ribu'
		}]
  },{
    id: 2, // TELKOMSEL
		items: [{
			id: 0,
			kode: 'S5H',
			info: 'Telkomsel 5 ribu'
		}, {
			id: 1,
			kode: 'S10H',
			info: 'Telkomsel 10 ribu'
		},{
			id: 2,
			kode: 'S20H',
			info: 'Telkomsel 20 ribu'
		}, {
			id: 3,
			kode: 'S25H',
			info: 'Telkomsel 25 ribu'
		}, {
			id: 4,
			kode: 'S50H',
			info: 'Telkomsel 50 ribu'
		}, {
			id: 5,
			kode: 'S100H',
			info: 'Telkomsel 100 ribu'
		}]
  }, {
    id: 3, // THREE
		items: [{
			id: 0,
			kode: 'T5H',
			info: 'Three 5 ribu'
		}, {
			id: 1,
			kode: 'T10H',
			info: 'Three 10 ribu'
		},{
			id: 2,
			kode: 'T15H',
			info: 'Three 15 ribu'
		}, {
			id: 3,
			kode: 'T25H',
			info: 'Three 25 ribu'
		}, {
			id: 4,
			kode: 'T30H',
			info: 'Three 30 ribu'
		}, {
			id: 5,
			kode: 'T50H',
			info: 'Three 50 ribu'
		}, {
			id: 6,
			kode: 'T100H',
			info: 'Three 100 ribu'
		}]
  }, {
    id: 4,
		items: [{
			id: 0,
			kode: 'XR5H',
			info: 'XL 5 ribu'
		}, {
			id: 1,
			kode: 'XR10H',
			info: 'XL 10 ribu'
		},{
			id: 2,
			kode: 'XR15H',
			info: 'XL 15 ribu'
		}, {
			id: 3,
			kode: 'XR25H',
			info: 'XL 25 ribu'
		}, {
			id: 4,
			kode: 'XR30H',
			info: 'XL 30 ribu'
		}, {
			id: 5,
			kode: 'XR50H',
			info: 'XL 50 ribu'
		}, {
			id: 6,
			kode: 'XR100H',
			info: 'XL 100 ribu'
		}]
  }, {
    id: 5, // SMARTFREN
		items: [{
			id: 0,
			kode: 'SMN5H',
			info: 'Axis 5 ribu'
		}, {
			id: 1,
			kode: 'SMN10H',
			info: 'Smartfren 10 ribu'
		},{
			id: 2,
			kode: 'SMN20H',
			info: 'Smartfren 20 ribu'
		}, {
			id: 3,
			kode: 'SMN25H',
			info: 'Smartfren 25 ribu'
		}, {
			id: 4,
			kode: 'SMN30H',
			info: 'Smartfren 30 ribu'
		}, {
			id: 5,
			kode: 'SMN50H',
			info: 'Smartfren 50 ribu'
		}, {
			id: 6,
			kode: 'SMN60H',
			info: 'Smartfren 60 ribu'
		}, {
			id: 7,
			kode: 'SMN100H',
			info: 'Smartfren 100 ribu'
		}]
  }, {
    id: 6, //PLN
		items: [{
			id: 0,
			kode: 'PLN20H',
			info: 'PLN 20 ribu'
		}, {
			id: 1,
			kode: 'PLN50H',
			info: 'PLN 50 ribu'
		},{
			id: 2,
			kode: 'PLN100H',
			info: 'PLN 100 ribu'
		}, {
			id: 3,
			kode: 'PLN200H',
			info: 'PLN 200 ribu'
		}, {
			id: 4,
			kode: 'PLN500H',
			info: 'PLN 500 ribu'
		}]
  }];


  return {
    all: function() {
      return operators;
    },
    remove: function(opr) {
      operators.splice(operators.indexOf(opr), 1);
    },
    get: function(oprId) {
      for (var i = 0; i < grup.length; i++) {
        if (grup[i].id === parseInt(oprId)) {
          return { name: operators[i].name, logo: operators[i].logo, items: grup[i].items };
        }
      }
      return null;
    }
  };
});



// Base64 encoding service used by AuthenticationService
var Base64 = {

	keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

	encode: function (input) {
		var output = "";
		var chr1, chr2, chr3 = "";
		var enc1, enc2, enc3, enc4 = "";
		var i = 0;

		do {
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output +
				this.keyStr.charAt(enc1) +
				this.keyStr.charAt(enc2) +
				this.keyStr.charAt(enc3) +
				this.keyStr.charAt(enc4);
			chr1 = chr2 = chr3 = "";
			enc1 = enc2 = enc3 = enc4 = "";
		} while (i < input.length);

		return output;
	},

	decode: function (input) {
		var output = "";
		var chr1, chr2, chr3 = "";
		var enc1, enc2, enc3, enc4 = "";
		var i = 0;

		// remove all characters that are not A-Z, a-z, 0-9, +, /, or =
		var base64test = /[^A-Za-z0-9\+\/\=]/g;
		if (base64test.exec(input)) {
			window.alert("There were invalid base64 characters in the input text.\n" +
				"Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
				"Expect errors in decoding.");
		}
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		do {
			enc1 = this.keyStr.indexOf(input.charAt(i++));
			enc2 = this.keyStr.indexOf(input.charAt(i++));
			enc3 = this.keyStr.indexOf(input.charAt(i++));
			enc4 = this.keyStr.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}

			chr1 = chr2 = chr3 = "";
			enc1 = enc2 = enc3 = enc4 = "";

		} while (i < input.length);

		return output;
	}
};
