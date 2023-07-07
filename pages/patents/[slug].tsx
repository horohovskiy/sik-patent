import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


const PatentPage: React.FC = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [patentItem, setPatentItem] = useState(null);

    useEffect(() => {
        if (slug) {
            fetch(`http://localhost:1337/api/patent-items?populate=*&urlSlug=${slug}`)
                .then((response) => response.json())
                .then((data) => {
                    const patentData = data.data[0];
                    setPatentItem(patentData);
                })
                .catch((error) => {
                    // Handle error
                    console.error(error);
                });
        }
    }, [slug]);

    if (!patentItem) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Main Page</h1>
            <h1>{patentItem.attributes.Title}</h1>
            <p>{patentItem.attributes.ShortDescription}</p>
            <p>{patentItem.attributes.MainDescription}</p>
            <img src={patentItem.attributes.MainImage.data.url} alt={patentItem.attributes.MainImage.data.name} />
        </div>
    );
};

export default PatentPage;
