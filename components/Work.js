import styles from "./Work.module.scss";
import {Card} from "./Card";

export function Work() {

    const projects = [
        {
            title: "export-archive-reddit-saved",
            description: "Pull your Reddit saved posts to view offline, sorted by subreddits, 100+ stars, average 100 downloads weekly",
            url: "https://nooneswarup.github.io/export-archive-reddit-saved/",
            github:"https://github.com/nooneswarup/export-archive-reddit-saved",
            image: "/reddit-save.png"
        },
        {
            title: "hugo-blog-marketer",
            description: "Static site generator template for blogs, photography and marketers using hugo and netlify-cms",
            url:"https://hugo-blog-maketer.netlify.app/",
            github: "https://github.com/nooneswarup/hugo-blog-marketer",
            image: "/hugo-blog.png"
        },
        {
            title: "Bookmarks-regex",
            description: "A tool to remove duplicates from exported bookmarks files using python and regex",
            github: "https://github.com/nooneswarup/Bookmarks-regex",
            url: "https://github.com/nooneswarup/Bookmarks-regex",
        },
        {
            title: "Bulk-rename",
            description: "script to rename images in a folder in sequential order and make an archive of the collection ",
            github: "https://github.com/nooneswarup/bulk-rename",
            url: "https://github.com/nooneswarup/bulk-rename",
        },
        {
            title: "Hex-color-clock-year",
            description: "A clock which changes color based on time, with another clock which changes color every 1.8secs throught the year",
            url:"https://colorclockyear.netlify.app/",
            github: "https://github.com/nooneswarup/Color-Clock-Year",
            image: "/color-clock-year.png"
        }
    ];
    return (
        <div className={styles.container}>
            <div className={styles.grid}>

                {projects.map((project, id) =>
                                  <Card title={project.title}
                                        description={project.description}
                                        image={project.image}
                                        url={project.url}
                                        github={project.github}
                                        orientation={id % 2 === 0 ? "bot" : "top"}/>
                )}
            </div>
        </div>
    );
}