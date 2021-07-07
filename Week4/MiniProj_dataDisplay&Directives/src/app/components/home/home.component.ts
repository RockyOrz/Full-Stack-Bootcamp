import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataImage:string = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQERUSEhMVFhUVGBYVFRgYFxYaFRcVGhUWFxgYFxgYHikhGBwmHxUYIjMiJissLy8vFyI0OTQuOCkuLywBCgoKDg0OHBAQGzAnISYuLjAsLi4sMC4uLi4uLCwuLjAuLi4zMC4uLi4uLi4uLi4uLi4uLi4wLjcuLi4uLi4wLv/AABEIAJMBVwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAwIEBQEGB//EAEEQAAIBAgQDBAgEBgECBgMAAAECEQADBBIhMRNBUQUiMmEGI1JxgZGh0RRCkrEzYsHS4fCicoIHFSRDY+I0U5P/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/EACoRAAICAQIFBAICAwAAAAAAAAABAhEhEjEDQVFh8HGBkaEisTLBBNHx/9oADAMBAAIRAxEAPwD5Fc4XDTKbnEl+LOXhxI4fDjvTGaZ8or0PbvbmJWzh8FdsrYfBkEMoy3s2UMhYjYwQdPI1jXrdx8Mj8JBatO1niqoDPcebuW40y5AmDyAioWb4Ft0KKWYqRcObOgWZVdYIaRMj8tdSOeVDccJIfjcV7qi5cPfzC4zNmRyw7zc5Ejvc69N6FdunsnFsb1p805HRgQy85KkTOorzGJNuF4ecerTiZypm7JzFMoEJtAOu81O3cZnzG5qWYljBMx4jJ1miiU8o2/S7t/8AH4hr4DWwbZAUT7RkGBEHTT61n4eJM3Lm9nYt1GaSRuuuXpAiaVaY5Y4g8DiIE6kdzrJ+elW7DMJ9aq62PyrrBWDv+SNf+nWnRB4Vebml2j2UMOsnFq5L3wFt3TclBIFwsqwMzAhgYJkHSqDKpEcRz3LYIPWfDEeEbjpHOnKCZJvp4r/5V1zd1jv+YDTp+WTRddsv8RT6u3plEgBhCaGZG/XrVEQlLPn+jRHZANvjLiUIzFmRny3Qy7jKQC7kQQQNZjlFZ0NyLbP++nLmN6fmYnW4D60flO4EB9DEQNtqkqsYOaTD/lbTcnY85Pz0piDlRv8AoT6RXMCXz2+IGCxtIMAEe6qvaeNu4hr1wF0Z3UpbAXhldcxc75hpGh+FUEH83Ifluf0NPRf5ufs3v6NRolLidvplpu08VcwrYa9bS6HYMbjH1oiAAGIOwAg9NKxe0+wbli0l6Q1t2KSAQUYahX5SRJEE6CtZF/mP6cR/dV3s++1p8wM6FWUpiCrKwhlIzbEGtQsf8lp529GeHijLW76R9jrh3VrRdrN0ZrbMpVpEB0IIBlSd42I3rHy0KO1STVoVloy03LXMtajWKIqJWnFa7esshhgQeh3oUHUVitQIp5ApmKwb24zqVnbblvtz12oUPqV0UiKgRTiKgRSsdMURUCKaRUCKVlExRFRIphFRIpR0xRqJphFQNAdEDUamaiaUdETXKkajQGRGuVI1w1hjlFFFAwUUUVjBRRRWMFFFFYx6f0XxODsNfGOw7XSUKWwNClwEzIJEHb3Qal2fbwH4K8bzXBiwfUgTkKwJnl13rAZixJJJJJJJMkk6kknc1IDy61REZLO5sX+z5zKts2ns2Q98XmCsXB1NtWAOodYTU6HernonYwr4lVxsrZJeSo1zBdFMDw7/ACq/6HXcJdu58WzpdtBrwvnNeNwhQFV0cMsKFOpGs8oFJ9Hfwb279m5hbt7EXny4YrpBOyxmEGdY6UURk90T7EtNYvDF4Vbd3hNdKWmlrptJLcVkC+EAxmnfSp4nEjFXMTfuWlW7cfDMiqim3LMoYMSJUMI2GsmazltSWOHsX1KWSLkMzEPGR3JWIQkMI25EGK2Md2TgbaYco91zc4BvjIfVBiuaFkE5wTAkzIg06JSfnuZjWDJ9WvixGyiNFEgd3ZN19/KpXLBjwIPV2joo2LDvHTxHY68+dXMX2fhkTPbPElnXKVuJcUhc+qkkFU8JM76wRVJrIjS2QciHVTBYnVvcfd8qc53Lz3HvhTmPcQesUQEEbTl8Ox/0Vsdj49sHfzYe0tzPbKRctQxdvEF4amQGBA11EVWsYHDqoa9dCS0qi2md8p4g4bAwFaVXmZDzOlNtYGz+CF8O4xIcjhi2NsxCNIGh0maJO31EYDs2wmJT8Yyi2wJurbzZ7bBiuV1KgoSRt0NUMbaw4uvw8+TOwSVWcvKda08LhHd2tPYdsQxRgMqgqJLXC4KyzMu3z5xV5+0sI2Nsth7fAsgqHzW7bGYIJCkHqKxtTZntg8vEtC36y2QwdRbuWuHGuZ8p1JYQ85Z00q/2icKt2y1hGu2lyjEI1tAwbmsZQROvlpXMWLNpzYsFgoLhbpLHiqSJR0MCARBTnvvEiYKdSDMR4XJA6ZgylgORImAN4p1Gzm4nFjF5K+MtJiL1xMPYuJbfvWkKklXVZPuDAEfEHlWCrEbE17DD2GRgy5gR0F4e8aXdiNKzfSrs5bOJOXupdVbyCCIFwSQByAbMI8qNUHhceM2zC4re0fmaOM/tN8zTeGPa+hrnDHtfQ0c9S1roL/EONnYfE1y/ibjGWYk/L9q0MFhFfMM0kIxUAR3gpK6kQdYEedZ0+75D7UrvqGLTvGURTF3F2dh7ial2ljTeIlVXVjpm1ZozHvE9BtUGb3fIfapriyEdIWHidADpPSJ35zSsdJWnWTPIqBFP0pljD8QwqyQCTLqoAG5JYADelounzZRIqBFW7qBSVKsCCQRmGhBgjw+VLKr/AKw/toUUTKhFQIq6VX/X/wDpUMqf64/spdI6kVKWa9Bhnw4tOO4GIfxxcYzbcJkYWxwyGKHcbb8qyfw0z30011bf3aamlaHjO2UjUTWpgOzRduKhuIMxA0JLf9ojU1W7TwwtXSozRCNqIIzorwRyIzR8KRprI8Zxb0rerKRqJqZqJoFERNcqVRoDHKKKKAQooorGCiiisYKKKKxjSu2EW2jC4C7Fw9vKwNsKRlJYiGzSTptGtWsdgRZS0G4i3XUu6OmVQrEG0Uae+GUydBFM9IO2Gx+Ka+yW7ZfKIXRFgBZJ+pNbuDuArawt1sLiQl6/YQnEXFyo6oS6MYRbcqSrn82kQKoiDbo81hcU9vMUuMpZShykjMjCHUxyI5VO04DDvkd4mRM7aNtvVvC4AX3c22S3b4lpAr3UDhLlwqsFiM+UDvNoOZp7WbS3L+W/At3HFjMoY3Tmy95kbKgyyc2o003oolIv+j3aWJw1i89kuLT2zauNw8yBp7qzGk5j86p/jC5l79wkCyo1YkKkSNtk1j3c69Njezu0cFh7eBW6jpi0Z1tIDxD3VZh3gI0J23ymvNYW82vrEXWxuRrGXKd/y8/cadHPLz5NDs7CC5Fw3wto3b6MzXFRj6vP+ZZm4oIkiCYBg6UtijuBbdlV+Gim6YygvAFwhYAUEEnYRUrD3mLBHVsv4h2yrMKozOx10Uzof3rjliAM6mbdtRGpjN3VgGcw/afOaI55Pt5foNxycIqTczZ2zKVeQyKSheV1AkGAYJ0MRpVjs/F3LR7lxgT38stllWYo9wHfqAeZPwRdz23ZGuKrLd7wKwQ/OQTy59KiA9xls2iHLZlAGrOxMR8eVEk1eF59F/0lxuIu3c10OHuqhByleIBp3RGwqnZ7OaQys8gggqF0I1BBLg/GPd1r0tyxiMThDir91HTDqLWUDvCCoI0EdJM6xyGhpW8ty6yrclMrm25JQM4TN3gXAVJlSxJJMRvAZUTlKSxH5fMrPafVnDs7GWLZIdjOp8ffM76T7zrKwqvZa4lt2a23rBktZVQ+E5uHqZB0jlTsA+W6LdwIxdJUG73JZZCXWYnJ5rp03gi0uO4oRUa0ini3cod8wfNohB0Z4AUCe8ADIaCCS/Km5IzReThB1AYgnOgFuUXTKxJtQQZ5baTvVjtjJcsWzb73BGrQoGVyCyQEWCjtz3DyK0eycV+HZ2toh4oVLikTlzFRmTyPEXSOY0GoDUt27OGvZQAGt3M3gLZmdURRJnKNDB7wmRo1NTEU4t43PGI0GY/b+oqPd6H9X+KdkXqfkPvXCo6n5D701FtSCxeQHvKx/wC7+mnu30marpdAIzZyOcPH9KsggAjMQDoe6OoPXypWRfbPy/zQpjJrInFXZYlCwXSBJ6CeZ5zzNVmvN7TfM1efKRlNzSZjLziKguHtc7pHuSf60ri/GUjxElt9Mom8/tN8zTrPaFxZBbOpEFXZip+AYa6bzWp2/wBnqi23UqAVgwuWTmYgxJgxHyrDa1/Mvz/xSNNFeHOPEjYvES5e4Sslix1G7EkwJ2qoRV0J/Mnx/wAir2E7NDo7FlOUaZFVgPV3Hl5Ayj1cfGk0ltelW9jBIpZFWTcPRf0r9qg109F/Sv2pHRdMrGoGrBunov6V+1QN49F/Sv2pcFExVtSSMu8iI3nlHnXcTZdWIcEMNw2jbcwddop9nFwRKoRImbdsmOcSu9d7XxKXbmdAwBCghsu6qE0y6AQooOh03q2xRQNs+XzH3o4RPT5j7124hUwQQRuCCCPeDSzSlEMxGGKHK0TCnSYhgCNY13peUQTInTTWTvrt/s0FiepqJFKMrrJGuVJlI3B128/dUaAwUUUVjBRRRWMFFFFYxbWvoXoB6B2+0MPcvXLuXLmCgEcuZrx/YNu3xk41i7eVtLdu2chu3CQEXNE5SdDl110rRu4y5ZtZrH/pgGexdti8zXGuLLF2ttqigEJO0r1qqOaabwjR7M9HVWzjb7Ph2/DTb4dwEliywHSCIbXTfUV56yneAyA95hBiNttuVSv8ayLlh+KmbhtcttmEkd5C6nyaRPWoWwJiG8R2GsRtv4qYm7rc0HxN66FL5ny2nClmkqoI1E6iPnrWh+JL2xaTDW1RTYYjukm4VVS+YiYuACVHdEnSsSymnhfwHYaSDvv4dpq7aRdZS6dbW06TGYb7trl6yNqZHPLGF5k1MDhHZyAEtBvxCsxYKuXLBQ5VJIBEAcyeQpFpSWUFUthltd8kQoLgcRyomDzjUb60gBQT3bgE3uR0AAy891PiHLzpvCQa5XHcQ+Uk7jXwnl57eTnPLG/mS/dRmdiyKzcUgto2YjQjM0EzEzHP4B7tntKhtCVB4TqApQZmZ9Ae9qRq2oy6VQZRm8LjvgARqNNVGvj/AGHOnog/+XZvzeem7AxTo522srz7G2rLqhty+RspZJhSRzME/tOlOttlZSVBOYZVPMg6AgbAbaeEHTvEkLSyf/l5fmH91OGH1kK5O3eK7dJzSP3iRpM0yRFz6s0r3ouPxqWDdtxdHE9XoqBjOUSTp012qHpP6PLg7yKjZwxHmZkVnth8Sx4pzerVRmzCEQHKomYVRIAFaGDuMWTiWxiHuZj3bpLi2AyshCmE1709BGxNZJodzUlj9nMQsq8ECckNMAf/AI+sjYc5q/hcM9y3eRiASOFnWCl1h6y2F9+XQ6aH4DJ7SxIYkW5ySYJ5iQQJAjkPfA2AAGtdwy28qIrjKBOcgvLDibLsIg5QZ0zKcwYVQ4qqNvezyhWoMtel7VwfGm8ijNA4irGuk5xHikakjfUjmFwmC+dMWjxE9imwpTCrrBPOoXShjcQI05+etK4loz7FFqjnidFMiNRt5joatEJ1b/fhU8QEyrlLA97NIYk7RyA67eVJpLKe2DJaKU1aS5lIIZpH8hNJKH23/SfvSuJdSKbWjGaGynQGNCegO00ssANCwJ0PQivSdm4fjBkOa7COQDbeVIRisMG07x0DSNYA1rz1zDuCQUaRoRlMz02qckykOIpNrp5zK2aOnyFQNzyHyFaOG7MvXD4co07zqVTVlUCcp1JYaVUxK3MzSIMmQNp5xSUy6krrBXN0eyP+P9tR449kf8f7aa9twAddSR56RuPj9DXbOEvP4VJ+IA6bsQKGfEUtJZr5FgggkICBEnSBO0nLpNOOLtcOBbUPO5CsCNOsRz0g8taV+Ku5GSQVaJkrOhkQZ0pCl11BjcbrsRB50G2Npvf9ju1by3rmZe7ooOZgdVUJOgEaKNKr3sFlQPnUyYgH38/hqOUjrSjZPl8x965wT0HzX70j9CsVSSTwiIH/AE/M/enYXDcRgsoJnmek7T5UYbAs7AaAE7ypj4TrVe9byMV3gkfIxS7chrTwnk6stAgeXeMdfapWYdB9fvUwh6T866tsnZP3+9AeyGYdB9fvXVcA7D/l96I/l/f711bZMnLsJ5/esbAX2BYkTrrrSq7Pl+9E+X71grByiuk0UDHq8Z6S3MVZwmFuZLVvDlQt1VOcCQM5y6nKNYGpIrOtXLaXLmYcdSLqoxLpLGQl3r/NlPWDVXE2cjsgZXysVzIZRoMZlMCVO4rifeq2c7pLA9rhaSzEkhd5JMQIJPSn2W7w7/5jqBrtvEc9oqsJg7bL1+lbPo/2k+FxNu8i22KXGMPOUnKQZ8tdKZEpbFW2wj+IQcjiI5z4fj/SrVi6BPrSNbWy7gRJ2/J9ctd7Qxb4i699uGpuLcYqJAAzTAHXXSm4VbneK5NOAWnMYEqFJ6DUZifOmRzyqvOo4Mh1425unwb5tAZjdh9tKGcRpcJ7iAaRqDqi6d2NyeVStWrrZ2VVZV47XCM5CiAGJ10UyMs896lcYhcxKEcO3tMxm0BnTN18vq6OaSrzuNzqNTckZ9NNCvJgI2jl8TOgKGLPBkkkN+U6TMAGNZnfzqxjLV21cIuhRcFxe6cwykrmBIOoEEHXU7++Dl0PfiYeFMjckktPLTQc5pydUNUhBvmYgaRPy02HXny01Nyw+YAwmuvh5SQOX8pp3o/2g+Eum9lR3K5MrCdwNB/NoJ5Ae+Kjlzks8QWLQNFJ1ML0USZJ31O27I5+Io13H2nj8qQYzDLAImYOnlTUt5rjFWS0pzlQLYbKIMJOWTPhk9dajhra5WzoJgcPKkjfXPIHLaOdOS2PYT9FURxynpOvjb74dcMbaZQ2aQFDe7TSpdl2LpITLO+XUafmIOvh0nqDqNd2pbHsJ/8Azq1YwyveDGyrEmSiqyqQBJAWYAgdKbZCPi68MWl0qQyhswM90SQTDcuR32ytowgyKzfScKMQwCw2VDcmR6wqC+mw1PLzrW7Rxaiy96wcoe4EAAGiZS0ISJHeGsV5Zrrbyfjr+9BZyV4UXGxIcAyVB8jm+9JxDgkkCB006eQA86sNfbr9B9qhcvMACGkmZGUafMVnR0xu7/soNSWrQt464rBhGhB1UfakXMTck6kfCkaR0Rcui+SqlsuwVdzoJIAn3kwKgMO5bKFYtMQASZG+1afZ+Jvm4oVok/mzBPc2XWKUe0HS6xZUiXVlUINwVMMwLDeedTaRRSlbSS26mXfw7oSrKwI3BBBFL4LH8rfWreNxRdswCqIUAd0wFRUGsCdF6CqpuN1X5J9qVpHRFulsWLC3rI4gQgEhe8FM6hx3WB5oCDG61RxSEuxyFZMkHUydTv8AP41dwy3LgZQ6AKC8d0iRAnKBvrv0qg+JaZJBPmqz+1I9PceCdvb7FcJj+X9qsGzdsrn7q59JBh1EnmNpyHmdJpPHY+z+lPtXWxN2AsjKNh3IBO8DYUuO5apdiolknQRoCdxyBMDz0pXD93zH3q0bz/y/K3UTdufy/K3S0u5VN9vkrcI+XzH3qzhOyrlwMwKKqxLO6qvemBJ56GnYV7zMFBQSYki3A9+hPyFPTtANbu2cQ5WSmVktqYKlswIXLMyN+lCo9zSnPlXLu6voZl2xcs3CNFdCRoy6HyM11MO95zLCTJJLAkmOgMnap9rYtbt93UaMxInQxtrBqql/KZXQ9QWB+YNI6KR1OKdU6EUR/ulMLjp9T965mHT6n70KKWcCHU9N9q4DG3PT4USOn1NEjp+9YJGimBh7P1NSvvJ3nf8AesATRRRQCXSCDBEEaEHcHoa9X6Keg+Ix9p71rKFSRrzI/avJTJkySd+tek9HPTHFYG29qy3deZBEwTzFUj3ObiXX4lHHYVbQCy3FBZbqkALbKtC5Wnv5hJOgil2hrOSe8REjp4acmGe6OMzFs90Iyqc17YO78Ia5YJg7SIpuIwqoVuIztauXLotarxiqECXRSSjaj38qcSWwq0wjwA9xtZHWM3vEHTetfBObdu6osPN0YcAi5kU284JBWIuLcIHkpoxfo/dw+GsYl5yX0fJlaSDuMw5LEzSfxBeBca+wQWUTUnKoMlddt2yjzpkc8n0LgthLTMbYVma6vDzEF7YGYsDlysqEARz3Eb1UuWxH8MCbduIZZJJjPEc9iOU86bdZ3gM+IOTjImYucijVVEnTUnMK61rTTODktzMxM6xyCxt9KdHPJpePqWMbZAytlNwsyl+8TkYzFlmKwe6oMjSPdVrFE3GF027mbKFdnucRmuhYJLkeLuyAfCB7hVZFYAoHvBDdDFZOpCxMT49xO8U5b5KZAzi2ZbLJyswzQd4iDq3v5bsiEpYpHbSA6kCIA0Oh5wv8vU8+fm+5eMwAM2/8qLpv9IHuJ1gCziOyry4ZcTpkchQSdVjmV6aaDrBImAEWrCqFLZ/WG4EyZXucVQILpmkElvhykyQ6ZBxbeR2C7OW86WrYzXWLZg4bQaQxIbxEz3Y00kzTu3eyGwbhLlu2Z1BBuf31U7PU4drd9LsMZIHq8whipDqXldqv47tJ8RcFy4+ZgIEFRlHOIZsv/WfCBprFFXYJaUudiLODdjC2EJ6BnJkakEZ9COlXrWNS3hiFtWBcFxGDh1ZuvgJJI7sHlrVYXsh03XSc+QLI8InbSe7vuWMmBzipACW7AY5lYu9tlhgApAAEEamfdTshFu8mxiMWEwjBzaOcMLSq0jO5V3feMq8gNm01gGvKMG9ofqrb7Y7QUYS3Y7uZHGXKQyFUFxGuhog52mB0XeCK80b58v0r9q0HgqodBzI3tj9YpTW39ofr/wA1A3z/AC/pX7U5scxtG3CwTMjKvs8hAJ7o1Ou9ZtFFFoQUb/8AYv6/80/DYQsGm4CQrMoW5rKqTqOmlZzL7vmK6rsmqsVno0T8jSWW0trDLOGxFxGBmY1g3SAffDjTyo7SwqlDeCjMW7yq4ZACGaZViRtsevSs97eni1naViPfNMTE3snCFwBDuuZAN53JpGx9DtNNd99igzj2fqaiSD+UfqP3p3aGGNpyhO0axEggHbXrVQgdR9ftSNnXGmk0MledtT/3n71dx2KRsOqKApBXSFhYa6WOcmWkOmh9msxlHUfX7UsqPaHyP2pLH0W0+mSBtHy+Y+9Ss4RnYAZRJAkssDzOs/Km37CC2GFwMxMFRpA72uuvIco72mxqqjQZEgjUEGCD1BG1Lgsm6x+iOItZWZSRKkqfeDB/alOsAagz05e+rF5ywMhixMlixJIg6Gd+WvlSOEelK0UT6kVuZSCJBGxBgg+RjSuXLgJJJJJ1JJkk+ZI1p9rBXGDEDRVLHXkN46nypDZojWN+e9DI6abwRAWDv5Drr1jSu4goQuQEad6TMnT/ADyHu51AIeh+Rpio5MDPJ9/+igPhZsrz7qMw6D6/ems0SCzZgYjlvrOtK4h6n5mgFBm8h9fvRPkPr96M56n5mu5z1PzoBOT5D60EeQ1ruc9T86HeY8uetYxEmiuUUDGjgMMbtxLasgLsFBdgqAnTvMdFHnXIgxI0kaQR8DzHnVvtPH8RLVu4hF2wDZZiQJtqYt2+GFGUp3wSSSZ12ro7IxAw4xXCbgElBc/KW2jrvTogy1Y7RVRnUtZvW7dtLTWAEztmIdrzE5sxRiJWJ0kRU+zbjOBh+Nato103M1wIqhltsMxeCQCO7l2kispZg7fl6/CKs2c2YQFnM28xMaj3dOdOich6YpyiqbpyhGhSQQsnVQDtMAzvVvDXIJ9aF1s/lXWCsHT2I+OXXlVWxmy7JHDfrOWRP/d05b1p27soqratKym1ncm5Nwsym2SCYWBoYidaeJzT8+S1ie1rt3x3VZg18l8iB3mGBc8wTovs8qUbmn8Se4g8A2nwddN/PnXFtsZ0teK/Or+5o8hEr03NddmiSLf8O2dM3hnQnlm5H6U6OWWWaNvtJ1U21cBSzBmW2Azh8uYMRuvcGm1Vw3PONA3ICNfpy92m5ygGdp1FsesjdvEBHXw/WnG8pRZRAwLsXDNOXoVmBlJJB8/jTI52PwgZyqNcCrKxnMIknVm9mNfdB5yRVxeIvG4p4iK1ru2yrW0ZQCSDIIJMk6n/ABUmY6kwAAvX4cvFty000mAEG+QdFY68u6PgChMe8yedEELu0an4xACqsWDFWzXLlviBgsMAVuDukkn4Cp4e5nYKLiqTzN22AIEzLXCAdNDG8VlDFN7Fz5j+yrt23ftojtYuhbglDK94fBKZMSXDbd19npPRDD4PEWrhvlQVkKpPhH9SdyeZrItdoXrl+5lbiL3ll82UAjKrAIR3tNI+5qFnD4jEW+DbsXVGbNeYjNPJIGRSCO8IG86xE1q2Oy3tIoRdCpcvIgLHe750zgDvH8o2B7oIW4vFlUUks/JR7fss+Ht3SUJtHhMAJOVizISSzTrnFednzH6f8Vr9s9rLwuBb1lw9xxlynKCFVYEkCSZJbfcxJwM56fv96ZOh+HFuKssFdJkHyymf2qF5cpKsQCNxl+PSlXHKkgiCNDqd/gaXexBclmgk7nX3daLkWjB32LeFxXDYPmU5SDGWCfcculUbpB/NpyBkwOm1Se+CmUIAc05hO0REGT9fhVaPI0jZSMEnZawli2zqGuQCyg6HYkDeIHvNK7UsC24CgiVBKlgxUmdJAHQH40nL/K3+/ChbJIJCNCgknSABvuKRlUmndle486kknz1pRjr9P8083V6H/h/bUTeTofkn9tLSLr0EXFE6GR125dK4bEicybxE6++OlWHvWwdMxHIwgPyy0/EXrPAUplDhmzBlBuFTtJFsLG/Of2paQ1tUZxw+kysdZqPC87f6j96uXu0BctLabQKQZAAGnEiEWFB9YZPOBVHEqmY5G7vLMDPxhaV0VjexYxGGHDFwOkyEyqx9mcxLNM+UR51UZm5FRplMONZmZk+cfCoZBzYf8v7aCqe1+/8AbQef+jxtb5C3YbkyiRB9YgkHcHvbU3tHs/gqrZ8xMAiBAJS2/dYMcwhwJ02pBRPa/f8Atpl24HADXWIXRQS5CjoBl0Gg26UrivGPbu+XoUq4rQZG41FbCdnWzaZwxaMxldFXKEIDZlBlpMa8uetZXc/m+lKx4yTsW7Ekk6k6n3muVfi0bLRAcMCMx7xEagQNtvrVA0GMnfI5RRRQCFFFFYwUUUVjHt/Rv0mPZ3EF7DcS+LjHLdRQRxEAucR2HEzSqkDbVidxWXZ9IruVbNz1mGFw3jhyStpjmLFZXvASeRrHuXmdizszMdSzEliepJ1NWLONdbVy0CMlzKX7qkyhJWGIlfEZgiedOmRcVd0at3sgXDYXDjM92zxXU3LUIwNwsoObujKmz96r3o7ewYw+JW9hLl64f4Tr4bQ0ADGe7qdzvMVk43tC1cFtlsrbuLHEC/wHC5Anqzse6SxJOYt8Kv30vLcxPEf8Mcwa7YDNaLh2DKtu0BDZZDRyXWmRKV0VOzsC95ktpbLO6kKJAls2jb6RIFaOM7LfDXXs3rBDobIIzbZiJAIOufbynlWVhL+SGW5cVlViCpIhpGUCNlPOtXFdoJehna/xfV8W4bjObpzSWIK9wouigeyDTxIzvz1FsFBPq41vfmXTKAVHi1yb+Yqb6AEW4OS2fENSTq0zz2ihLlvX1l3e715nQnTdh4uvOK41wRo1yciDWdwfDt4RuP61RHPL0LIYAklAozhQJB5TlkHnoa1OysA+Jzi1bzcNWd9xAzEA6jcZT8qycwJ1a4fWaSJ7vtajx+dXLGLKWsto3bdxi2e4hYBrZBi3lA2mWmedE53FPcTxwSAB3FyliCQAsiQOctqOusdSdftl8M18OqXsPYAQMn/umRMqrGBI2nfU7a1g3MOxGVZygCAc2p6nu6/05U30hs3bNwW7zl3KrcLFmaVdFyasATCgD5isPGKeER/8wI/h90ci3ecjzmQD7gKZi+2cReRUuX3ZU0UEmB9NfjWSrjnPz/xUw46H5j7U1h0JciwjQZDQfjTlfNlVrndB0BmBO8ToKSLlvIwhs+mUzI3E7RGk8jy2pKvHOPnRsXSWLwVWIDSASAREETvoaXmHU/IfeuC8fa/f7V1sSykgMSNRPUT57VrQVFjcKLRYB2YLzgeXUSfof61VZqDfb2j86icQ3tH50G0Mou7Is1Nt4RnQuBKrMnpABOnOARt1qK4h+Tn9VWP/ADN8hRsrSGAZmJZQwAYDvR+Ubg0uBmpckUCo6j6/ahNDAcLPdOrAEHkYG1QK+Y+YqBt+a/qFD2LJALY9pR+r7V3HYfhvlmdFYGIkMoO3kSR8KnjMIbaoxMhwSCNtGIIBGh5fOqRpGPHOU8EWNQJrpNRJpGWSORO1cNpvZPyNcNQNAdIkbTeyfkaibLeyfkagTUTQwOkyfBb2T8jXOA/st8jUDUDQwMky3c7PdbfEYQAwWCGBMgkESII0POfKqlPXFMqMgjKxBIyrJI21Ikc9jzPWq5pQqzlFFFAYKKKKxgooorGCiiisY9d6Eeht3tR2VGCKhGdiM0T0WROnnWf2/wBlDCXeDxRcdQ3EGRkyNmIC6nvSuVpHtRyq/wBg+kFzAYllwN+LdxkQPfUINYBa5BOQAk666Caxu1MQ9y9ce463HLNmdTKsQYlTzXTQ9KfFEfy1Z2LXYfZ/4q4bWeGNt2tgKDndELhNWAWYPeJ0ir1+1iLlu3ca0ES3Km4LcZzqRcuknvnWJ0EAVgZdDI0Mf6K+s2P/ABAW92dctXLaG8oCkXG1uEwnckHMQNY5AU0SXEbWx4TEG9wbBuXF4fCuiwPVkhBcOZNDIJYmM2vTStTAdjYh8Ldxa3bYt23sK3gklSkHeBkkac8prKvYXMty/YsH8MsoGuZC4zTlzlQJcZGggQBzruGNyGUIuUthyVPhJJXLpEd7SfeaZE5+fJaxt5S/qbhy+unicIsXKLxGGU+FzIXpHOl3LlyB6xT6u2Nl0AYdzeZXed+sVbfHMLXBTC2QC183SRnLvbLP3SUm2EV4ABgxyqjdVojh2x6q0dAJgtAc93xHY/1p0RaLovqBcNxyX4lvhleGFHtNcBJ0jQRpI1NX+38BfwRtC8ynio7qVZSIJkg6bnT5+VU8ZimuKqPYt50uIodYUcPJC2SgQAjmWMnrsKrujsFDIDlVwJYEwCRzXlypskmo4uvotPfvNYXvIbDXQACEJF0IJkTm0SNdvcZrN7Sxxv3WuEKuY6KohVUABVUSYAAGlbNnDrh7V67fs2wXw4FgFkzMb0qlxFyyYAcmCCNK8uDQbKQiOBqQakhq6GrWZxHZqM1Kmu5qNg0jM1czUuaJrWbSTLVEtUS1RLULCokiaiTUSaiTQsdI6TUCaCagTSjpAagTXSagTQZRICagTXSagTSjpHCaia6TUTQHSOGomumomlGRw1yg1ygMBrlFcrDBRRRQMFFFFYwUUUVjBRRRWMe57N7Nsve7UVrakW54Yjwf+tRO77Pd005V5TG465iGa9dbNccyxAVZgAbKABtyFFFNyJL+T9j0v/iH6vG3MMndsWOGbNseC2btu09zKP5jqawLVlSYjmR8gKKKePnyKtvb+hy4dcsxrw2bc+IEQa0cNgLZLSv5sMN2/PGfnzmuUUy8+CUm686oLuDQMdNvxnM/+0Bw+fL685pmNwiIsqserstufE3iPxrtFPHmSk9vOZ18MoJGv8cW/E3gI23+u9VmJHNtmO55MR18qKKLE5Ili8U/CS0XYpma5lJJGcqi5tecaVSFFFBjR/idFSoooGCpVyiiAK5RRWMcNcoooBImomiisMRNRNFFAdETUDRRSjoiaiaKKUZETUTRRQHRGomiigMcrhoooDHDXKKKwQooooGCiiisYKKKKxgooorGP//Z";

  constructor() { }

  ngOnInit(): void {
  }

}
