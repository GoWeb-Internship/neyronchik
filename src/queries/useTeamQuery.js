import { graphql, useStaticQuery } from "gatsby";

export default function useTeam() {
  const team = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { team_identifier: { eq: "team" } } }
      ) {
        edges {
          node {
            frontmatter {
              en_team_member_name
              en_team_member_specialization
              en_team_member_experience
              uk_team_member_name
              uk_team_member_specialization
              uk_team_member_experience
              team_member_photo {
                id
                childrenImageSharp {
                  id
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
              team_identifier
              cert_list {
                uk_cert_alt
                en_cert_alt
                cert_img {
                  id
                  childrenImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
            id
          }
        }
      }
    }
  `);
  return team;
}
