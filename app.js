
        // Chart.js Default Config for Tooltips with Line Wrapping
        const chartPlugins = {
            tooltip: {
                callbacks: {
                    title: function(tooltipItems) {
                        const item = tooltipItems[0];
                        let label = item.chart.data.labels[item.dataIndex];
                        if (Array.isArray(label)) {
                            return label.join(' ');
                        } else {
                            return label;
                        }
                    }
                }
            }
        };

        // 1. Summary Chart (Overall scores for #1 winners)
        new Chart(document.getElementById('summaryChart').getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['文字: Claude', ['画像: ChatGPT', 'Images 2.0'], '動画: Kling AI', '音楽: Suno', '開発: Lovable'],
                datasets: [{
                    label: '総合品質スコア',
                    data: [94, 97, 92, 95, 91],
                    backgroundColor: ['#0056b3', '#00d4ff', '#ff6b6b', '#8b5cf6', '#f59e0b'],
                    borderRadius: 8
                }]
            },
            options: {
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: chartPlugins,
                scales: {
                    x: { min: 80, max: 100 }
                }
            }
        });

        // 2. Image Score Details (Bar)
        new Chart(document.getElementById('imageScoreChart').getContext('2d'), {
            type: 'bar',
            data: {
                labels: [['ChatGPT', 'Images 2.0'], 'Google Flow', 'Ideogram 4.0'],
                datasets: [{
                    label: '品質 (80)',
                    data: [77, 74, 72],
                    backgroundColor: '#00d4ff'
                }, {
                    label: '加点 (20)',
                    data: [20, 19, 16],
                    backgroundColor: '#ffffff'
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: chartPlugins,
                scales: {
                    x: { stacked: true, grid: { display: false } },
                    y: { stacked: true, max: 100 }
                }
            }
        });

        // 3. Video Comparison (Polar Area)
        new Chart(document.getElementById('videoComparisonChart').getContext('2d'), {
            type: 'polarArea',
            data: {
                labels: ['Kling AI', 'Google Flow', ['Luma Dream', 'Machine']],
                datasets: [{
                    data: [92, 90, 84],
                    backgroundColor: ['rgba(255, 107, 107, 0.7)', 'rgba(0, 86, 179, 0.7)', 'rgba(139, 92, 246, 0.7)']
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: chartPlugins,
                scales: { r: { display: false } }
            }
        });

        // 4. Music Radar
        new Chart(document.getElementById('musicRadarChart').getContext('2d'), {
            type: 'radar',
            data: {
                labels: ['旋律の良さ', '歌唱の自然さ', '音響空間', '指示追従度', '法的一貫性'],
                datasets: [{
                    label: 'Suno v4.5',
                    data: [98, 96, 90, 92, 85],
                    borderColor: '#8b5cf6',
                    backgroundColor: 'rgba(139, 92, 246, 0.2)'
                }, {
                    label: 'Udio v4',
                    data: [90, 88, 98, 94, 88],
                    borderColor: '#00d4ff',
                    backgroundColor: 'rgba(0, 212, 255, 0.2)'
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: chartPlugins,
                scales: { r: { angleLines: { display: true }, suggestMin: 80 } }
            }
        });

        // 5. Rubric Polar Area
        new Chart(document.getElementById('rubricPolarChart').getContext('2d'), {
            type: 'polarArea',
            data: {
                labels: ['基本品質 (40)', 'ベンチマーク (20)', 'トップ比 (12)', '安定性 (8)', '鮮度 (12)', '定番 (8)'],
                datasets: [{
                    data: [40, 20, 12, 8, 12, 8],
                    backgroundColor: [
                        '#0056b3', '#00d4ff', '#0056b3', '#00d4ff', '#ff6b6b', '#f59e0b'
                    ]
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: chartPlugins
            }
        });
    