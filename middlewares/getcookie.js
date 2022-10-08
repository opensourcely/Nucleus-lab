exports.getCookie = (req, res, next) => {
    var axios = require('axios');

    var teacher = 'x-amcs-auth=U2FsdGVkX1%2BctBbLk4F34rXxfrzDd3LfcjiT5yIrpYlFX%2BUDgVvs4dA9ibf4OLkOtBd5epeBke%2BDoKi33CF7vLA0qDC2JwmL%2FylEfssY6cXkqKfOfMUhnrhjABTK3rQu2FKczz%2F7WW4XsVDKrqM1oJB%2FeYGoV5IZgWbAph3UK6%2BfhAH%2BgRx%2BdP2utsW0VB9%2Bc%2FqyTzJmqB5%2FaQTihfOwwKeBV7iyu5OCjWFnBchnRoSF03E1UzG8wPrvvf%2Fw6%2BIBgisDG88xk5Ex%2BBfVyUuX7hl4B2KeaJtzMbpF44uN4Bb%2BB9EhsQ0NHo6z7KG%2F4RuimVuTf2dp%2FqiqEKaQ5lgKxxL2vpTnqgEI9%2FhuyDU9FtASxqrkRczLniqZbvsq5kh40mrBhAKRUp%2Blhs3knTYQKLAvFCU%2F7QM2fG2qARAGhsv91UtI8UjFFK9qcqaqI1qFKZJCIL%2BbYmH8LTQtsSBVPNpk2O%2FHzZtelYWo4%2B9gGx7NtacPDLG7IZlAcJT9zlPRldLoR7umbsbWhZyBd49pD00OSRlQ5NtYvsvBBm9jNqDrarTED2vdZG7PuVjN8G%2BJjW7MBRKsdl02mc00A8mGPdfAWgkpqYWGvNC8ynr5ZLiSrXvXRAdmGQy2Ya%2BZnpAX%2FYeZKbp0zPcpIv%2BJlSd3Kst6D57Tgd5nECHtqh1Xd5phmeia5J1iz0IQMrv4Q9QWIFWlY8ru4OwWXKVoltwqVjuyX%2F86vy%2FNdrUY4756lJN5piylzUunnA2UCcJPaBau4NX48cIEjwq5F79BdJ7Js%2BAFgBUMdcQIr70mXqLQrHwzWU9kJcBp53GwJQkHT9IChKyxw4TSlUwSlAxNSVanaWetr7mveQmZdiyr4fxhbdS8onmkzXmTDtk6N36lctB82HqNTJf35doX8zOdd2GGV6YXxTdhFamQJxX0uC3vESXj7m9Cw%2FTzb%2FxK9W%2BvSNrg; x-amcs-refresh=U2FsdGVkX1%2BRyytJ778FPn1oI83rcNp1SRWeiHYrYno11tTEaVzI1NjnMefA6v5aBcUrOtY7q3RgOqrEojQcg%2FvliMIrwDuZPIbeqb1V1ECw51oUxn34tPFkWXbbAqi6hNE96EdC7Nj7%2FCDhHEjdK%2FasYcIPwaOjty89ZcekwOkysx8Vm3kmvK5f2eBxwMHaQBSMjd0RgmPok0ejX8xjWoPDJjB99lalHnwKPK6%2FNE9GVgkm4rPmq9alxLSXOWir';
    var admin =  'x-amcs-auth=U2FsdGVkX19nf81hlz3Yt4dxTTbGkfcLcXD96VG1As9N%2FtcN7w%2BN26zMjsNrbQgRpGYrRJ05meq4r1aqRH7qdiT2TJVlCs38YnIirohM68HUE8QXUXSicIyWacnIR2MQaOCvffe7%2FG0xx%2B9U8D1oK26eLqTIGejOvZzu6r6eM8n4Ij6AUlzXguFIN3EvWZei09gAJBMls%2B8gZijRHBnBotm3m5txliINJ760MacWSymwereVXi1txzGI9BWruaWLTn9AP1bOnlfcWX4d5%2Bgi1WqVdT0oziVUMeTfbfjLC6My7y1SDpXFO1ziHSWeZGR7s71%2BA%2BJs%2FvSWNKmMPnmFoRscQFV%2BpdcwPyF8%2Fx4JBfdkkGO%2BHoMXzE46up9YEdqh%2FKWTahJQCzdPK3RqanOI0xywD1n5KjAJKBEF%2F1dH%2F%2B1ddQgMbruBAsTHZ%2Bd%2Flm06Ch4xz9yuXiBM%2FRNPDXULQzrOKhdQ1wTFp%2F3VQkuYlTd5NsIzrkDNOOMspJuRPENClpntBwWybeborLU2C6C%2Bnb1O75MRmYHpe1%2FZyhxXPc1OztsEmkskZ5Mob6uDY6bsvI99TDeqoC0b9o%2FqG8TZEXdLLLBPogMAG4J4EJe8jyKh9vkzq0wPi8UmwY5msb09pDL79lgSYu9Ft2pdrFW8rQ%3D%3D; x-amcs-refresh=U2FsdGVkX1%2FrlZprdvkYtz2yG5oPtKFksvrHPycuIwAVKOJBGSxaCS926EIjSZVqNq%2BKHCbrbxi4ttBu9mz2lHiqaPoBhHmKNV2OnzzLlCMPawmenqAT2J8eVXnedoffXTX5K5A%2FxdJM7go0Vr7yWwvJ82DYm8v2LHFMFWVPUfVBbsuTgVrTw06F%2BNeC1IJPFsTHYv0uqfuG856vbJNDJ8bx5uzyWeBJTbV9Bj8ZQwiwnOKqNAPglo7jCvmHwDXf';
    var student = 'x-amcs-auth=U2FsdGVkX1%2FgVYIniOWCvvf72naGMFeJ3P38m6r7dgGFTpT2vg1tmngWSIxCf2BMlvbiBF4K7P5gN1le9Skcb8hYBjh9HHAB4xczR3RkYRtj%2BrjGuW9AkkCVu9x8DcCyd15FascxtjEms0eSHTaEgPYfJV%2B%2FAuk0eXceW13m80iSNcTVtbOHYbTtZ%2Fh4tnx%2FP05i%2BNbme%2BRMidqK8OVLyO2ldKXwySPy7NXcOxXUcLDmr5nDkjlfuT%2BpD9aKMcYCM%2F%2FE4W9RRNtJrCCZe0rftNfQ5W1gckXruGHcRZj3ow5vh9jOz036QhzJ3t5rzIjXv2tneJon6obxSiyIc%2BUoHzEY6pe86Cd3ulilWblOHe8fz7op%2F7zP5csZOl8J%2F23EsomcX0RlbRBUwGJiUtxQkLfVsLlemqibf%2FQTBJv2xKhAPkchdXEzejSIVLdzfEif3ulG1qdv3CTaFNARPMY0UbAdEeM5G3S3n6OfC48Lh%2FiF2A8IzxAFhhQedD2XmmQ51FbfMP8JREshJJ7peuggZGdBuKkHGI0uK44hVkFEEmRO9CunGkYtAZpyG5J4kxzkhIwBIpLMxlfdC7VEJiXCcFwpq9pKl4ZeN6JwPskSFKRnvCUilTGP3m23dM6mA%2FZuzdPoXog9ZjgE5OZX180kFV%2BL%2BNlrZ5QQ85Xx5cCsBK2NYAPZ6M2FwioBfFL9tDPMa5rzupXnnfsvynVAsgfi5y2uLFZz5Crwbn5VOGxJ0jM6OKhXqvNN3xu9mSTa23%2FGmPqLqDKp6ltkno8fapwCRgLsYMd8KGQVdP6Acpled53K5p7ad9ndElIZGDTSThV0FYwHJpDfYYxKXvrsNQatZSSYa1vTYJEJ74AwoyX4LV%2FxYOR8sYyF68po1DNGGwZI7tvaqf%2B4R8aIFIzG1gDNwznY1tGzQM3i%2BfQ7SepF3%2BY%3D; x-amcs-refresh=U2FsdGVkX1%2BBK8yDGICw0lm8ASmXmY%2FYaVEJAE%2BHDIyISwASmTiAF42u4VH0DEyRaVGDgmv9ozpH8M9WNtJxYDIP4QrXE0UTVh%2FGsQDQQZdY%2FbpFBV3FWaA3YWQa%2BMA%2BOehoVxRjAch%2FRQ9G7%2Fan9f%2F923%2F%2FsLZTj4qc%2BY80bdw6O5Jr2A0b3Gw0WbVR%2FleSsYSrfmyrq8Gmi58gR7mugHwPVfmqIvN9MpZoCjgRVlEBK8jjNbJPvNW5bgbPtrKs'
    var labAssistant = 'x-amcs-auth=U2FsdGVkX18Op0BWFIWXw6ccF1vv9ZpNXqGzefT5a6b32VMfFNAGGWAOM4BY0LYNMVDPDsi0ij6oNV0Mz%2B4pU5h6ff2MAoxljSryxVVIL0Q8fZMy0%2BQJ8h6ArTo0zM2Z2fVUidy9VEm%2F7lb8sw3uKLxiK7KScMIhyI%2BGkX2vSpjX1yawA39uW2lKTK2d9BeS3SHHfduQzUIF3POI5cDVKX8IcSq4Oou3cwDJeeXugKhywzxj%2FGR1bLPDrfkgL1K2X6Fc08sNghv8M5EQsU6PdJOk2WDYQjJmhKJeig71%2B8dDz6MQU%2BlsHJDIES8%2FK2ACN6x%2BlDDANA8XIQA%2BiU4Lead7AHqUBziJ0RnmhQjx9UkzQ5eOoqoMymCgEybJWZkaWVkBi%2B2PMIy7t%2BWEFmLeZqSDccFBQqP02iqTP5F2BiR6ggX%2Fc3oRhRSqyVugKz29TS9oK3HdZck8jHRGA%2BZH0WCLixUScOT1Bo2gUwbvDmxg1YEn4z2Zqj2aAuYDa8fqGTD%2BYLqyWquwbqM1Y5PJcrqvenq%2FjwEdsCsbPZr7no9gW0evTlVjEftZYakrCrRQfzvEBRlu6JlJrAYMr3hp%2BUBqJ5XS9EBnDUFTWhgMf6N%2Febc0vtVbs2NZj5PnNZwnd5TDxMSKyoIvn5rOz0gzFw%3D%3D; x-amcs-refresh=U2FsdGVkX19w%2FwAcqfAN4VWcUEpe%2FHylHBjx8uPmt3VN2v%2FkfGkRsHBC8BwA62ihjZPxNP5tmHgR9uKn7s631WMQhGGoSr5fJfH9LQbKx3MQkpxC%2FN%2FFdkiBLWfC96aTSp67fZXnWRZY5k6Y286zkFJ%2FR%2F7fD4jTUtQrRAO%2B0o3uxY3lf%2B7waEVmi58Ou48wjd4n3stkXHHDoI54vhTwVl2Bvgmr1Oxea0W%2FE0aTz0LwX%2B0YQDeEC49SOjvA66Vx';

    var config = {
        method: 'get',
        url: 'https://nucleus.amcspsgtech.in/server',
        headers: {
            'path': '/profile',
            'cookie': admin
        }
    };

    axios(config)
        .then(function (response) {
            if (response.request._redirectable._isRedirect) {
                res.redirect(response.request._redirectable._currentUrl);
            }
            else {
                // console.log(response.data.data);
                res.locals.userDetails = {
                    id : response.data.data.id,
                    firstName: response.data.data.firstName,
                    lastName: response.data.data.lastName,
                    mobileNo: response.data.data.mobileNo
                };
                if(response.data.data.id==="admin"){
                    res.locals.role = "admin"
                }
                else{
                    res.locals.role = response.data.data.roles[0];
                }
                next();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}


