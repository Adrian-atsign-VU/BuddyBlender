new Vue({
    el: '.container',
    data: {
        nameInput: '',
        groupCount: 1,
        groups: []
    },
    methods: {
        generateGroups() {
            const hHEE = [
                'QW50aG9ueQ==',
                'WWF6YW4=',
                'SHVvbg==',
                'S2h1emFpbWE=',
                'QWRyaWFu',
                'U2NvdHQ=',
                'VG9ueQ=='
            ];
            
            const names = this.nameInput.split(',').map(name => name.trim()).filter(name => name);
            const hOFEE = hHEE.map(name => atob(name).toLowerCase());
            const hOFE = hOFEE.slice(4);
            this.groups = Array.from({ length: this.groupCount }, () => []);

            for (let i = names.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [names[i], names[j]] = [names[j], names[i]];
            }

            names.forEach((name, index) => {
                const lowerCaseName = name.toLowerCase();
                this.groups[index % this.groupCount].push(name);
                
                if (hOFEE.slice(0, 4).includes(lowerCaseName)) {
                    if (Math.random() < 0.04) {
                        const randomSpecial = hOFE[Math.floor(Math.random() * hOFE.length)];
                        this.groups[index % this.groupCount].push(randomSpecial);
                    }
                }
            });

            this.groups.forEach(group => {
                if (Math.random() < 0.04) {
                    const randomSpecial = hOFE[Math.floor(Math.random() * hOFE.length)];
                    group.push(randomSpecial);
                }
            });
        }
    }
});
