var config = {
    style: 'mapbox://styles/hhodges/ck2pvojgn1gz61cqolg9wcdvt',
    accessToken: 'pk.eyJ1IjoiaGhvZGdlcyIsImEiOiJjazJwdnFoNjMwOGxiM2RzM2dydWpmZnprIn0.IZHj0jCl5Ym7VMqzMp2zIw',
    showMarkers: true,
    theme: 'dark',
    alignment: 'left',
    title: 'Toward The South Plains',
    subtitle: 'A Geospatial Installation',
    byline: 'By Harlan Hodges and Ryan Todd Garza',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'TTSP_Malibu',
            title: 'MALIBU',
            image: 'https://tbsp-images.s3-us-west-1.amazonaws.com/41_10-40_03+composite+vivid.jpg',
            description: 'Our story begins on the coast of California. As the morning sun rises, we begin our journey home. <audio controls controlsList="no download"> <source src="https://ttsp-soundmap.s3-us-west-1.amazonaws.com/Malibu_11.WAV" type="audio/mp3"></audio> <audio controls controlsList"no download"> <source src="https://ttsp-soundmap.s3-us-west-1.amazonaws.com/01+TTSP_0M01_Prologue.mp3" type="audio/mp3"></audio>',
            location: {
                center: [-118.95254, 34.04762],
                zoom: 13.5,
                pitch: 0,
                bearing: 180.
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'TTSP_Mojave',
            title: 'KELSO DUNES',
            image: 'https://tbsp-images.s3-us-west-1.amazonaws.com/00410005+vivid.jpg',
            description: 'Kelso Dunes, also known as the Kelso Dune Field, is the largest field of aeolian sand deposits in the Mojave Desert.',
            location: {
                center: [-115.699390, 34.892315],
                zoom: 13.5,
                pitch: 60,
                bearing: -96.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'TTSP_Kelso',
            title: 'KELSO DUNES',
            image: 'https://tbsp-images.s3-us-west-1.amazonaws.com/00410004+vivid.jpg',
            description: 'A calm night where the crickets call out peacefully. <audio controls> <source src="https://ttsp-soundmap.s3-us-west-1.amazonaws.com/TTSP_03FR_Mojave_Kelso+Dunes_10_RX.wav" type="audio/mp3"></audio>',
            location: {
                center: [-115.72564, 34.92389],
                zoom: 11.22,
                pitch: 00,
                bearing: 103.06
            },
            onChapterEnter: [
                  {
                     layer: 'ttsp-mojave-desert-kelso-dunes',
                     opacity: 0.33
            }
            ],
            onChapterExit: [
            {
                     layer: 'ttsp-mojave-desert-kelso-dunes',
                     opacity: 0
                 }
            ]
        }
    ]
};

